import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{

  dato = localStorage.getItem("usuario");

  constructor(private router:Router, public alertController: AlertController, private activeRoute: ActivatedRoute) {
    
  }

  ngOnInit() {
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
        handler: () => {this.router.navigate(['/login'],);
        localStorage.removeItem("usuario");
        localStorage.removeItem("ingresado");}
      }]
    });
    await alert.present();
  }
}