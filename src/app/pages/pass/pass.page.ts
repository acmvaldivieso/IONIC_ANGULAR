import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.page.html',
  styleUrls: ['./pass.page.scss'],
})
export class PassPage implements OnInit {

  correo: any;

  constructor(private router:Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  navegar(page){
    this.router.navigate(page);
  }

  /*Alerta para avisar que se envío la contraseña al correo */
  async correoEnviado(){
    const alert = await this.alertController.create({
      message: 'Contraseña enviada',
      buttons: [{
        text: 'Aceptar', 
        handler: () => {this.router.navigate(['/login']);}
      }]
    });
    await alert.present();
  }
}
