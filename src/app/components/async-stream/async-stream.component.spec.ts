import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncStreamComponent } from './async-stream.component';
import { Subject } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('AsyncStreamComponent', () => {
  let component: AsyncStreamComponent;
  let fixture: ComponentFixture<AsyncStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AsyncStreamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Note testing async pipe and streams

  it('should display emitted values', () => {
      const stream = new Subject<string>();
      let element: HTMLElement;
      component.data$ = stream.asObservable();

      fixture.detectChanges();
      element = fixture.debugElement.query(By.css('.container')).nativeElement as HTMLElement;
      expect(element.innerHTML).toBe('')

      stream.next('Hello World!');
      fixture.detectChanges();
      element = fixture.debugElement.query(By.css('.container')).nativeElement as HTMLElement;
      expect(element.innerHTML).toBe('Hello World!');
  });


});
