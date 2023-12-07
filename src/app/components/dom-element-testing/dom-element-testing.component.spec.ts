import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomElementTestingComponent } from './dom-element-testing.component';
import { By } from '@angular/platform-browser';

describe('DomElementTestingComponent', () => {
  let component: DomElementTestingComponent;
  let fixture: ComponentFixture<DomElementTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomElementTestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomElementTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the container should be visible when isVisible is true', ()=>{
    component.isVisible = true;
    fixture.detectChanges();

    fixture.whenStable().then(()=>{
      expect(fixture.debugElement.query(By.css('.container'))).not.toBeNull()
    });
  })

  it('the button should change containers visibility', () => {
    const buttonElement = fixture.debugElement.query(By.css('button'))
    expect(fixture.debugElement.query(By.css('.container'))).toBeNull();

    buttonElement.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.container'))).not.toBeNull();

    buttonElement.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.container'))).toBeNull();
  })
});
