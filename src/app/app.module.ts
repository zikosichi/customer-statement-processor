import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

// Modules
import { AppRoutingModule } from './app-routing.module';
// import { CustomerStatementModule } from './modules/customer-statement/customer-statement.module';
// import { CustomerStatementModule } from './modules/customer-statement/customer-statement.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // CustomerStatementModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
