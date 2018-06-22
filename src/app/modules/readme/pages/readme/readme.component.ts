import { Component, OnInit } from '@angular/core';
import { ReadmeService } from '../../services/readme.service';

@Component({
  selector: 'app-readme',
  templateUrl: './readme.component.html',
  styleUrls: ['./readme.component.scss']
})
export class ReadmeComponent implements OnInit {

  markdown: string;

  constructor(
    private readmeService: ReadmeService,
  ) { }

  ngOnInit() {
    this.readmeService.getReadme().subscribe(res => {
      this.markdown = res;
    });
  }

}
