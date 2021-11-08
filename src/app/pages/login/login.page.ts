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
  

  //Validaciones en bruto de las credenciales del LOGIN, el usuario ingresado se almacena en el localStorage para lograr
  //la persistencia del dato y no perderlo al refrescar la page.
  async ingresar(page){
    if(this.user.usuario == 'sebastian' && this.user.pass == '123' || this.user.usuario == 'alain' && this.user.pass == '123')
    { 
      //Gestión del usuario en localStorage
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
      //Blanquear el nombre y el usuario.
      this.user.pass='';
      this.user.usuario='';
    }
  }


  //Navegación a la page Hombre, transportando el dato del nombre del usuario ingresado
  navegar(page){
    const navegationExtras: NavigationExtras = {
      state:{nombre: this.user.usuario}
    }
    this.router.navigate(page, navegationExtras);
  }
}