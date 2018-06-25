import { TestBed, inject } from '@angular/core/testing';

import { FileParserService } from './file-parser.service';
import { Statement } from '../models/statement';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

describe('UtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileParserService]
    });
  });

  it('should be created', inject([FileParserService], (service: FileParserService) => {
    expect(service).toBeTruthy();
  }));
});

// describe('ParseXML', () => {
//   const testXml: string = `<records>
//   <record reference="168036">
//     <accountNumber>NL91RABO0315273637</accountNumber>
//     <description>Tickets for Rik Bakker</description>
//     <startBalance>85.69</startBalance>
//     <mutation>-19.48</mutation>
//     <endBalance>66.21</endBalance>
//   </record>
//   <record reference="168512">
//     <accountNumber>NL90ABNA0585647886</accountNumber>
//     <description>Flowers from Peter King</description>
//     <startBalance>5429</startBalance>
//     <mutation>-939</mutation>
//     <endBalance>6368</endBalance>
//   </record>
// </records>`;

//   const correspondingJson: Observable<Statement[]> = Observable.of([
//     {
//       reference: '168036',
//       accountNumber: 'NL91RABO0315273637',
//       description: 'Tickets for Rik Bakker',
//       startBalance: 85.69,
//       mutation: -19.48,
//       endBalance: 66.21,
//     },
//     {
//       reference: '168512',
//       accountNumber: 'NL90ABNA0585647886',
//       description: 'Flowers from Peter King',
//       startBalance: 5429,
//       mutation: -939,
//       endBalance: 6368,
//     },
//   ]);

//   let service: FileParserService;

//   beforeEach(() => {
//     service = new FileParserService();
//   });

//   it('Should parse the XML file and return corresponding JSON', () => {
//     const json = service.parseXml(testXml);

//     expect(json).toEqual(correspondingJson);
//   });
// });
