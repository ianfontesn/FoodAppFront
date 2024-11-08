import { BaseDTO } from './BaseDTO';
import { ProductDTO } from './ProductDTO';

export class CategoryDTO extends BaseDTO {
  public Products: ProductDTO[] = [];
}
