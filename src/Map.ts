export interface MarkInfo {
  name: string;
  pin: HTMLElement;
  email: string;
  location: {
    lat: number;
    lng: number;
  };
}

export class customMap {
  // make map only accessible inside customMap
  private map: google.maps.Map;

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

    marker.addListener('click', () => {
      const infowindow = new google.maps.InfoWindow({
        content: `<p>${MarkInfo.name}</p><a href=${MarkInfo.email}> website </a>`,
        ariaLabel: 'SOMEWHRE',
      });

      infowindow.open({
        anchor: marker,
        map: this.map,
      });
    });
  }
}
