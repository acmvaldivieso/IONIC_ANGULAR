import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

//declaracion de variables
declare var mapboxgl: any;
declare var MapboxGeocoder: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {

  coordenadas: any;
  lat:number;
  long:number;

  constructor(public geolocation: Geolocation) { }
  
  ngOnInit() {
    //Creación de mapa con coordenadas por defecto y así mostrar la animación al momento de presionar la ubicación actual
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2ViYWNhZmZpIiwiYSI6ImNrdms2aWIxMjVyMDcycG1zdDl1Y3h6ajMifQ.mhVzhcoHBED9TvS0FVR_Yg';
    const map = new mapboxgl.Map({ 
      container: 'map', 
      style: 'mapbox://styles/mapbox/streets-v9',  
      center: [-71.545821, -33.009761],  
      zoom: 13});

    map.on('load', () => {
      
      //recalcular las dimesiones del mapa al momento de la carga
      map.resize();

      //Marker personalizado
      new mapboxgl.Marker()
        .setLngLat([-71.545821, -33.009761])
        .addTo(map);


      //Agregar descripción en el mapa de un punto en especifico
      map.addSource('places', {
        
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [{
            'type': 'Feature',
            'properties': {
              'description':
              '<strong>Tienda LEGO</strong><p><a href="https://www.tiendalego.cl/" target="_blank" title="Opens in a new window">Tienda LEGO CHILE</a> es la tienda oficial de LEGO en Chile, donde se pueden encontrar los diferentes set disponibles, incluyendo LEGO bricks.</p>',
              'icon': 'rocket-15'
            },
              'geometry': {
                'type': 'Point',
                'coordinates': [-71.545821, -33.009761]
            }
          }]
        }
      });

      map.addLayer({
        'id': 'places',
        'type': 'symbol',
        'source': 'places',
        'layout': {
        'icon-image': '{icon}',
        'icon-allow-overlap': true
        }
      });

      //Desplegar la info al hacer click en places
      map.on('click', 'places', (e) => {
       
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;
  
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
         
        new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);
        });

      const layers = map.getStyle().layers;

      //Implementación de edificios 3D en el mapa
      const labelLayerId = layers.find(
        (layer) => layer.type === 'symbol' && layer.layout['text-field']
      ).id;
      map.addLayer(
          {
            'id': 'add-3d-buildings',
            'source': 'composite',
            'source-layer': 'building',
            'filter': ['==', 'extrude', 'true'],
            'type': 'fill-extrusion',
            'minzoom': 15,
            'paint': {
            'fill-extrusion-color': '#aaa',
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height']
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.6
            }
          },
        labelLayerId
        );
      });

    map.addControl(new MapboxGeocoder({
      accessToken: mapboxgl.accessToken
    }));


    //Control de navegacipon dentro del mapa
    map.addControl(new mapboxgl.NavigationControl());

    //Botón de localización dentro del mapa
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
          enableHighAccuracy: true
      },
      trackUserLocation: true
    }));

  }

  //Metodo para obtener coordendas desde el GPS de forma nativa
  geoNativo(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.long = resp.coords.longitude;
      this.lat = resp.coords.latitude;
      console.log(this.long, this.lat);
    })
  }

  ngAfterViewInit(){

    //llamar al metodo que recupera las coordenadas al momento de cargar la page
    this.geoNativo();
  }
}
