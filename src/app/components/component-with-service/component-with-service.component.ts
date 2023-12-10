import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageEnum, LanguageService } from './language.service';

@Component({
  selector: 'app-component-with-service',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      {{ getGreeting() }}
    </p>
  `
})
export class ComponentWithServiceComponent {

  constructor(
    private _languageService: LanguageService
  ) { }

  getGreeting() {
    switch (this._languageService.currentLanguage) {
      case LanguageEnum.IT:
        return 'Ciao';
      case LanguageEnum.DE:
        return 'Hallo';
      case LanguageEnum.EN:
        return 'Hello';
    }
  }
}
