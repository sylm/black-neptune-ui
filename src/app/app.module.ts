import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {CustomerComponent} from "./customer.component";
import {CustomerDataComponent} from "./customer-data.component";
import {AgGridModule} from "ag-grid-ng2/main";


@NgModule({
  imports: [BrowserModule,
    AgGridModule.withComponents(
      [CustomerDataComponent]
    )],
  declarations: [AppComponent, CustomerComponent, CustomerDataComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
