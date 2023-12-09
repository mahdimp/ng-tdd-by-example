import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicClassesComponent } from './dynamic-classes.component';
import { By } from '@angular/platform-browser';

describe('DynamicClassesComponent', () => {
  let component: DynamicClassesComponent;
  let fixture: ComponentFixture<DynamicClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DynamicClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have alert class if isAlert is true', () => {
    component.isActive = true;
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('.container'));
    const classes: any = element.classes;
    expect(classes.active).toBeTruthy();
  });

  it('should have alert class if isAlert is false', () => {
    component.isActive = false;
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('.container'));
    const classes: any = element.classes;
    expect(classes.active).toBeFalsy();
  });
});
