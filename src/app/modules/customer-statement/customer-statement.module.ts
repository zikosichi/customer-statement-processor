import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerStatementRoutingModule } from './customer-statement-routing.module';
import { UploadStatementComponent } from './pages/upload-statement/upload-statement.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerStatementRoutingModule
  ],
  declarations: [UploadStatementComponent]
})
export class CustomerStatementModule { }
