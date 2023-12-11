import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsyncGreetingService {

  constructor() { }

   sayHello(name: string){
    return new Promise((resolve) => {
      setTimeout(()=> {
        resolve(`Hello ${name}`);
      } , 100)
    });
  }
}
