import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUiLayoutComponent } from './client-ui-layout.component';

describe('ClientUiLayoutComponent', () => {
  let component: ClientUiLayoutComponent;
  let fixture: ComponentFixture<ClientUiLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientUiLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientUiLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
