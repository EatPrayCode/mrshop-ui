import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent {

  form: any = new FormGroup({});
  ordersData: any = [];
  ordersRadio: any = [];
  optionsRadio: any = [];

  get ordersFormArray() {
    return this.form.controls.orders as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      orders: new FormArray([], minSelectedCheckboxes(1)),
      ordersRadio: [''],
      optionsRadio: ['']
    });

    // async orders
    of(this.getOrders()).subscribe(orders => {
      this.ordersData = orders;
      this.addCheckboxes();
    });

    of(this.getOrdersRadio()).subscribe(orders => {
      this.ordersRadio = orders;
      this.form.controls.ordersRadio.patchValue(this.ordersRadio[0].id);
    });

    // getOptions
    of(this.getOptionsRadio()).subscribe(options => {
      this.optionsRadio = options;
      this.form.controls.optionsRadio.patchValue(this.optionsRadio[0].id);
    })

    // synchronous orders
    // this.ordersData = this.getOrders();
    // this.addCheckboxes();
  }


  getOrdersRadio() {
    return [
      { id: 100, name: 'order 1' },
      { id: 200, name: 'order 2' },
      { id: 300, name: 'order 3' },
      { id: 400, name: 'order 4' }
    ];
  }

  getOptionsRadio() {
    return [
      { id: 'Once', name: 'Once' },
      { id: 'Daily', name: 'Daily' },
      { id: 'Weekly', name: 'Weekly' },
      { id: 'Interval', name: 'Interval' },
    ]
  }

  get Options() {
    return this.form.get('optionsRadio').value;
  }

  private addCheckboxes() {
    this.ordersData.forEach(() => this.ordersFormArray.push(new FormControl(false)));
  }

  getOrders() {
    return [
      { id: 100, name: 'order 1' },
      { id: 200, name: 'order 2' },
      { id: 300, name: 'order 3' },
      { id: 400, name: 'order 4' }
    ];
  }

  submit() {
    // const selectedOrderIds = this.form.value.orders
    //   .map((checked, i) => checked ? this.ordersData[i].id : null)
    //   .filter(v => v !== null);

    // console.log(selectedOrderIds);
  }
}

function minSelectedCheckboxes(min = 1) {
  const validator: any = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      .map(control => control.value)
      .reduce((prev, next) => next ? prev + next : prev, 0);

    return totalSelected >= min ? null : { required: true };
  };

  return validator;
}