import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
 
  //baseUrl = "http://localhost:8586/api/doctor/docregister";
  constructor(private httpClient : HttpClient) { 
    
  }

  addDoctor(doctor: Doctor ): Observable<Doctor>
  {
    console.log(doctor);
    let url : string ="http://localhost:8586/api/doctor/docregister";
    return this.httpClient.post<Doctor>(url, doctor);
  }

  getAllDoctor(): Observable<Doctor[]>
  {
    let url : string ="http://localhost:8586/api/doctor/getDoctor";
    return this.httpClient.get<Doctor[]>(url);
  }

  
  
  deleteDoctor(docid) {
    let url: string = "http://localhost:8586/api/doctor/deleteDoctor/" + docid;
    return this.httpClient.delete(url );
  }


  loginDoctorfromRemote(doctor: Doctor): Observable<Doctor> {
    let url: string = "http://localhost:8586/api/doctor/doclogin";
    return this.httpClient.post<Doctor>(url, doctor);
  }
 
}
