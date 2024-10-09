import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IApiResponse, IRole } from '../../modals/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent implements OnInit {
  roleList: IRole[] = []
  loader: boolean = true
  http = inject(HttpClient)
  ngOnInit(): void {
      this.getAllRoles()
  }

  getAllRoles(){
    this.http.get<IApiResponse>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:IApiResponse)=>{
      this.roleList = res.data;
      this.loader = false
    })
  }
}
