import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadStatementComponent } from './pages/upload-statement/upload-statement.component';

const routes: Routes = [
  {
    path: '',
    component: UploadStatementComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CustomerStatementRoutingModule { }
