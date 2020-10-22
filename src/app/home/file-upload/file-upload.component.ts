import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UploadService} from '../../shared/upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @Input()
  colorName: string;
  @Input()
  shapeName: string;

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private uploadService: UploadService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      files: ['']
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('files').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.form.get('files').value);
    this.uploadService.upload(formData).subscribe();
  }

}
