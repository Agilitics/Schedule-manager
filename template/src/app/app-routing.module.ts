import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PickupComponent } from './pickup/pickup.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pickup', component: PickupComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'app', pathMatch: 'full'}
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
