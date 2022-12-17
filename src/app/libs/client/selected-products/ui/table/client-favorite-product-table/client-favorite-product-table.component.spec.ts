import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFavoriteProductTableComponent } from './client-favorite-product-table.component';

describe('ClientFavoriteProductTableComponent', () => {
  let component: ClientFavoriteProductTableComponent;
  let fixture: ComponentFixture<ClientFavoriteProductTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientFavoriteProductTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientFavoriteProductTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
