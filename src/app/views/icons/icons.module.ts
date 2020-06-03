import { NgModule } from '@angular/core';

import { CoreUIIconsComponent } from './coreui-icons.component';
import { FlagsComponent } from './flags.component';
import { FontAwesomeComponent } from './font-awesome.component';
import { SimpleLineIconsComponent } from './simple-line-icons.component';
import { RolesComponent } from './roles.component';

import { IconsRoutingModule } from './icons-routing.module';

@NgModule({
  imports: [ IconsRoutingModule ],
  declarations: [
    CoreUIIconsComponent,
    FlagsComponent,
    FontAwesomeComponent,
    SimpleLineIconsComponent,
    RolesComponent
  ]
})
export class IconsModule { }

