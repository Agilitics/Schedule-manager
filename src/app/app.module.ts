import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/Menu';
import { MatButtonModule } from '@angular/material/Button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { EventsComponent } from './components/events/events.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    RegisterComponent,
    EventsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    NgbModule,
    ReactiveFormsModule
   
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
