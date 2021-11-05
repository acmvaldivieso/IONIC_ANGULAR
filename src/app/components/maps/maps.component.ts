import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

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

    mapboxgl.accessToken = 'pk.eyJ1Ijoic2ViYWNhZmZpIiwiYSI6ImNrdms2aWIxMjVyMDcycG1zdDl1Y3h6ajMifQ.mhVzhcoHBED9TvS0FVR_Yg';
    
    const map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-71.545821, -33.009761],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      container: 'map',
      antialias: true
    });

    map.on('load', () => {
      
      //recalcular las dimesiones del mapa al momento de la carga
      map.resize();

      //Marker
      new mapboxgl.Marker()
        .setLngLat([-71.545821, -33.009761])
        .addTo(map);

      const layers = map.getStyle().layers;

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

    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
          enableHighAccuracy: true
      },
      trackUserLocation: true
    }));

  }

  //Metodo para obtener coordendas desde el GPS
  geoNativo(){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition) => {
        this.coordenadas = geoposition;
        console.log(this.coordenadas);
        var latitud: number = + (this.coordenadas.coords.latitude);
        console.log(latitud);
        var longitud: number = + (this.coordenadas.coords.longitude);
        console.log(longitud);
    })
  }

  ngAfterViewInit(){

    //llamar al metodo que recupera las coordenadas al momento de cargar la page
    this.geoNativo();
  }
}
