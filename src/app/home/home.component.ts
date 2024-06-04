import { Component } from '@angular/core';
import { TopSectionComponent } from './homeComponents/top-section/top-section.component';
import { ServicesComponent } from './homeComponents/services/services.component';
import { AboutComponent } from './homeComponents/about/about.component';
import { ClientsComponent } from './homeComponents/clients/clients.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopSectionComponent, ServicesComponent, AboutComponent, ClientsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
