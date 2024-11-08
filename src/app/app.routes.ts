import { Routes } from '@angular/router';
import { BaseModelPageComponent } from './pages/base-model-page/base-model-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';

export const routes: Routes = [
  {
    path: '',
    component: BaseModelPageComponent,
  },
  {
    path: 'menu',
    component: MenuPageComponent,
  },
];
