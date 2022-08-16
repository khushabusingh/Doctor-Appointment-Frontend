import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pid } from 'process';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  //baseUrl = "http://localhost:8586/register";
  constructor(private httpClient: HttpClient) {

  }

  addPatient(patient: Patient): Observable<Object> {
    console.log(patient);
    let url: string = "http://localhost:8586/api/patient/register";
    return this.httpClient.post(url, patient);
  }

  getAllPatient(): Observable<Patient[]> {
    let url: string = "http://localhost:8586/api/patient/getPatient";
    return this.httpClient.get<Patient[]>(url);
  }

  getPatientById(pid: number): Observable<Patient> {
    let url: string = "http://localhost:8586/api/patient/register/" + pid;
    return this.httpClient.get<Patient>(url)
    // throw new Error('Method not implemented.');
    //let url: string = "http://localhost:9090/api/categories/"+categoryId;
  }

  deletePatient(pid) {
    let url: string = "http://localhost:8586/api/patient/deletePatient/" + pid;
    return this.httpClient.delete(url);
  }

  loginPatientfromRemote(patient: Patient): Observable<Patient> {
    let url: string = "http://localhost:8586/api/patient/login";
    return this.httpClient.post<Patient>(url, patient);
  }

 


}
