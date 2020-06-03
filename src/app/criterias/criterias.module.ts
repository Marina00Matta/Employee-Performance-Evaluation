import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http' ;
import {  CriteriasService } from './criterias.service'

@NgModule({
  declarations: [],
  imports: [
    CommonModule , HttpClientModule,
  ],
  providers: [CriteriasService],
})
export class CriteriasModule { }
