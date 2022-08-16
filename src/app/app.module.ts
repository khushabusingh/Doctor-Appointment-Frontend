import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorLoginComponent } from './doctor/doctor-login/doctor-login.component';
import { DoctorRegistrationComponent } from './doctor/doctor-registration/doctor-registration.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { PatientComponent } from './patient/patient.component';
import { PatientLoginComponent } from './patient/patient-login/patient-login.component';
import { PatientRegistrationComponent } from './patient/patient-registration/patient-registration.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule}from '@angular/common/http';
import { PolicyComponent } from './policy/policy.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PatientUpdateComponent } from './patient/patient-update/patient-update.component';
import { PatientDeleteComponent } from './patient/patient-delete/patient-delete.component';
import { DoctorDeleteComponent } from './doctor/doctor-delete/doctor-delete.component';
import { DoctorUpdateComponent } from './doctor/doctor-update/doctor-update.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientDashboardComponent } from './patient/patient-dashboard/patient-dashboard.component';
import { DoctorDashboardComponent } from './doctor/doctor-dashboard/doctor-dashboard.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { PatientAppointmentComponent } from './patient/patient-appointment/patient-appointment.component';
import { PatientLogoutComponent } from './patient/patient-logout/patient-logout.component';
import { DoctorLogoutComponent } from './doctor/doctor-logout/doctor-logout.component';
import { AdminLogoutComponent } from './admin/admin-logout/admin-logout.component';
import { PatientHomeComponent } from './patient/patient-home/patient-home.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    DoctorLoginComponent,
    DoctorRegistrationComponent,
    DoctorListComponent,
    PatientComponent,
    PatientLoginComponent,
    PatientRegistrationComponent,
    PatientListComponent,
    AdminComponent,
    AdminLoginComponent,
    AdminListComponent,
    PolicyComponent,
    AboutComponent,
    HomeComponent,
    PatientUpdateComponent,
    PatientDeleteComponent,
    DoctorDeleteComponent,
    DoctorUpdateComponent,
    DashboardComponent,
    PatientDashboardComponent,
    DoctorDashboardComponent,
    AdminDashboardComponent,
    PatientAppointmentComponent,
    PatientLogoutComponent,
    DoctorLogoutComponent,
    AdminLogoutComponent,
    PatientHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
