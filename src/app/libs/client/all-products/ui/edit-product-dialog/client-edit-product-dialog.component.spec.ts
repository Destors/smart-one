import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientEditProductDialogComponent } from './client-edit-product-dialog.component';

describe('ClientEditProductDialogComponent', () => {
  let component: ClientEditProductDialogComponent;
  let fixture: ComponentFixture<ClientEditProductDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientEditProductDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientEditProductDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
