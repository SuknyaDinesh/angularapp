import { Component } from '@angular/core';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { UserComponent } from './modules/user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'LovePulse';
  drawerwidth = 60;
  loadComponent = DashboardComponent;
  ToggleMenu(state){
    if(state === true){
      this.drawerwidth = 250;
    }
    if(state === false){
      this.drawerwidth = 60;
    }
  }
  assignComponent(component ){
    if (component === "dashboard") {this.loadComponent = DashboardComponent;}
    else if (component === "user"){this.loadComponent = UserComponent;} 
    else this.loadComponent = DashboardComponent;
  }
}
