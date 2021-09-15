import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
dato:any;
  constructor(private router:Router, public alertController: AlertController, private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state){
        this.dato = this.router.getCurrentNavigation().extras.state.nombre;
      }
    });
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
        handler: () => {this.router.navigate(['/login']);}
      }]
    });
    await alert.present();
  }
}