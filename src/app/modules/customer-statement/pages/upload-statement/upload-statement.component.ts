import { Component } from '@angular/core';
import { Observable } from 'rxjs';

// Models
import { Statement } from '../../models/statement';

// Services
import { FileParserService } from '../../services/file-parser.service';

// Animations
import { fadeUpAnimation } from '../../../../shared/animations/animations';

@Component({
  selector: 'app-upload-statement',
  templateUrl: './upload-statement.component.html',
  styleUrls: ['./upload-statement.component.scss'],
  animations: [fadeUpAnimation],
})
export class UploadStatementComponent {

  selectedFile: File;
  statements: Statement[] = [];

  constructor(
    private fileParserService: FileParserService,
  ) { }

  /**
   * On file select
   */
  onFileSelect(e: File) {
    this.selectedFile = e;
    this.parseFile(e);
  }

  /**
   * Parses XML or CSV file and returns JSON
   */
  parseFile(file: File) {
    const reader: FileReader = new FileReader();
    let parserFunction: Observable<Statement[]>;

    reader.onloadend = () => {
      switch (file.type) {
        case 'text/csv':
          parserFunction = this.fileParserService.parseCsv(reader.result);
          break;

        case 'text/xml':
          parserFunction = this.fileParserService.parseXml(reader.result);
          break;

        default:
          break;
      }

      parserFunction.subscribe(res => {
        this.statements = res;
      });
    };

    reader.readAsText(file);
  }
}
