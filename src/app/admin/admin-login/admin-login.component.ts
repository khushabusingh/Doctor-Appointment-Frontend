import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin: Admin= new Admin("","","");
  
  constructor() { }

  ngOnInit() {
  }

}
