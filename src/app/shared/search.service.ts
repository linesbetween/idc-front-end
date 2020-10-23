import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  SERVER_ULR: string = 'http://localhost:8180/query';

  constructor(private httpeClient: HttpClient) {
  }

  public search(terms: string): Observable<{result: string}> {
    return this.httpeClient.post<{result: string}>(
      `${this.SERVER_ULR}`, terms);
  }
}
