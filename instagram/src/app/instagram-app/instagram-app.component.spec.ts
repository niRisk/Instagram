import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramAppComponent } from './instagram-app.component';

describe('InstagramAppComponent', () => {
  let component: InstagramAppComponent;
  let fixture: ComponentFixture<InstagramAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstagramAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstagramAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
