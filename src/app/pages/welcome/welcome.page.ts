import { AfterViewInit, Component, ElementRef, NgModule, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})

export class WelcomePage implements OnInit, AfterViewInit { 
  
  @ViewChild('welcome',{read: ElementRef, static:true}) welcome: ElementRef;

  constructor(private router:Router, private animationCtrl: AnimationController) { }

  ngOnInit() {
  }
  navegar(){
    this.router.navigate(['/login']);
  }

  //Implementación de animación en forma de "latido"
  ngAfterViewInit() {
    const animation = this.animationCtrl
      .create()
      .addElement(this.welcome.nativeElement)
      .duration(2000)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, transform: 'scale(1))', opacity: '1' },
        { offset: 0.5, transform: 'scale(1.1)', opacity: '1' },
        { offset: 1, transform: 'scale(1)', opacity: '1' }
      ]);
    animation.play();
  }
}