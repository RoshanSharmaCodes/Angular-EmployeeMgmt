import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { IApiResponse, IDesignation } from '../../modals/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-desgination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './desgination.component.html',
  styleUrl: './desgination.component.css'
})
export class DesginationComponent implements OnInit{
  
  loader: boolean = true
  designationList: IDesignation[] = []
  masterService = inject(MasterService)

  ngOnInit():void{
    this.masterService.getDesignation().subscribe((result: IApiResponse)=>{
      this.designationList = result.data;
      this.loader = false
    })
  }
}
