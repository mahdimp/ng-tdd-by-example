import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface Person{
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  constructor(
    private http: HttpClient
  ) { }

  getPersonInfo(): Observable<Person>{
    return this.http.get<Person>('/assets/data/person-info.json');
  }

  throwingError() {
    throw new Error('Should be mocked');
  }
}
