import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadmeComponent } from './pages/readme/readme.component';

const routes: Routes = [
  {
    path: '',
    component: ReadmeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadmeRoutingModule { }
