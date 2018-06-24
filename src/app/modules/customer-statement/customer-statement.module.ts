import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerStatementRoutingModule } from './customer-statement-routing.module';
import { UploadStatementComponent } from './pages/upload-statement/upload-statement.component';
import { FileSelectComponent } from './components/file-select/file-select.component';
import { ReportComponent } from './components/report/report.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerStatementRoutingModule,
  ],
  declarations: [
    UploadStatementComponent,
    FileSelectComponent,
    ReportComponent
  ]
})
export class CustomerStatementModule { }
