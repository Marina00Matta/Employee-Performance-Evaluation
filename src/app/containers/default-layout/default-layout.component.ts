import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import { navUserItems } from '../../_navUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public role = sessionStorage.getItem("user_role")
  public sidebarMinimized = false;
  public navItems = (this.role === 'superadmin' || this.role === 'Admin') ? navItems : navUserItems;
  constructor(private route:Router){}
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('XSRF-TOKEN');
    sessionStorage.removeItem('user_role');
    sessionStorage.removeItem('user_id');
    this.route.navigate(['/login']);
  }
}
