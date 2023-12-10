import { Injectable } from '@angular/core';

export enum LanguageEnum {
  DE = 'de',
  IT = 'it',
  'EN' = 'en'
}


@Injectable()
export class LanguageService {

  private _currentLanguage = LanguageEnum.DE;

  get currentLanguage(): LanguageEnum{
    return this._currentLanguage;
  }

  setCurrentLanguage(language: LanguageEnum): void{
    this._currentLanguage = language;
  }
  

}
