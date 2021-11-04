import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';


declare var mapboxgl: any;

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

  geoNativo(){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition) => {
        this.coordenadas = geoposition;
        console.log(this.coordenadas);
        var latitud: number = + (this.coordenadas.coords.latitude);
        console.log(latitud);
        var longitud: number = + (this.coordenadas.coords.longitude);
        console.log(longitud);

        this.lat = latitud;
        this.long = longitud;
    })
  }

  ngAfterViewInit(){

    //llamar al metodo que recupera las coordenadas al momento de cargar la page
    this.geoNativo();


  }

  ngOnInit() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2ViYWNhZmZpIiwiYSI6ImNrdms2aWIxMjVyMDcycG1zdDl1Y3h6ajMifQ.mhVzhcoHBED9TvS0FVR_Yg';
    
    const map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-71.623726, -33.042465],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      container: 'map',
      antialias: true
    });

    map.on('load', () => {
      // Insert the layer beneath any symbol layer.
      const layers = map.getStyle().layers;

      const labelLayerId = layers.find(
        (layer) => layer.type === 'symbol' && layer.layout['text-field']
      ).id;
       
      // The 'building' layer in the Mapbox Streets
      // vector tileset contains building height data
      // from OpenStreetMap.
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
            
            // Use an 'interpolate' expression to
            // add a smooth transition effect to
            // the buildings as the user zooms in.
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
  }

}
