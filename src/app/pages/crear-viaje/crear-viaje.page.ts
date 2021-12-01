import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.page.html',
  styleUrls: ['./crear-viaje.page.scss'],
})
export class CrearViajePage implements OnInit {

  constructor(private router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  async generaViaje(){
    const alert = await this.alertController.create({
      message: 'Viaje generado!',
      buttons: [{
        text: 'Aceptar',
        handler: () => {this.router.navigate(['/conductor']);}
      }]
    });
    await alert.present();
  }

}
