import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-logout',
  templateUrl: './doctor-logout.component.html',
  styleUrls: ['./doctor-logout.component.css']
})
export class DoctorLogoutComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
    window.sessionStorage.clear();
    alert("You have successfully logged out");
    this.router.navigateByUrl("/dashboard/home")
  }

}
