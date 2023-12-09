import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dynamic-css',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p [style.background-color]="color">
      dynamic-css works!
    </p>
  `
})
export class DynamicCssComponent {
  @Input() color !: string;
}
