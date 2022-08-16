import { Time } from "@angular/common";
import { Doctor } from "../doctor/doctor";
import { Patient } from "./patient";

export class Appointment {
    constructor(
        public appid: number,
        public  patient :Patient,
        public dateOfAppointment : Date,
        public timeOfAppointment : Date,
        public doctor : Doctor,
    ){
    }
}
