import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { RemoteService } from './remote.service';

describe('RemoteService', () => {
  let service: RemoteService;
  let httpMock:HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RemoteService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // Note: using http mock (HttpTestingController).expectOne 

  it('should get the data', () => {
    // Not happened yet until request flushes
    service.getPersonInfo().subscribe(d => {
      expect(d.name).toBe('Ali');
    })

    const request = httpMock.expectOne('/assets/data/person-info.json', 'calling endpoint')
    expect(request.request.method).toBe('GET');

    request.flush({
      name: 'Ali'
    });
  })
  
});
