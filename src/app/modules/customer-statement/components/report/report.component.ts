import { Component, OnInit, Input } from '@angular/core';

// Models
import { Statement } from '../../models/statement';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  _statements: Statement[] = [];
  @Input()
  set statements(value) {
    this._statements = value;
    this.validateStatements();
  }
  get statements(): Statement[] {
    return this._statements;
  }

  constructor() { }

  ngOnInit() {
  }

  /**
   * Validate statements
   */
  validateStatements() {
    // sort by reference to find duplicates
    this.statements.sort((a, b) => a.reference > b.reference ? 1 : -1);

    this.statements.forEach((s, index) => {
      // validate balance
      s.isInvalidBalance = s.startBalance + s.mutation !== s.endBalance;

      // validate duplicates
      s.isDuplicate = this.statements.filter(statement => statement.reference === s.reference).length > 1;
    });
  }
}
