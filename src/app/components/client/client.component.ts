import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../modals/class/client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../service/client.service';
import { IApiResponse } from '../../modals/interface/role';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, UpperCasePipe],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  clientObj: Client = new Client()
  clientList: Client[] = []
  clientService = inject(ClientService)

  ngOnInit(): void {
      this.loadClient()
  }

  loadClient(){
    this.clientService.getAllClients().subscribe((res: IApiResponse)=>{
      this.clientList = res.data;
    })
  }

 
  onEditClient(item: Client){
    this.clientObj = item;
  }

  onDeleteClient(id:number){
    this.clientService.deleteClientById(id).subscribe((res:IApiResponse)=>{
      if(res.result){
        alert("Client Delete Successfully")
        this.loadClient();
      } else {
        alert(res.message)
      }
    })
  }

  onSaveClient(){
    this.clientService.addUpdate(this.clientObj).subscribe((res:IApiResponse)=>{
      if(res.result){
        alert("Client Created Successfully")
        this.loadClient();
      } else {
        alert(res.message)
      }
    })
  }

}
