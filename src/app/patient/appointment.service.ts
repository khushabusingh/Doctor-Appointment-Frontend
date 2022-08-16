import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient: HttpClient) {

   }
    addPatientappointment(appointment: Appointment): Observable<Appointment> {
    console.log(appointment);
    console.log(appointment.doctor.docid);
    let url: string = "http://localhost:8586/api/appointment/"+appointment.doctor.docid+"/addappointments";
    return this.httpClient.post<Appointment>(url, appointment);
  }

  
  // addProduct(product: Product): Observable<Product> {
  //   let url: string = "http://localhost:9090/api/categories/"+product.category.categoryId+"/products";
  //   return this._httpClient.post<Product>(url, product).pipe(map(response => response));
  // }
}
