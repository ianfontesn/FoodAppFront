import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-after-header',
  standalone: true,
  imports: [],
  templateUrl: './after-header.component.html',
  styleUrl: './after-header.component.scss',
})
export class AfterHeaderComponent {
  @Input() adress: string =
    'Endereço: Rua das borboletas - 1500, Santa Luzia - MG';
  @Input() phone: string = 'Telefone: (31) 9-8765-4321';
}
