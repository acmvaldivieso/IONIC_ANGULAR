import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

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

  constructor(private router: Router, public alertController: AlertController, public toastController: ToastController) { }

  ngOnInit() {
  }

  validarFormulario(){
    if (this.datos.destino!='' && this.datos.ruta!='' && this.datos.patente!='' && this.datos.valor!='' && this.datos.descripcion!='') {
      this.generaViaje();
    } else {
      this.presentToast();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Debe llenar todos los campos!',
      position: 'bottom',
      duration: 2000,
      color: 'danger'
    });
    toast.present();
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
        handler: () => {this.router.navigate(['/conductor']),
        this.limpiarFormulario();;}
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

  limpiarFormulario(){
    console.log("formulario borrado");
    this.datos.reset;
  }

  enviarCorreo(){
    var feedback = document.createElement('a');
    feedback.setAttribute('href', 
    'mailto:nan.bernal@profesor.duoc.cl?subject=Detalles%20del%20viaje&cc=sebastian.caffi@gmail.com&body=Su%20viaje:'
    +'%20Destino:%20'+localStorage.getItem('destino')
    +'%20Ruta:%20'+localStorage.getItem('ruta')
    +'%20Patente:%20'+localStorage.getItem('patente')
    +'%20Valor:%20'+localStorage.getItem('valor')
    +'%20Descripción:%20'+localStorage.getItem('descripcion'));
    feedback.click();
    console.log('correo enviado');
  } 
}