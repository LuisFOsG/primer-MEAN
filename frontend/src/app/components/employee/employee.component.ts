import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  resetForm(form: NgForm){
    form.reset();
  }

  getEmployees(){
    this.employeeService.getEmpleados().subscribe(
      res => {
        this.employeeService.employees = res;
      },
      err => console.log(err)
    )
  }

  addEmployee(form: NgForm){
    if(form.value._id){
      this.employeeService.actualizarEmpleado(form.value).subscribe(
        res => {
          this.getEmployees();
          form.reset();
        },
        err => console.error(err)
      )
    }else{
      this.employeeService.crearEmpleado(form.value).subscribe(
        res => {
          this.getEmployees();
          form.reset();
        },
        err => console.error(err)
      )
    }
  }

  deleteEmployee(id: string){
    if(confirm("Está Seguro de Eliminar este Empleado")){
      this.employeeService.eliminarEmpleado(id).subscribe(
        res =>{
          this.getEmployees();
        },
        err => console.error(err)
      );
    }
  }

  editEmployee(employee: Employee){
    this.employeeService.selectedEmployee = employee;
  }
}
