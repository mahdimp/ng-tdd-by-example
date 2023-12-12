import { TestBed } from '@angular/core/testing';

import { RemoteService } from './remote.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('RemoteWithSpyService', () => {
  let service: RemoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(RemoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Note: using Jasmine spy and returnValue

  it('should return mocked data as response', ()=>{
    const spy = spyOn(service, 'getPersonInfo').and.returnValue(of({name : 'Mahdi'}))

    service.getPersonInfo().subscribe( r => {
      expect(r.name).toBe('Mahdi');
    })

    expect(spy).toHaveBeenCalled();
  });

  // Note using call callFake

  fit('should not invoke error', ()=>{
    const fn = () => {};
    const spy = spyOn(service, 'throwingError').and.callFake(fn);

    service.throwingError();

    expect(spy).toHaveBeenCalled();
    
  })

  

});
