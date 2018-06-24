import { Component, OnInit, Input } from '@angular/core';

// Models
import { Statement } from '../../models/statement';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  @Input()
  statements: Statement[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.statements);
  }

}
