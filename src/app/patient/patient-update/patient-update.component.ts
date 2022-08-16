import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',
  styleUrls: ['./patient-update.component.css']
})
export class PatientUpdateComponent implements OnInit {
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  pid !: number;
  constructor(private activerouter : ActivatedRoute , private patientservice : PatientService) { }
patient : Patient= new Patient("","","","","","","","","");

  ngOnInit(): void {
 this.pid= this.activerouter.snapshot.params['pid'];
 console.log(this.pid);
 this.patientservice.getPatientById(this.pid).subscribe(data =>{
  this.patient=data;
 })
  }

updatePatientData(){

}
}
