import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './cards.component';
import { FormsComponent } from './forms.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';
import { TabsComponent } from './tabs.component';
import { CarouselsComponent } from './carousels.component';
import { CollapsesComponent } from './collapses.component';
import { PaginationsComponent } from './paginations.component';
import { PopoversComponent } from './popovers.component';
import { ProgressComponent } from './progress.component';
import { TooltipsComponent } from './tooltips.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { CriteriasComponent } from './criterias/criterias.component';
import { IndicatorsComponent } from './indicators/indicators.component';
import { CriteriaFormsComponent } from './criteria-forms/criteria-forms.component';
import { RoleFormComponent } from './role-form/role-form.component';
import { RolesComponent } from './roles/roles.component';
import { UsersComponent } from './users/users.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { EvaluationCycleComponent } from './EvaluationCycle/EvaluationCycle.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'cards'
      },
      {
        path: 'cards',
        component: CardsComponent,
        data: {
          title: 'Cards'
        }
      },
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Forms'
        }
      },
      {
        path: 'criteria',
        component: CriteriasComponent,
        data: {
          title: 'criteria'
        }
      },
      {
        path: 'indicator',
        component: IndicatorsComponent,
        data: {
          title: 'indicators'
        }
      },
      {
        path: 'positions',
        component: RolesComponent,
        data: {
          title: 'Position'
        }
      },
      {
        path: 'Users',
        component: UsersComponent,
        data: {
          title: 'Users'
        }
      },
      {
        path: 'criteria-forms',
        component: CriteriaFormsComponent,
        data: {
          title: 'criteria-forms'
        }
      },
      {
        path: 'user-form',
        component: UsersFormComponent,
        data: {
          title: 'user-form'
        }
      },
      {
        path: 'position-forms',
        component: RoleFormComponent,
        data: {
          title: 'position-forms'
        }
      },
      {
        path: 'EvaluationCycle',
        component: EvaluationCycleComponent,
        data: {
          title: 'EvaluationCycle'
        }
      },
      {
        path: 'switches',
        component: SwitchesComponent,
        data: {
          title: 'Switches'
        }
      },
      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Tables'
        }
      },
      {
        path: 'tabs',
        component: TabsComponent,
        data: {
          title: 'Tabs'
        }
      },
      {
        path: 'carousels',
        component: CarouselsComponent,
        data: {
          title: 'Carousels'
        }
      },
      {
        path: 'collapses',
        component: CollapsesComponent,
        data: {
          title: 'Collapses'
        }
      },
      {
        path: 'paginations',
        component: PaginationsComponent,
        data: {
          title: 'Pagination'
        }
      },
      {
        path: 'popovers',
        component: PopoversComponent,
        data: {
          title: 'Popover'
        }
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: {
          title: 'Progress'
        }
      },
      {
        path: 'tooltips',
        component: TooltipsComponent,
        data: {
          title: 'Tooltips'
        }
      },
      {
        path: 'navbars',
        component: NavbarsComponent,
        data: {
          title: 'Navbars'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
