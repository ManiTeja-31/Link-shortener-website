import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatToolbarModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
