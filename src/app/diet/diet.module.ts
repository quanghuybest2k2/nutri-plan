import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DietPageRoutingModule } from './diet-routing.module';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DietPage } from './diet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DietPageRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [DietPage]
})
export class DietPageModule { }
