
import {Component} from "@angular/core";

@Component({
  selector: 'customer-data-component',
  template: '<span style="color: red">{{ params.value }}</span>'
})
export class CustomerDataComponent {
  private params: any;

  agInit(params: any): void {
    this.params = params;
  }
}

