import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  getPackJson(): any {
    const item1 = {
      name: 'Checkbox1',
      type: 'checkbox',
      data: [
        { id: 100, name: 'Checkbox-1 1' },
        { id: 200, name: 'Checkbox-2 1' },
        { id: 300, name: 'Checkbox-3 1' },
        { id: 400, name: 'Checkbox-4 1' }
      ]
    };
    const item2 = {
      name: 'Radio2',
      type: 'Radio',
      data: [
        { id: 100, name: 'Radio-1 1' },
        { id: 200, name: 'Radio-1 2' },
        { id: 300, name: 'Radio-1 3' },
        { id: 400, name: 'Radio-1 4' }
      ]
    };
    const item3 = {
      name: 'Radio1',
      type: 'radio',
      data: [
        { id: 'Once', name: 'Radio-2 1' },
        { id: 'Daily', name: 'Radio-2 2' },
        { id: 'Weekly', name: 'Radio-2 3' },
        { id: 'Interval', name: 'Radio-2 4' },
      ]
    };
    return [item1, item2, item3];
  }

  buildForm() {
    let json = this.getPackJson();
    this.form = this.formBuilder.group({
      orders: new FormArray([], minSelectedCheckboxes(1)),
      ordersRadio: [''],
      optionsRadio: ['']
    });

    this.ordersData = json[0].data;
    this.addCheckboxes();

    this.ordersRadio = json[1].data;
    this.form.controls.ordersRadio.patchValue(this.ordersRadio[0].id);

    this.optionsRadio = json[2].data;
    this.form.controls.optionsRadio.patchValue(this.optionsRadio[0].id);
  }

  get Options() {
    return this.form.get('optionsRadio').value;
  }

  private addCheckboxes() {
    this.ordersData.forEach(() => this.ordersFormArray.push(new FormControl(false)));
  }

  get ordersFormArray() {
    return this.form.controls.orders as FormArray;
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
