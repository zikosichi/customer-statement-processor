import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/customer-statement/customer-statement.module#CustomerStatementModule'
  },
  {
    path: 'readme',
    loadChildren: './modules/readme/readme.module#ReadmeModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
