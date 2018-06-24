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

  onFileSelect(e: File) {
    this.selectedFile = e;
    this.parseFile(e);
  }

  ngOnInit() {
    this.fileParserService.parseCsv(`Reference,Account Number,Description,Start Balance,Mutation,End Balance
      106627,NL46ABNA0625805417,Subscription for Erik de Vries,80.76,-2.23,78.53
      112806,NL74ABNA0248990274,Candy from Jan de Vries,109.75,-23.94,85.81
      124020,NL27SNSB0917829871,Flowers for Rik Theu�,72.16,-18.94,53.22
      170175,NL43AEGO0773393871,Candy for Richard Dekker,11.62,+45.38,57
      112806,NL91RABO0315273637,Subscription from Vincent Dekker,68.31,-6.31,62
      112806,NL91RABO0315273637,Clothes from Richard Theu�,31.03,+0.27,31.3
      158644,NL90ABNA0585647886,Clothes for Willem Dekker,98.5,-42.77,55.73
      181855,NL93ABNA0585619023,Flowers for Rik King,106.92,+8.29,115.21
      131702,NL91RABO0315273637,Tickets from Rik Theu�,109.68,-21.68,88
      184927,NL43AEGO0773393871,Flowers for Richard Dekker,42.43,-43.43,-1`).subscribe(res => {
        this.statements = res;
      });
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
