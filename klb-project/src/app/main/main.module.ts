import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {CombosService} from '../shared/combos.service'
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    CombosService
  ]
})
export class MainModule { }
