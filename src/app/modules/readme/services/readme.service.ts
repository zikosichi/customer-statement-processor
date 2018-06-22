import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReadmeService {

  constructor(
    private http: HttpClient
  ) { }

  getReadme() {
    return this.http.get('https://raw.githubusercontent.com/angular/angular/master/README.md', {
      responseType: 'text'
    });
  }
}
