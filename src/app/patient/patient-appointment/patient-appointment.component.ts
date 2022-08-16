import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/doctor/doctor';
import { DoctorService } from 'src/app/doctor/doctor.service';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.css']
})
export class PatientAppointmentComponent implements OnInit {
  // doctor: Doctor = new Doctor(0, "", "", "", "", "", "", "");

  loggedInUsername: string = "";
  appointment: Appointment = new Appointment(0, null, null, null, new Doctor(0, "", "", "", "", "", "", ""));
  now: string;
  doctors: Doctor[] = [];

  constructor(private appointmentservice: AppointmentService, private router: Router, private doctorservice: DoctorService) { }
 
  ngOnInit() {
    const datePipe = new DatePipe('en-Us');
    this.now = datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.loggedInUsername = window.sessionStorage.getItem("loggedin-username");
    this.doctorservice.getAllDoctor().subscribe(data => {
      this.doctors = data;
    }
    )
  }

  patientAppointment() {
    console.log(this.appointment);
    let doctorName = window.sessionStorage.getItem("loggedin-username");
    this.doctors.forEach(doctor => {
      if (doctor.name === doctorName) {
        this.appointment.doctor.docid = doctor.docid;
        console.log(this.appointment.doctor.docid);
      }
    })
    console.log(this.appointment.doctor);
    let patientid = window.sessionStorage.getItem("loggedin-userid");
    this.appointment.patient = new Patient(patientid, "", "", "", "", "", "", "", "");

    this.appointmentservice.addPatientappointment(this.appointment).subscribe(data => {
      console.log(data);
      if (data) {
        alert("Appointment booked Successfully ");
        this.appointment = new Appointment(0, null, null, null, new Doctor(0, "", "", "", "", "", "", ""));
      } else {
        alert("Problem adding appointment")
      }

    })

  }
  onsubmit() {
    //   console.log(this.appointment);
    //   let doctorName = this.appointment.doctor.name;
    //   this.doctors.forEach(doctor => {
    //     if(doctor.name === doctorName) {
    //       this.appointment.doctor.docid = doctor.docid;
    //     }
    //   })
    //   console.log(this.appointment.doctor);
    //   this.appointmentservice.addPatientappointment(this.appointment).subscribe(data => {
    //     if(data) {
    //       alert("doctor added successfully");
    //       // 
    //     }
    //     else {
    //       alert("Problem adding appointment");
    //     }
    //   })
  }
}
