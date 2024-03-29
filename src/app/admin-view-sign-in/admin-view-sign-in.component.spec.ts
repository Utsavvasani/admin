import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewSignInComponent } from './admin-view-sign-in.component';

describe('AdminViewSignInComponent', () => {
  let component: AdminViewSignInComponent;
  let fixture: ComponentFixture<AdminViewSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminViewSignInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminViewSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
