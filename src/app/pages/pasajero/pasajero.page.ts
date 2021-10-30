import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {

  datos: any;

  constructor(private router:Router, public alertController: AlertController, private dataService: DataService) { }

  //Cargar el dato de la API al crear la PAGE de PASAJERO
  ngOnInit() {
    
    this.datos = this.dataService.getAPI();
  }

  navegar(page){
    this.router.navigate(page);
  }
  
  async salirSesion(){
    const alert = await this.alertController.create({
      message: '¿Seguro deseas salir?',
      buttons: [{
        text: 'Cancelar'
      },{
        text: 'Aceptar',
        handler: () => {this.router.navigate(['/login']);}
      }]
    });
    await alert.present();
  }

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
