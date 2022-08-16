import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

 
  constructor(private patientservice : PatientService , private router : Router) { }

  patients : Patient[]=[];
  ngOnInit():void {
    this.patientservice.getAllPatient().subscribe(data=>{
      this.patients=data;
    } 
      )
  }


   updatePatient(pid :number){
   console.log(pid);
   this.router.navigate(['update',pid]);
  }

  deletePatient(patient) {
    this.patientservice.deletePatient(patient.pid).subscribe(data => {
      
      alert(" Patient is deleted Successfully  ");
    }, error => alert("Sorry Patient not deleted")
    )
  }


}
