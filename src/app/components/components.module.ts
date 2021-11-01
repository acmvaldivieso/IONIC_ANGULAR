import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { LogoComponent } from './logo/logo.component';
import { MapsComponent } from './maps/maps.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    MapsComponent
  ],
  exports: [
    HeaderComponent,
    LogoComponent,
    MapsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
