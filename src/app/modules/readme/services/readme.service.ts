import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadmeService {

  constructor(
    private http: HttpClient
  ) { }

  getReadme() {
    return this.http.get('https://raw.githubusercontent.com/zikosichi/customer-statement-processor/master/README.md', {
      responseType: 'text'
    });
  }
}
