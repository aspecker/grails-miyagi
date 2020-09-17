import {Injectable} from '@angular/core';
import {publishReplay, refCount} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  _personData: Observable<any>;

  constructor(private httpClient: HttpClient) { }

  getPersonData(): Observable<any> {
    if (!this._personData) {
      this._personData = this.httpClient.get(environment.serverUrl + 'person/list')
        .pipe(publishReplay(), refCount());
    }
    return this._personData;
  }
}