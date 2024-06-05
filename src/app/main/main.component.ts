import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet],
  standalone: true,
  template: `
    <div class="main-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrl: './main.component.css'
})
export class MainComponent {

}
