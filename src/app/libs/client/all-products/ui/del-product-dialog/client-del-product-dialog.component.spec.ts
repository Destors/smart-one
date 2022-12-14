import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDelProductDialogComponent } from './client-del-product-dialog.component';

describe('ClientDelProductDialogComponent', () => {
  let component: ClientDelProductDialogComponent;
  let fixture: ComponentFixture<ClientDelProductDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientDelProductDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientDelProductDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
