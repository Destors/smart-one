import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAllProductsTableFavoritesBtnComponent } from './client-all-products-table-favorites-btn.component';

describe('ClientAllProductsTableFavoritesBtnComponent', () => {
  let component: ClientAllProductsTableFavoritesBtnComponent;
  let fixture: ComponentFixture<ClientAllProductsTableFavoritesBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAllProductsTableFavoritesBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientAllProductsTableFavoritesBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
