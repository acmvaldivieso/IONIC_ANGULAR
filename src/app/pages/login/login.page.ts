import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  implements OnInit {

  constructor(private router:Router, public alertController: AlertController, public navController: NavController,public loadingController: LoadingController) { }

  ngOnInit() {
  }

  user={
    usuario:'',
    pass:''
  };
  
  async ingresar(page){
    if(this.user.usuario == 'sebastian' && this.user.pass == '123' || this.user.usuario == 'alain' && this.user.pass == '123')
    {  
      localStorage.setItem('usuario',this.user.usuario);
      localStorage.setItem('ingresado', 'true');
      const navigationExtras: NavigationExtras={};
      this.router.navigate(page, navigationExtras);
      this.user.pass='';
      this.user.usuario='';
    } else if (this.user.usuario != 'sebastian' && this.user.usuario != 'alain' || this.user.pass != '123'){
      const alert = await this.alertController.create({
        message: 'Usuario y/o Contraseña invalidos',
        buttons: [{
          text: 'Aceptar'
        }]
      });
      await alert.present();
      this.navController.navigateRoot(page);
      this.user.pass='';
      this.user.usuario='';
    }
  }

  navegar(page){
    const navegationExtras: NavigationExtras = {
      state:{nombre: this.user.usuario}
    }
    this.router.navigate(page, navegationExtras);
  }

   // async presentLoading() {
  //   const loading = await this.loadingController.create({
  //     cssClass: 'my-custom-class',
  //     message: 'Please wait...',
  //     duration: 2000
  //   });
  //   await loading.present();

  //   const { role, data } = await loading.onDidDismiss();
  //   console.log('Loading dismissed!');
  // }

  // async presentLoadingWithOptions() {
  //   const loading = await this.loadingController.create({
  //     spinner: null,
  //     duration: 5000,
  //     message: 'Click the backdrop to dismiss early...',
  //     translucent: true,
  //     cssClass: 'custom-class custom-loading',
  //     backdropDismiss: true
  //   });
  //   await loading.present();

  //   const { role, data } = await loading.onDidDismiss();
  //   console.log('Loading dismissed with role:', role);
  // }
}