import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAllProductsTableComponent } from './client-all-products-table.component';

describe('ClientAllProductsTableComponent', () => {
  let component: ClientAllProductsTableComponent;
  let fixture: ComponentFixture<ClientAllProductsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAllProductsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientAllProductsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
