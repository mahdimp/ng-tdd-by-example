import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-classes',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container" [ngClass]="{'active' : isActive}">
      dynamic-classes works!
    </div>
  `
})
export class DynamicClassesComponent {
  @Input() isActive !:boolean;
}
