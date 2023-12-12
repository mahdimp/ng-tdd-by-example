import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-async-stream',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">{{ data$ | async}}</div>
  `
})
export class AsyncStreamComponent {
    data$ !: Observable<string>;
}
