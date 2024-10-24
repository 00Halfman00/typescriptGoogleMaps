//  initialize and add map and marker
//  example I wrote using .then instead of async await
const renderMap = (): void => {
  google.maps
    .importLibrary('maps')
    .then((res) => {
      const { Map } = res as google.maps.MapsLibrary;
      return Map;
    })
    .then((Map) => {
      const map = new Map(document.getElementById('map') as HTMLElement, {
        zoom: 4,
        center: { lat: -25.344, lng: 131.031 },
        mapId: 'DEMO_MAP_ID',
      });
      google.maps
        .importLibrary('marker')
        .then((res) => {
          const { AdvancedMarkerElement } = res as google.maps.MarkerLibrary;
          return AdvancedMarkerElement;
        })
        .then((AME) => {
          const marker = new AME({
            map,
            position: { lat: -25.344, lng: 131.031 },
            title: 'Uluru',
          });
        });
    })
    .catch((err) => console.error(err));
};

//Initialize and add the map
// example from goole website to load map and marker on map using async await
async function initMap(): Promise<void> {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };

  // Request needed libraries.
  //@ts-ignore
  const { Map } = (await google.maps.importLibrary(
    'maps'
  )) as google.maps.MapsLibrary;

  const { AdvancedMarkerElement } = (await google.maps.importLibrary(
    'marker'
  )) as google.maps.MarkerLibrary;

  // The map, centered at Uluru
  const map = new Map(document.getElementById('map') as HTMLElement, {
    zoom: 4,
    center: position,
    mapId: 'DEMO_MAP_ID',
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: 'Uluru',
  });
}

// initMap();
