import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomiseFormComponent } from './customise-form.component';

describe('CustomiseFormComponent', () => {
  let component: CustomiseFormComponent;
  let fixture: ComponentFixture<CustomiseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomiseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomiseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
