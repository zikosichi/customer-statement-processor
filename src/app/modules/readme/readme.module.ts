import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadmeRoutingModule } from './readme-routing.module';
import { ReadmeComponent } from './pages/readme/readme.component';

@NgModule({
  imports: [
    CommonModule,
    ReadmeRoutingModule
  ],
  declarations: [ReadmeComponent]
})
export class ReadmeModule { }
