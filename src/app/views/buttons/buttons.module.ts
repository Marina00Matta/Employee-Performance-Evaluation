import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ButtonsComponent } from './buttons.component';
import { BrandButtonsComponent } from './brand-buttons.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DropdownsComponent } from './dropdowns.component';

// Buttons Routing
import { ButtonsRoutingModule } from './buttons-routing.module';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { EvaluationFormComponent } from './evaluation-form/evaluation-form.component';

// Angular

@NgModule({
  imports: [
    CommonModule,
    ButtonsRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule
  ],
  declarations: [
    ButtonsComponent,
    DropdownsComponent,
    BrandButtonsComponent,
    EvaluationComponent,
    EvaluationFormComponent
  ]
})
export class ButtonsModule { }
