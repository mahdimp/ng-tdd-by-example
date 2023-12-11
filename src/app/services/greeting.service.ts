import { Injectable } from '@angular/core';

@Injectable()
export class GreetingService {
  sayHello(name: string){
    return `Hello ${name}`;
  }
}
