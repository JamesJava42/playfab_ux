import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayhistComponent } from './displayhist.component';

describe('DisplayhistComponent', () => {
  let component: DisplayhistComponent;
  let fixture: ComponentFixture<DisplayhistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayhistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayhistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
