import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAllProductsTableActionBtnComponent } from './client-all-products-table-action-btn.component';

describe('ClientAllProductsTableActionBtnComponent', () => {
  let component: ClientAllProductsTableActionBtnComponent;
  let fixture: ComponentFixture<ClientAllProductsTableActionBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAllProductsTableActionBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientAllProductsTableActionBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
