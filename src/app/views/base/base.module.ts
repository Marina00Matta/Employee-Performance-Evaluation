// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { CardsComponent } from './cards.component';

// Forms Component
import { FormsComponent } from './forms.component';

import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabsComponent } from './tabs.component';

// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselsComponent } from './carousels.component';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CollapsesComponent } from './collapses.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoversComponent } from './popovers.component';

// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';
import { PaginationsComponent } from './paginations.component';

// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ProgressComponent } from './progress.component';

// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TooltipsComponent } from './tooltips.component';
import { DataTablesModule } from 'angular-datatables';
import { DatePipe } from '@angular/common';


// navbars
import { NavbarsComponent } from './navbars/navbars.component';

// Components Routing
import { BaseRoutingModule } from './base-routing.module';

import { CriteriasComponent } from './criterias/criterias.component';
import { CriteriasService } from '../../services/criterias.service';
import { CriteriaFormsComponent } from './criteria-forms/criteria-forms.component';
import { IndicatorsComponent } from './indicators/indicators.component';
import { IndicatorsService } from '../../services/indicators.service';


import { IndicatorFormsComponent } from './indicator-forms/indicator-forms.component';

import { RolesComponent } from './roles/roles.component';
import { RoleFormComponent } from './role-form/role-form.component';
import { UsersComponent } from './users/users.component';
import { UsersFormComponent } from './users-form/users-form.component';

import { EvaluationCycleService } from './EvaluationCycle/EvaluationCycle.service';
import { EvaluationCycleComponent } from './EvaluationCycle/EvaluationCycle.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BaseRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    ModalModule.forRoot(),
    DataTablesModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
  ],
  declarations: [
    CardsComponent,
    FormsComponent,
    SwitchesComponent,
    TablesComponent,
    TabsComponent,
    CarouselsComponent,
    CollapsesComponent,
    PaginationsComponent,
    PopoversComponent,
    ProgressComponent,
    TooltipsComponent,
    NavbarsComponent,
    CriteriasComponent,
    IndicatorsComponent,
    CriteriaFormsComponent,

    IndicatorFormsComponent,

    RolesComponent,
    RoleFormComponent,
    UsersComponent,
    UsersFormComponent,

    EvaluationCycleComponent,
  ],
  providers: [
    CriteriasService,
    IndicatorsService,   
    EvaluationCycleService,
    DatePipe
  ],
})
export class BaseModule { }
