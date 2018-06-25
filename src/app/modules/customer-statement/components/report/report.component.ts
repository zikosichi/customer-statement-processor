import { Component, Input } from '@angular/core';

// Models
import { Statement } from '../../models/statement';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {

  invalidBalanceCount: number;
  duplicatesCount: number;

  _statements: Statement[] = [];
  @Input()
  set statements(value) {
    this._statements = value;
    this.validateStatements();
  }
  get statements(): Statement[] {
    return this._statements;
  }

  /**
   * Validate statements
   */
  validateStatements() {
    // Reset errors
    this.invalidBalanceCount = 0;
    this.duplicatesCount = 0;

    // sort by reference so it's easy for the user to capture duplicates
    this.statements.sort((a, b) => a.reference > b.reference ? 1 : -1);

    this.statements.forEach((s, index) => {
      // validate balance
      s.isInvalidBalance = (s.startBalance + s.mutation).toFixed(12) !== s.endBalance.toFixed(12);
      this.invalidBalanceCount = s.isInvalidBalance ? this.invalidBalanceCount + 1 : this.invalidBalanceCount;

      // validate duplicates
      s.isDuplicate = this.statements.filter(statement => statement.reference === s.reference).length > 1;
      this.duplicatesCount = s.isDuplicate ? this.duplicatesCount + 1 : this.duplicatesCount;
    });
  }
}
