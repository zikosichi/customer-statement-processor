import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerStatementRoutingModule } from './customer-statement-routing.module';
import { UploadStatementComponent } from './pages/upload-statement/upload-statement.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerStatementRoutingModule
  ],
  declarations: [
    UploadStatementComponent,
    FileUploadComponent
  ]
})
export class CustomerStatementModule { }
