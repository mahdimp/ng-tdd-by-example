import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputComponent } from './output.component';

describe('OutputComponent', () => {
  let component: OutputComponent;
  let fixture: ComponentFixture<OutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should greet user with hello', () => {
    spyOn(component.greet, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    button?.click();
    expect(component.greet.emit).toHaveBeenCalledWith('Hello');
  })

  it('should provide the subscriber emitted value of the output', () =>{
    let message = ''
    const newGreeting = 'Hola';
    component.greet.subscribe( m => {
      message = m;
    })
    component.greet.emit(newGreeting);
    expect(message).toBe(newGreeting);
  })

  
});
