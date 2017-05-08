import { Component} from "@angular/core";
import {GridOptions} from "ag-grid/main";
import {CustomerDataComponent} from "./customer-data.component";
import {CUSTOMS} from "./custom-mock";

@Component({
  selector: 'customers',
  templateUrl:'./customer.component.html'
})
export class CustomerComponent{
  private gridOptions: GridOptions;

  constructor() {
    this.gridOptions = {};
    this.gridOptions.columnDefs = [
      {
        headerName: "Proposal Id",
        field: "id",
        width: 90
      },
      {
        headerName: "Status",
        field: "status",
        cellRendererFramework: CustomerDataComponent,
        width: 100
      },
      {
        headerName: "Category",
        field: "category",
        width: 100
      },
      {
        headerName: "Goods",
        field: "goods",
        width: 100
      },
      {
        headerName: "Description",
        field: "description",
        width: 100
      },
      {
        headerName: "Expected price",
        field: "expectedValue",
        width: 100
      },
      {
        headerName: "Closing date",
        field: "closingDate",
        width: 100
      }

    ];
    this.gridOptions.rowData = CUSTOMS;
  }

}
