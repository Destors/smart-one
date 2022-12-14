import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUiSidebarComponent } from './client-ui-sidebar.component';

describe('ClientUiSidebarComponent', () => {
  let component: ClientUiSidebarComponent;
  let fixture: ComponentFixture<ClientUiSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientUiSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientUiSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
