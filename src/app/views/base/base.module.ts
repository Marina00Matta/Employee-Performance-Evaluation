// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';
// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';
// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';
// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';
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

import { RoleFormComponent } from './role-form/role-form.component';
import { UsersComponent } from './users/users.component';
import { UsersFormComponent } from './users-form/users-form.component';

import { EvaluationCycleService } from '../../services/EvaluationCycle.service';
import { EvaluationCycleComponent } from './EvaluationCycle/EvaluationCycle.component';
import { UserEditFormComponent } from './user-edit-form/user-edit-form.component';
import { TrashedCriteriasComponent } from './trashed-criterias/trashed-criterias.component';
import { TrashUsersComponent } from './trash-users/trash-users.component';
import { RolesComponent } from './roles/roles.component';
import { GroupsComponent } from './groups/groups.component';
import { EditPositionFormComponent } from './edit-position-form/edit-position-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
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
    NavbarsComponent,
    CriteriasComponent,
    IndicatorsComponent,
    CriteriaFormsComponent,

    IndicatorFormsComponent,

    RoleFormComponent,
    UsersComponent,
    UsersFormComponent,

    EvaluationCycleComponent,

    UserEditFormComponent,

    TrashedCriteriasComponent,

    TrashUsersComponent,

    RolesComponent,

    GroupsComponent,

    EditPositionFormComponent,
  ],
  providers: [
    CriteriasService,
    IndicatorsService,   
    EvaluationCycleService,
    DatePipe
  ],
})
export class BaseModule { }
