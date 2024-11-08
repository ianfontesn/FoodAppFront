import { Component, inject } from '@angular/core';
import { BaseModelPageComponent } from '../base-model-page/base-model-page.component';
import { MenuCardComponent } from '../../components/menu-card/menu-card.component';
import { CategoryService } from '../../services/category.service';
import { CategoryDTO } from '../../models/CategoryDTO';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';

@Component({
  selector: 'app-menu-page',
  standalone: true,
  imports: [BaseModelPageComponent, MenuCardComponent, SidenavComponent],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.scss',
})
export class MenuPageComponent {
  categoryService = inject(CategoryService);

  categories: CategoryDTO[] = [];

  ngOnInit() {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
}
