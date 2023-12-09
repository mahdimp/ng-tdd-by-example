import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCssComponent } from './dynamic-css.component';
import { customMatchers, expect } from 'src/app/utils/custom-matchers';


describe('DynamicCssComponent', () => {
  let component: DynamicCssComponent;
  let fixture: ComponentFixture<DynamicCssComponent>;

  

  beforeEach(async () => {
    jasmine.addMatchers(customMatchers);
    await TestBed.configureTestingModule({
      imports: [ DynamicCssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should have orange background', () => {
    const element = fixture.debugElement.children[0];
    component.color = 'orange';
    fixture.detectChanges();
    expect(element.nativeElement).toHaveStyle({
      'background-color' : 'orange'
    })
  })
});
