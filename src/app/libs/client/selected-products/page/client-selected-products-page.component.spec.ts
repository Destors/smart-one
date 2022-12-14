import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSelectedProductsPageComponent } from './client-selected-products-page.component';

describe('ClientSelectedProductsPageComponent', () => {
  let component: ClientSelectedProductsPageComponent;
  let fixture: ComponentFixture<ClientSelectedProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSelectedProductsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientSelectedProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
