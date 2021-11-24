import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

import { Viaje } from 'src/app/interfaces/viaje-interface';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {

  viaje: Viaje[] = [];

  constructor(private router:Router, public alertController: AlertController, private dataService: DataService) { }

  //Cargar el dato de la API al crear la PAGE de PASAJERO
  ngOnInit() {
    
    //Metodo para llamar el arreglo de la API
    this.dataService.getAPI().subscribe(resp =>
      {
        console.log(resp);
        this.viaje.push(...resp.viaje);
      })
  }

  navegar(page){
    this.router.navigate(page);
  }
  
  //Metodo para salir de la sesión, se implementa en botón en HTML
  async salirSesion(){
    const alert = await this.alertController.create({
      message: '¿Seguro deseas salir?',
      buttons: [{
        text: 'Cancelar'
      },{
        text: 'Aceptar',
        handler: () => {this.router.navigate(['/login']);
        localStorage.removeItem("ingresado");}
      }]
    });
    await alert.present();
  }

  //Alert para mostrar un mensaje en pantalla al presionar el botón reservar viaje
  async reservarViaje(){
    const alert = await this.alertController.create({
      message: 'Su viaje fue reservado con exito',
      buttons: [{
        text: 'Aceptar',
        handler: () => {this.router.navigate(['/home']);}
      }]
    });
    await alert.present();
  }
}
