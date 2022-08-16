import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {
   loggedInUsername: string = "";
   appointment: Appointment = new Appointment(0, null, null, null,null);
  
  constructor(private appointmentservice: AppointmentService,private router : Router ) { }

  ngOnInit() {
     this.loggedInUsername = window.sessionStorage.getItem("loggedin-username");
  }


}
