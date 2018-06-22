import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Modules
import { CustomerStatementModule } from './modules/customer-statement/customer-statement.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomerStatementModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
