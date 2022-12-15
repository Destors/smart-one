import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAddPriductImageDialogComponent } from './client-add-priduct-image-dialog.component';

describe('ClientAddPriductImageDialogComponent', () => {
  let component: ClientAddPriductImageDialogComponent;
  let fixture: ComponentFixture<ClientAddPriductImageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAddPriductImageDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientAddPriductImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
