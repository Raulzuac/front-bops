import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MatInputModule} from '@angular/material/input';
import {  HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatInputModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front_bops';
}
