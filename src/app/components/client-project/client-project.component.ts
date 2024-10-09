import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from '../../service/client.service';
import { IApiResponse, IEmployee } from '../../modals/interface/role';
import { Client } from '../../modals/class/client';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit{


  employeeList: IEmployee[] = []
  clientList: Client[] =[]
  clientProjectService = inject(ClientService)
  
  ngOnInit(): void {
      this.loadClientList()
      this.loadEmployeeList()
  }

  loadEmployeeList(){
    this.clientProjectService.getAllEmployees().subscribe((res:IApiResponse)=>{
      this.employeeList = res.data;
    })
  }

  loadClientList(){
    this.clientProjectService.getAllClients().subscribe((res:IApiResponse)=>{
      this.clientList = res.data;
    })
  }

  onSaveClientProject(){
    const formValue = this.projectForm.value
    this.clientProjectService.addClientProjectUpdate(formValue).subscribe((res:IApiResponse)=>{
      if(res.result){
        alert("Project Created Successfully")
      } else {
        alert("Project Creation Failed")
      }
    })
  }

  projectForm: FormGroup = new FormGroup({
  clientProjectId: new FormControl(0),
  projectName: new FormControl(""),
  startDate: new FormControl(""),
  expectedEndDate: new FormControl(""),
  leadByEmpId: new FormControl(""),
  completedDate: new FormControl(""),
  contactPerson: new FormControl(""),
  contactPersonContactNo: new FormControl(""),
  totalEmpWorking: new FormControl(""),
  projectCost: new FormControl(""),
  projectDetails: new FormControl(""),
  contactPersonEmailId: new FormControl(""),
  clientId: new FormControl(""),
  })
}
