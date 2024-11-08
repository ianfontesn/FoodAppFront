import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseModelPageComponent } from './base-model-page.component';

describe('BaseModelPageComponent', () => {
  let component: BaseModelPageComponent;
  let fixture: ComponentFixture<BaseModelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseModelPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseModelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
