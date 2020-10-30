import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpeClient: HttpClient) {
  }

  public search(terms: string): Observable<{result: string}> {
    return this.httpeClient.post<{result: string}>(
      `${environment.API_URL}/query`, terms);
  }
}
