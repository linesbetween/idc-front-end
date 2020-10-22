import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  SERVER_ULR: string = 'http://localhost:8180/upload';

  constructor(private httpeClient: HttpClient) {
  }

  public upload(formData, colorCode) {
    return this.httpeClient.post<any>(`${this.SERVER_ULR}/${colorCode}`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
}
