import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarsComponent } from './navbars/navbars.component';
import { CriteriasComponent } from './criterias/criterias.component';
import { IndicatorsComponent } from './indicators/indicators.component';
import { CriteriaFormsComponent } from './criteria-forms/criteria-forms.component';
import { IndicatorFormsComponent } from './indicator-forms/indicator-forms.component';
import { RoleFormComponent } from './role-form/role-form.component';
import { UsersComponent } from './users/users.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { UserEditFormComponent } from './user-edit-form/user-edit-form.component';
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
        redirectTo: 'criteria'
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
        path: 'edit_user/:id',
        component: UserEditFormComponent,
        data: {
          title: 'edit_user'
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
        path: 'indicator-forms',
        component: IndicatorFormsComponent,
        data: {
          title: 'indicator-forms',
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
