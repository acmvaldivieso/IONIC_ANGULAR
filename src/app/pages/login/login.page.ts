import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Credenciales } from 'src/app/interfaces/viaje-interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  implements OnInit {

  credenciales: Credenciales[] = [];

  constructor(private router:Router, public alertController: AlertController, public navController: NavController,
              public loadingController: LoadingController, private dataService: DataService) { }

  ngOnInit() {
    //Metodo para llamar el arreglo de la API
    this.dataService.getAPI().subscribe(resp =>
      {
        console.log(resp);
        this.credenciales.push(...resp.credenciales);
      })
  }

  user={
    usuario:'',
    pass:''
  };

  //Validaciones a traves de la API.
  //la persistencia del dato y no perderlo al refrescar la page. Arrastro el dato desde la API al localStorage
  async ingresar(page){

    const login=this.credenciales.find(c => c.username === this.user.usuario)

    if (login === undefined){
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
    else if(this.user.usuario === login.username && this.user.pass == login.password)
    { 
      //Gestión del usuario en localStorage
      localStorage.setItem('usuario',login.nombre);
      localStorage.setItem('ingresado', 'true');
      this.router.navigate(page);
      this.user.pass='';
      this.user.usuario='';
    }
  }

  //Navegación a la page Hombre, transportando el dato del nombre del usuario ingresado
  navegar(page){
    this.router.navigate(page);
  }

  submit(){
    console.log("Ingresado con exito!");
  }
}