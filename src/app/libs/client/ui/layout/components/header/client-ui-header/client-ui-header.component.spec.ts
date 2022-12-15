import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUiHeaderComponent } from './client-ui-header.component';

describe('ClientUiHeaderComponent', () => {
  let component: ClientUiHeaderComponent;
  let fixture: ComponentFixture<ClientUiHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientUiHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientUiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
