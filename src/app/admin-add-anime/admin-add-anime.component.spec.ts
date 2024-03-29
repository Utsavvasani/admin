import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddAnimeComponent } from './admin-add-anime.component';

describe('AdminAddAnimeComponent', () => {
  let component: AdminAddAnimeComponent;
  let fixture: ComponentFixture<AdminAddAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminAddAnimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAddAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
