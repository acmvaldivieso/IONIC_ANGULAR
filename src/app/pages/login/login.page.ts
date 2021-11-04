import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router, public alertController: AlertController, public navController: NavController) { }

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
}