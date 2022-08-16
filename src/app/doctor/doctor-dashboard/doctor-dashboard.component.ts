import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit {
  loggedInUsername: string="";
  constructor() { }

  ngOnInit() {
    this.loggedInUsername = window.sessionStorage.getItem("loggedin-username");
  }

}
