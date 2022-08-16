import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';

import { NgForm } from '@angular/forms';
import { PatientService } from '../patient.service';
@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {
  

constructor(private patientservice : PatientService , private router : Router ){

}
  ngOnInit() {
   
  }

  patient: Patient = new Patient("", "", "", "", "", "", "", "", "");


loginPatient(){
this.patientservice.loginPatientfromRemote(this.patient).subscribe(
  data =>{
    console.log(data.fname);
    if(data){
      alert("Patient login successfully");
      window.sessionStorage.setItem("loggedin-username",data.fname);
      window.sessionStorage.setItem("loggedin-userid",data.pid);
      console.log( window.sessionStorage.getItem("loggedin-username"));
      window.sessionStorage.setItem("loggedin-status","loggedin");
      this.router.navigateByUrl("patient/patientdashboard/patienthome");
    }
    // this.router.navigateByUrl("patient/patientlogin");
    
    // else{
    //   alert("Inavlid email or password try to login again");
    //   this.router.navigateByUrl("patient/patientlogin");
   }, error => alert("Sorry email and password wrong")
  
   );
}
} 

