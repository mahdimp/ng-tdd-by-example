import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  template: `
    <p>
      <button (click)="greet.emit('Hello')"> Hello</button>
    </p>
  `
})
export class OutputComponent {

  @Output() greet = new EventEmitter<string>()

}
