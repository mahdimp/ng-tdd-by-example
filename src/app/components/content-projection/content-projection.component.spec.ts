import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentProjectionComponent } from './content-projection.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

// Note: in case of content projection we test the component that is providing the content for the actual component.
//  here, content-projection component.

@Component({
  selector: 'test',
  template: `<app-content-projection>
   <span title>this is title</span>
   <div body>this is body</div>
  </app-content-projection>`
})
class TestComponent{}

describe('ContentProjectionComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent, ContentProjectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should project the title', () => {
    const element = fixture.debugElement.query(By.css('app-content-projection')).query(By.css('[title]'))
    expect(element.nativeElement.innerHTML).toContain("this is title");
  })

  it('should project the body', () => {
    const element = fixture.debugElement.query(By.css('app-content-projection')).query(By.css('[body]'))
    expect(element.nativeElement.innerHTML).toContain('this is body')
  })


});
