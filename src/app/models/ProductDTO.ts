import { BaseDTO } from './BaseDTO';
import { CategoryDTO } from './CategoryDTO';

export class ProductDTO extends BaseDTO {
  public price: number = 0;
  public Category: CategoryDTO[] = [];
}
