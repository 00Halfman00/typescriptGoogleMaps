interface MarkInfo {
  name: string;
  pin: HTMLElement | null;
  email: string | null;
  location: {
    lat: number;
    lng: number;
  };
}

export class customMap {
  private map: google.maps.Map;
  // mark: google.maps.marker.AdvancedMarkerElement;

  constructor(mapDivId: string) {
    this.createMaps(mapDivId);
  }
  // using .then to return a new promise to create map v1
  createMap(id: string) {
    google.maps
      .importLibrary('maps')
      .then((res) => {
        const { Map } = res as google.maps.MapsLibrary;
        this.map = new Map(document.getElementById(id) as HTMLElement, {
          zoom: 3,
          center: { lat: 25.0, lng: 350 },
        });
      })
      .catch((err) => console.error(err));
  }
  // using async await to create map v1
  async createMaps(id: string): Promise<void> {
    const { Map } = (await google.maps.importLibrary(
      'maps'
    )) as google.maps.MapsLibrary;

    this.map = new Map(document.getElementById(id) as HTMLElement, {
      zoom: 3,
      center: { lat: 25.0, lng: 350 },
      mapId: 'DEMO_MAP_ID',
    });
    // this.map.
    this.map.addListener('mouseover', () => {
      console.log('clicked on map');
    });
  }

  // using async await to create makers on map v1
  async createMarker(MarkInfo: MarkInfo): Promise<void> {
    const { AdvancedMarkerElement } = (await google.maps.importLibrary(
      'marker'
    )) as google.maps.MarkerLibrary;

    const marker = new AdvancedMarkerElement({
      map: this.map,
      position: {
        lat: +MarkInfo.location.lat,
        lng: +MarkInfo.location.lng,
      },
      content: MarkInfo.pin,
    });

    const infowindow = new google.maps.InfoWindow({
      content: MarkInfo.email
        ? `<p>${MarkInfo.name}</p><a href=${MarkInfo.email}> website </a>`
        : `<p>${MarkInfo.name}</p>`,
      ariaLabel: 'SOMEWHRE',
    });
    infowindow.open({
      anchor: marker,
      map: this.map,
    });
  }
}
