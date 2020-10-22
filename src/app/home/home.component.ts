import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UploadService} from '../shared/upload.service';
import {HttpErrorResponse, HttpEventType} from '@angular/common/http';
import {of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // @ViewChild('fileUpload', {static: false})
  // fileUpload: ElementRef;
  // files = [];

  tiles: Tile[] = [
    {text: 'color0', color: 'red'},
    {text: 'color1', color: 'yellow'},
    {text: 'color2', color: 'blue'},
    {text: 'color3', color: 'orange'},
    {text: 'color4', color: 'green'},
    {text: 'color5', color: 'purple'}
  ];

constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
  }

/*  uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file.data);
    file.inProgress = true;
    this.uploadService.upload(formData).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            file.progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            return event;
        }
      }),
      catchError((error: HttpErrorResponse) => {
        file.inProgress = false;
        return of(`Upload failed: ${file.data.name}`);
      })).subscribe((event: any) => {
        if (typeof (event) === 'object') {
          console.log(event.body);
        }
      });
  }

  private uploadFiles() {
    this.fileUpload.nativeElement.value = '';
    this.files.forEach(file => {
      this.uploadFile(file);
    });
  }

  onClick() {
    const fileUpload = this.fileUpload.nativeElement;
    fileUpload.onChange = () => {
      for (let index = 0; index < fileUpload.file.length; index++) {
        const file = fileUpload.files[index];
        this.files.push({data: file, inProgress: false, progress: 0});
      }
      this.uploadFiles();
    };
    fileUpload.click();
  }*/
}

export interface Tile {
  color: string;
  text: string;
}
