import { Injectable } from '@angular/core';
import { to_json } from 'xmljson';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { Statement } from '../models/statement';

@Injectable({
  providedIn: 'root'
})
export class FileParserService {

  constructor() { }

  /**
   * Convert CSV to JSON
   *
   * @param {*} csv
   */
  parseCsv(csv): Observable<Statement[]> {
    const lines = csv.split('\n');
    const headers = lines[0].split(',');
    let result = [];

    for (let i = 1; i < lines.length; i++) {
      const obj = {};
      const currentLine = lines[i].split(',');

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentLine[j];
      }
      result.push(obj);
    }

    result = result.map((r) => {
      return {
        reference: r['Reference'],
        accountNumber: r['Account Number'],
        description: r['Description'],
        startBalance: +r['Start Balance'],
        mutation: +r['Mutation'],
        endBalance: +r['End Balance'],
      };
    });

    return Observable.of(result);
  }

  /**
   * Convert XML to JSON
   *
   * @param {*} xml
   */
  parseXml(xml): Observable<Statement[]> {
    return new Observable((observer) => {
      to_json(xml, (error, data) => {
        const records = Object.values(data.records.record)
          .map((r) => {
            return {
              reference: r['$']['reference'].toString(),
              accountNumber: r['accountNumber'].toString(),
              description: r['description'].toString(),
              startBalance: +r['startBalance'],
              mutation: +r['mutation'],
              endBalance: +r['endBalance'],
            };
          });

        observer.next(records);
        observer.complete();
      });
    });
  }
}
