import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent} from './components/register/register.component';
import { EventsComponent} from './components/events/events.component';


const routes: Routes = [{
path:'',
pathMatch: 'full',
redirectTo: 'dashboard'
},
{
path: 'dashboard',
component: DashboardComponent,
},
{
path: 'register',
component: RegisterComponent,
},
{
path: 'events',
component: EventsComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
