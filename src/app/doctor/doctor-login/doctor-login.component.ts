import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';


@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {
  
  constructor(private doctorservice : DoctorService , private router : Router ){

  }
    ngOnInit() {
     
    }
  doctor: Doctor = new Doctor(0, "", "", "", "", "", "", "");

  loginDoctor(){
  this.doctorservice.loginDoctorfromRemote(this.doctor).subscribe(
    data =>{ console.log(data.name);
      if(data){
        alert("Doctor login successfully");
        window.sessionStorage.setItem("loggedin-username",data.name);
       // window.sessionStorage.setItem("loggedin-userid", data.docid);
        console.log( window.sessionStorage.getItem("loggedin-username"));
        window.sessionStorage.setItem("loggedin-status","loggedin");
        this.router.navigateByUrl("doctor/doctordashboard");
      }
    }, error => alert("Sorry email and password wrong")
  
    );
  }
  }

 
   
