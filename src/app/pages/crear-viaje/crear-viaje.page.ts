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
    this.datos.reset();
  }

  // async enviarCorreo(){  /* escribir en el archivo */
  //   console.log('escribirEnArchivo');
 
  //   /* definimos la estructura del correo */
  //   const email = {
  //     to: '',
  //     cc: '',
  //     subject: 'Datos del viaje',
  //     body: 'Se registró un viaje en nuestra apliación <strong>- TeLlevoAPP -</strong>\n' + localStorage.getItem('destino'),
  //     isHtml: true
  //   };

  //   /* se envia correo */
  //   this.emailComposer.open(email);

  // }

}