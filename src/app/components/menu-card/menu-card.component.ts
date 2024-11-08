import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.scss',
})
export class MenuCardComponent {
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';

  constructor() {}
}
