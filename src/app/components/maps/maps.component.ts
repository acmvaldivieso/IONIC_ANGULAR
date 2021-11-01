import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {

  coordenadas: any;
  latitud:any;
  longitud:any;

  constructor(public geolocation: Geolocation) { }

  ngAfterViewInit(){
    this.geoNativo();
  }

  geoNativo(){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition) => {
        this.coordenadas = geoposition;
        console.log(this.coordenadas);
        this.latitud= this.coordenadas.coords.latitude;
        console.log(this.latitud);
        this.longitud= this.coordenadas.coords.longitude;
        console.log(this.longitud);
    })
  }

  ngOnInit() {}

}
