import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentWithServiceComponent } from './component-with-service.component';
import { LanguageEnum, LanguageService } from './language.service';

describe('ComponentWithServiceComponent', () => {
  let languageService: LanguageService | null;
  let component: ComponentWithServiceComponent | null;
  // let fixture: ComponentFixture<ComponentWithServiceComponent>;

  beforeEach(() => {
    languageService = new LanguageService();
    component = new ComponentWithServiceComponent(languageService);
  })

  afterEach(() => {
    languageService = null;
    component = null;
  })

  it('should greet in italian when the language is so', () => {
    languageService?.setCurrentLanguage(LanguageEnum.IT);
    expect(component?.getGreeting()).toBe('Ciao')
  });

  it('should greet in deutsch when the language is so', () => {
    languageService?.setCurrentLanguage(LanguageEnum.DE);
    expect(component?.getGreeting()).toBe('Hallo')
  });

  it('should greet in english when the language is so', () => {
    languageService?.setCurrentLanguage(LanguageEnum.EN);
    expect(component?.getGreeting()).toBe('Hello')
  });


});
