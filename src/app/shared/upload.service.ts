import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private httpeClient: HttpClient) {
  }

  public upload(formData, colorCode) {
    return this.httpeClient.post<any>(`${environment.API_URL}/upload/${colorCode}`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
}
