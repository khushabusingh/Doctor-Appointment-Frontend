import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.css']
})
export class DoctorRegistrationComponent implements OnInit {

  // getToday(): string {
  //   return new Date().toISOString().split('T')[0]
  // }

  ngOnInit() {
  }

  doctor: Doctor = new Doctor(0,"","","","","","","");
 

  constructor (private doctorservice :DoctorService, private router : Router){
    
  }
  doctorRegister(){
    console.log(this.doctor);
    this.doctorservice.addDoctor(this.doctor).subscribe(data=>{
      alert("Successfully Doctor is registered ");
      this.gotoListDoctor();
    },error=>alert("Sorry this email is already used try with new email id")
    );
  }
  gotoListDoctor(){
    // this.router.navigate(['/doctorlogin'])
    this.router.navigateByUrl("doctor/doctorlogin");
  }

}
