import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../modals/class/client';
import { IApiResponse } from '../modals/interface/role';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { 

  }


  getAllEmployees(): Observable<IApiResponse> {
    return this.http.get<IApiResponse>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllEmployee")
  }

  getAllClients(): Observable<IApiResponse> {
    return this.http.get<IApiResponse>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllClients")
  }

  addUpdate(obj:Client): Observable<IApiResponse> {
    return this.http.post<IApiResponse>("https://freeapi.miniprojectideas.com/api/ClientStrive/AddUpdateClient",obj)
  }

  addClientProjectUpdate(obj:Client): Observable<IApiResponse> {
    return this.http.post<IApiResponse>("https://freeapi.miniprojectideas.com/api/ClientStrive/AddUpdateClientProject",obj)
  }

  deleteClientById(id:number): Observable<IApiResponse> {
    return this.http.delete<IApiResponse>(`https://freeapi.miniprojectideas.com/api/ClientStrive/DeleteClientByClientId?clientId=${id}`)
  }

}
