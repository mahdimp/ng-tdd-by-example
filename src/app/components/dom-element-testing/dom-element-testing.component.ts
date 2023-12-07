import { Component } from '@angular/core';

@Component({
  selector: 'app-dom-element-testing',
  template: `
    <div class="container" *ngIf="isVisible">
      Secret message ..
    </div>
    <button (click)="isVisible = !isVisible"></button>
  `
})
export class DomElementTestingComponent {
  isVisible = false;
}
