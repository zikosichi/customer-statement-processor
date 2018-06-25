import { TestBed, inject } from '@angular/core/testing';

import { FileParserService } from './file-parser.service';
import { Statement } from '../models/statement';
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

describe('ParseCSV', () => {
  const testCsv: string = `Reference,Account Number,Description,Start Balance,Mutation,End Balance
106627,NL46ABNA0625805417,Subscription for Erik de Vries,80.76,-2.23,78.5
112806,NL74ABNA0248990274,Candy from Jan de Vries,109.75,-23.94,85.81`;

  const testXml: string = `<records>
    <record reference="106627">
      <accountNumber>NL46ABNA0625805417</accountNumber>
      <description>Subscription for Erik de Vries</description>
      <startBalance>80.76</startBalance>
      <mutation>-2.23</mutation>
      <endBalance>78.5</endBalance>
    </record>
    <record reference="112806">
      <accountNumber>NL74ABNA0248990274</accountNumber>
      <description>Candy from Jan de Vries</description>
      <startBalance>109.75</startBalance>
      <mutation>-23.94</mutation>
      <endBalance>85.81</endBalance>
    </record>
  </records>`;

  const correspondingJson: Statement[] = [
    {
      reference: '106627',
      accountNumber: 'NL46ABNA0625805417',
      description: 'Subscription for Erik de Vries',
      startBalance: 80.76,
      mutation: -2.23,
      endBalance: 78.5,
    },
    {
      reference: '112806',
      accountNumber: 'NL74ABNA0248990274',
      description: 'Candy from Jan de Vries',
      startBalance: 109.75,
      mutation: -23.94,
      endBalance: 85.81,
    },
  ];

  let service: FileParserService;

  beforeEach(() => {
    service = new FileParserService();
  });

  it('Should parse the CSV file and return corresponding JSON', () => {
    service.parseCsv(testCsv).subscribe(res => {
      expect(res).toEqual(correspondingJson);
    });
  });

  it('Should parse the XML file and return corresponding JSON', () => {
    service.parseXml(testXml).subscribe(res => {
      expect(res).toEqual(correspondingJson);
    });
  });
});
