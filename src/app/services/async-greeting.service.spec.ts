import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';

import { AsyncGreetingService } from './async-greeting.service';
import { Serializer } from '@angular/compiler';

describe('AsyncGreetingService', () => {
  let service: AsyncGreetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsyncGreetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Note : Testing async, await
  it('should handle a simple async scenario', async () => {
    expect(await service.sayHello('Ali')).toBe('Hello Ali');
  });

  // Note: using fakeAsync and tick

  it(
    'should work with fakeAsync',
    fakeAsync(() => {
      let greeting;
      service.sayHello('Mahdi').then(g => {
        greeting = g;
      })

      expect(greeting).not.toBeDefined();
      tick(100);
      expect(greeting).toBeDefined();
    })
  );




});
