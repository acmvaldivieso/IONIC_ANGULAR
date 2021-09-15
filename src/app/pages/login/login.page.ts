import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  navegar(page){
    const navegationExtras: NavigationExtras = {
      state:{nombre: this.user.nombre}
    }
    this.router.navigate(page, navegationExtras);
  }

  user = {nombre: ''};
}