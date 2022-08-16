import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-logout',
  templateUrl: './patient-logout.component.html',
  styleUrls: ['./patient-logout.component.css']
})
export class PatientLogoutComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit( ) {
    window.sessionStorage.clear();
    alert("You have successfully logged out");
    this.router.navigateByUrl("/dashboard/home")
  }

}
