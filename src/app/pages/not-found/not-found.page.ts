import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {

  @ViewChild('animar404',{read: ElementRef, static:true}) animar404: ElementRef;

  constructor(private animationCtrl: AnimationController, private router: Router) { }

  ngAfterViewInit(){

    //Creación de la animación del GIF implementado en el HTML
    const animation = this.animationCtrl
      .create()
      .addElement(this.animar404.nativeElement)
      .duration(1000)
      .iterations(1)
      .fromTo('transform', 'translateY(0px)', 'translateY(-100px)')
      .fromTo('opacity', '0', '1')
      .fromTo('transform', 'translateY(-100px)', 'translateY(0px)');
    animation.play();
  }

  ngOnInit() {
  }

  //Metodo generico para la navegación entre las pages
  navegar(page){
    this.router.navigate(page);
  }
}
