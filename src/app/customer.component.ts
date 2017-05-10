import { Component} from "@angular/core";
import {GridOptions} from "ag-grid/main";
import {CustomerDataComponent} from "./customer-data.component";
import {CUSTOMS} from "./custom-mock";

@Component({
  selector: 'customers',
  templateUrl:'./customer.component.html',
  styleUrls:['./customer.component.css']
})
export class CustomerComponent{
  private gridOptions: GridOptions;

  constructor() {
    this.gridOptions = {};
    this.gridOptions.columnDefs = [
      {
        headerName: "Proposal Id",
        field: "id",
        width: 98
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
        width: 120
      },
      {
        headerName: "Goods",
        field: "goods",
        width: 160
      },
      {
        headerName: "Description",
        field: "description",
        width: 160
      },
      {
        headerName: "Expected price",
        field: "expectedValue",
        width: 160
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
