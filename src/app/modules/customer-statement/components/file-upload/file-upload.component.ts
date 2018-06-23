import { Component, OnInit } from '@angular/core';
import { FileParserService } from '../../services/file-parser.service';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  constructor(
    private fileParserService: FileParserService,
  ) { }

  ngOnInit() {
  }

  onFileChange(e: any): void {
    const file: File = e.target.files[0];
    const reader: FileReader = new FileReader();

    reader.onloadend = () => {
      console.log(file);
      if (file.type === 'text/csv') {
        this.fileParserService.parseCsv(reader.result).subscribe(res => {
          console.log(res);
        });
      }

      if (file.type === 'text/xml') {
        this.fileParserService.parseXml(reader.result).subscribe(res => {
          console.log(res);
        });
      }
    };

    reader.readAsText(file);
  }
}
