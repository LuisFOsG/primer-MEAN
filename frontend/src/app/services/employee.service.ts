import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URL_API = "http://localhost:3000/api/empleados"

  selectedEmployee: Employee = {
    name: "",
    office: "",
    position: "",
    salary: 0,
  };

  employees: Employee[];

  constructor(private http: HttpClient){ }

  getEmpleados(){
    return this.http.get<Employee[]>(this.URL_API);
  }

  crearEmpleado(employee: Employee){
    return this.http.post(this.URL_API, employee);
  }

  actualizarEmpleado(employee: Employee){
    return this.http.put(this.URL_API+"/"+employee._id, employee);
  }

  eliminarEmpleado(_id: string){
    return this.http.delete(this.URL_API+"/"+_id);
  }
}
