import { Component, OnInit, Input } from '@angular/core';

// Services
import { FileParserService } from '../../services/file-parser.service';

// Animations
import { slideUpAnimation } from '../../../../shared/animations/animations';

@Component({
  selector: 'app-file-select',
  templateUrl: './file-select.component.html',
  styleUrls: ['./file-select.component.scss'],
  animations: [slideUpAnimation]
})
export class FileSelectComponent implements OnInit {

  @Input()
  acceptedFormats: string[] = [];

  errorMessage: string = '';
  isError: boolean = false;

  constructor(
    private fileParserService: FileParserService,
  ) { }

  ngOnInit() {
  }

  onFileChange(e: any): void {
    const file: File = e.target.files[0];

    if (this.acceptedFormats.includes(file.type)) {
      this.parseFile(file);
    } else {
      this.displayFormatError('The file format is not supported');
    }
  }

  parseFile(file: File) {
    const reader: FileReader = new FileReader();

    reader.onloadend = () => {
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

  displayFormatError(msg: string) {
    this.errorMessage = msg;

    this.isError = true;
    setTimeout(() => {
      this.isError = false;
      this.errorMessage = '';
    }, 3000);
  }
}
