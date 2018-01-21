import { FileUploadComponent } from './../../../../upload-example/src/app/file-upload/file-upload.component';
import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  uploader: FileUploader = new FileUploader({url: 'http://localhost:3001/upload'});
  hasBaseDropZoneOver = false;

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
}
