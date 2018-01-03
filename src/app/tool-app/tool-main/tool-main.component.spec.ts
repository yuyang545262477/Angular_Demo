import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolMainComponent } from './tool-main.component';

describe('ToolMainComponent', () => {
  let component: ToolMainComponent;
  let fixture: ComponentFixture<ToolMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
