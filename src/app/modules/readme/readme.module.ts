import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ReadmeRoutingModule } from './readme-routing.module';
import { ReadmeComponent } from './pages/readme/readme.component';
import { ReadmeService } from './services/readme.service';

import { MarkdownModule } from 'angular2-markdown';

@NgModule({
  imports: [
    CommonModule,
    ReadmeRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
  ],
  declarations: [
    ReadmeComponent
  ],
  providers: [
    ReadmeService,
  ]
})
export class ReadmeModule { }
