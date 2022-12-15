import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAddProductDialogComponent } from './client-add-product-dialog.component';

describe('ClientAddProductDialogComponent', () => {
  let component: ClientAddProductDialogComponent;
  let fixture: ComponentFixture<ClientAddProductDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAddProductDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientAddProductDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
