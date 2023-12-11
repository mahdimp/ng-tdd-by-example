import { TestBed } from '@angular/core/testing';

import { GreetingService } from './greeting.service';
import { inject } from '@angular/core/testing';

describe('GreetingService', () => {
  
  describe('Manual instantiating', () =>{
    let service: GreetingService | null;

    beforeEach(() =>{
      service = new GreetingService();
    })

    afterEach(()=>{
      service = null;
    })

    it('should greet Mahdi', ()=>{
      const greeting = service?.sayHello('Mahdi');
      expect(greeting).toBe('Hello Mahdi');
    })

  })

  describe('Configure using TestBed', ()=>{
   
    // Note: using TestBed with inject() method

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [GreetingService]
      })
    })

    describe('Injecting via test case level inject', () => {
      it(
        'should have a service instance',
        inject([GreetingService], (service: GreetingService) => {
          expect(service).toBeDefined();
        })
      );
    });

    describe('Injecting via test-bed get', () => {

      // Note: using deprecated TestBed.get()

      let service: GreetingService;

      beforeEach(() => {
        service = TestBed.get(GreetingService);
      })

      it('should have instance', () => {
        expect(service).toBeDefined();
      })
    });

    describe('Test service methods, instantiated with inject', () => {
      it(
        'should greet Ali',
        inject([GreetingService], (service: GreetingService) => {
          expect(service.sayHello('Ali')).toBe('Hello Ali');
        })
      );
    })

  });

  
});
