import { Component, OnInit } from '@angular/core';
import { ReadmeService } from '../../services/readme.service';

@Component({
  selector: 'app-readme',
  templateUrl: './readme.component.html',
  styleUrls: ['./readme.component.css']
})
export class ReadmeComponent implements OnInit {

  constructor(
    private readmeService: ReadmeService,
  ) { }

  ngOnInit() {
    this.readmeService.getReadme().subscribe(res => {
      console.log(res);
    });
  }

}
