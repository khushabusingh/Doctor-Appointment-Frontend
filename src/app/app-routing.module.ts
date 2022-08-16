import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminLogoutComponent } from './admin/admin-logout/admin-logout.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorDashboardComponent } from './doctor/doctor-dashboard/doctor-dashboard.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { DoctorLoginComponent } from './doctor/doctor-login/doctor-login.component';
import { DoctorLogoutComponent } from './doctor/doctor-logout/doctor-logout.component';
import { DoctorRegistrationComponent } from './doctor/doctor-registration/doctor-registration.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HomeComponent } from './home/home.component';
import { PatientAppointmentComponent } from './patient/patient-appointment/patient-appointment.component';
import { PatientDashboardComponent } from './patient/patient-dashboard/patient-dashboard.component';
import { PatientHomeComponent } from './patient/patient-home/patient-home.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientLoginComponent } from './patient/patient-login/patient-login.component';
import { PatientLogoutComponent } from './patient/patient-logout/patient-logout.component';
import { PatientRegistrationComponent } from './patient/patient-registration/patient-registration.component';
import { PatientUpdateComponent } from './patient/patient-update/patient-update.component';
import { PatientComponent } from './patient/patient.component';
import { PolicyComponent } from './policy/policy.component';


const routes: Routes = [


  { path: "", redirectTo: "dashboard", pathMatch: "full" },

  {
    path: "dashboard", component: DashboardComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "about", component: AboutComponent },
      { path: 'policy', component: PolicyComponent },
      // { path: 'doctorlogin', component: DoctorLoginComponent },
      // { path: 'doctorregister', component: DoctorRegistrationComponent },
      // { path: 'doctorlist', component: DoctorListComponent },
      // { path: 'doctor', component: DoctorComponent },
      // { path: 'admin', component: AdminComponent },
      // {
      //   path: 'adminlogin', component: AdminLoginComponent},
      // { path: 'adminlist', component: AdminListComponent },
      // { path: 'patient', component: PatientComponent  },
      // { path: 'patientregister', component: PatientRegistrationComponent },
      // { path: 'patientlist', component: PatientListComponent },
      // { path: 'patientlogin', component: PatientLoginComponent },

    ]
  },

  {
    path: 'doctor', component: DoctorComponent,
    children: [
      { path: 'doctorlogin', component: DoctorLoginComponent },
      { path: 'doctorregister', component: DoctorRegistrationComponent },
      { path: 'doctorlist', component: DoctorListComponent },
      { path: 'doctordashboard', component: DoctorDashboardComponent },
      { path: 'doctorlogout', component: DoctorLogoutComponent },
    ]
  },

  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: 'adminlogin', component: AdminLoginComponent },
      { path: 'adminlist', component: AdminListComponent },
      { path: 'admindashboard', component: AdminDashboardComponent },
      { path: 'adminlogout', component: AdminLogoutComponent }
    ]
  },

  {
    path: 'patient', component: PatientComponent,
    children: [
      { path: 'patientregister', component: PatientRegistrationComponent },
      { path: 'patientlist', component: PatientListComponent },
      { path: 'patientlogin', component: PatientLoginComponent },
      { path: 'patientlogout', component: PatientLogoutComponent },
      { path: 'update/:pid', component: PatientUpdateComponent },
     
      {
        path: 'patientdashboard', component: PatientDashboardComponent,
        children: [
          {path: 'patienthome', component: PatientHomeComponent},
          { path: 'appointment', component: PatientAppointmentComponent },
        ]
      },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
