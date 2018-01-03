import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StanderMainComponent } from './stander-main.component';

describe('StanderMainComponent', () => {
  let component: StanderMainComponent;
  let fixture: ComponentFixture<StanderMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StanderMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StanderMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
