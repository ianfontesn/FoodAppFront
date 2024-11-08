import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryDTO } from '../models/CategoryDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl: string = 'http://localhost:5112/api/v1/Category';

  httpClient = inject(HttpClient);

  getCategories(): Observable<CategoryDTO[]> {
    return this.httpClient.get<CategoryDTO[]>(this.apiUrl);
  }
}
