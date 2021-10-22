import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  user={
    usuario:'',
    pass:''
  };

  async ingresar(page){
    if(this.user.usuario == 'sebastian' && this.user.pass == '123' || this.user.usuario == 'alain' && this.user.pass == '123')
    {  const navigationExtras: NavigationExtras={
        state:{
          nombre: this.user.usuario.toUpperCase()
        }
      };
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
}