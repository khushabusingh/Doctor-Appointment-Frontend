import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {

  patient: Patient = new Patient("", "", "", "", "", "", "", "", "");

//   topics: string[] = ['General', 'Gynaecology', 'Orthopaedics','Ophthalmology','Urology','Neurology','Trauma- Care','Surgery & Mis','Neurosurgery'];
 
//  doctors: string[] = ['Dr. Amol Rege', 'Dr. Amol Khot', 'Dr. Abhijeet Ganpule','Dr. Madhusudhan Vaidya','Dr. Mandar Jogalekar','Dr. Sainath Powar',' Dr. Amit Khedekar','Dr. Kaustubh Kulkarni','Dr. Vikramsingh Khot'];

getToday(): string {
  return new Date().toISOString().split('T')[0]
}

  constructor(private patientservice: PatientService, private router: Router) {

  }

  patientRegister() {
    console.log(this.patient);
    this.patientservice.addPatient(this.patient).subscribe(data => {
      alert("Successfully Patient is registered ");
      this.gotoListPatient();
    }, error => alert("Sorry Patient is already  registered by same email choose different email Id")
    );
  }


  gotoListPatient() {
    this.router.navigateByUrl("patient/patientlogin");
  }

 

  ngOnInit() {
  }
}