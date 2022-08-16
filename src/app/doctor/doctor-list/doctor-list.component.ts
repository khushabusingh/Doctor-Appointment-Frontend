import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  constructor(private doctorservice : DoctorService , private router : Router) { }
  doctors : Doctor[]=[];
  ngOnInit():void {
    this.doctorservice.getAllDoctor().subscribe(data=>{
      this.doctors=data;
    } 
      )
  }


  //  updateDoctor(docid :number){
  //  console.log(docid);
  //  this.router.navigate(['updatedoctor',docid]);
  // }

  deleteDoctor(doctor) {
    this.doctorservice.deleteDoctor(doctor.docid).subscribe(data => {
      
      alert(" Doctor is deleted Successfully  ");
    }, error => alert("Sorry Doctor not deleted")
    )
  }

}
