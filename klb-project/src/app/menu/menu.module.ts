import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import {CombosService} from '../shared/combos.service'

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    CombosService
  ]
})
export class MenuModule { }
