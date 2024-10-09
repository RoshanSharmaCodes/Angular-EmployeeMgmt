import { Component } from '@angular/core';
import { RolesComponent } from '../roles/roles.component';
import { DesginationComponent } from '../desgination/desgination.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [RolesComponent, DesginationComponent, CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css',
})
export class MasterComponent {
  currentComponent: string = 'roles';

  handleComponentChange = (val: string) => {
    this.currentComponent = val;
  };
}
