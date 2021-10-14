import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassPageRoutingModule } from './pass-routing.module';

import { PassPage } from './pass.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PassPage]
})
export class PassPageModule {}
