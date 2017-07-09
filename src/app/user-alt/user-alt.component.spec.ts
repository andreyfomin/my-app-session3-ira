import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAltComponent } from './user-alt.component';

describe('UserAltComponent', () => {
  let component: UserAltComponent;
  let fixture: ComponentFixture<UserAltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
