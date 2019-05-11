import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { CombosService } from './combos.service';

@NgModule({
  declarations: [
    CombosService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
