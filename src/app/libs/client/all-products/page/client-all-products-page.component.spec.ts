import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAllProductsPageComponent } from './client-all-products-page.component';

describe('ClientAllProductsPageComponent', () => {
  let component: ClientAllProductsPageComponent;
  let fixture: ComponentFixture<ClientAllProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAllProductsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientAllProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
