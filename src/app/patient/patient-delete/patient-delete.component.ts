import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-delete',
  templateUrl: './patient-delete.component.html',
  styleUrls: ['./patient-delete.component.css']
})
export class PatientDeleteComponent implements OnInit {
//  pid : number= 0;
//   patient : Patient = null;
  constructor(private activatedRoute: ActivatedRoute, private patientservice: PatientService, private router: Router) { }

  ngOnInit() {
    
    // this.activatedRoute.params.subscribe(data => {
    //   this.pid = data.id;

    //   this.patientservice.deletePatient(this.pid).subscribe(data => {
    //     console.log(data);
    //     alert("Patient deleted successfully");
    //     this.router.navigateByUrl("/Patient/patientlist");
    //   }, error => {
    //     console.log(error.message);
        
    //   })

    // })
  }

}
