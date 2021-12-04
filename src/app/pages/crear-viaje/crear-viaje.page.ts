import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.page.html',
  styleUrls: ['./crear-viaje.page.scss'],
})
export class CrearViajePage implements OnInit {

  datos: any = {
    destino : '',
    ruta : '',
    patente : '',
    valor : '',
    descripcion : ''
  }

  constructor(private router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  async generaViaje(){
    //almacenamiento de datos del formulario en el localStorage
    localStorage.setItem('destino',this.datos.destino);
    localStorage.setItem('ruta',this.datos.ruta);
    localStorage.setItem('patente',this.datos.patente);
    localStorage.setItem('valor',this.datos.valor);
    localStorage.setItem('descripcion',this.datos.descripcion);
    const alert = await this.alertController.create({
      message: 'Viaje generado!',
      buttons: [{
        text: 'Aceptar',
        handler: () => {this.router.navigate(['/conductor']);}
      }]
    });
    await alert.present();
    this.enviarCorreo();
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

  submit(){
    console.log("se creo el viaje");
    this.datos.reset;
  }

  //Falta corregir el salto de linea que no ocurre.
  enviarCorreo(){
    var feedback = document.createElement('a');
    feedback.setAttribute('href', 
    'mailto:sebastian.caffi@gmail.com?subject=Detalles%20del%20viaje&body=Su%20viaje:'
    +'\n%20Destino:%20'+localStorage.getItem('destino')
    +'\n%20Ruta:%20'+localStorage.getItem('ruta')
    +'\n%20Patente:%20'+localStorage.getItem('patente')
    +'\n%20Valor:%20'+localStorage.getItem('valor')
    +'\n%20Descripcion:%20'+localStorage.getItem('descripcion'));
    feedback.click();
    console.log('correo enviado');
  } 
}