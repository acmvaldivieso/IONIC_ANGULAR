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

      // this.dataService.getPosts()
      // .subscribe(posts => {
      //   console.log(posts);
      //   this.mensajes = posts;
      // });
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

  async generaViaje(){
    const alert = await this.alertController.create({
      message: 'Valor viaje $1.500 / 18:00 hrs',
      buttons: [{
        text: 'Aceptar',
        handler: () => {this.router.navigate(['/home']);}
      }]
    });
    await alert.present();
  }
}
