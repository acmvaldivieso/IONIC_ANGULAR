import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit, AfterViewInit { 
  
  @ViewChild('logo',{read: ElementRef, static:true}) logo: ElementRef;

  constructor( private animationCtrl: AnimationController) { }

  ngOnInit() {}
  
  ngAfterViewInit() {
    const animation = this.animationCtrl.create()
      .addElement(this.logo.nativeElement)
      .duration(1000)
      .iterations(1)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '0', '1')
      .fromTo('transform', 'translateX(100px)', 'translateX(0px)');
    animation.play();
  }

}
