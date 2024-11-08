import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { AfterHeaderComponent } from '../../components/after-header/after-header.component';

@Component({
  selector: 'app-base-model-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    SidenavComponent,
    AfterHeaderComponent,
  ],
  templateUrl: './base-model-page.component.html',
  styleUrl: './base-model-page.component.scss',
})
export class BaseModelPageComponent {
  disableElement: boolean = false;

  @HostListener('window:load')
  onLoad(event: any) {
    this.updateDisableElement(event);
  }

  @HostListener('window:resize', ['$event'])
  onResize = (event?: any) => {
    this.updateDisableElement(event);
  };

  private updateDisableElement(_event: any) {
    this.disableElement = window.innerWidth >= 991 ? true : false;
  }
}
