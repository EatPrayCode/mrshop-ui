import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent {

  
  form: any = new FormGroup({});
  packContents: any = [];
  packBudget: any = [];
  packSize: any = [];
  packFrequency: any = [];

  optionsRadio: any = [];

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  getPackJson(): any {
    const item1 = {
      name: 'PackContents',
      type: 'checkbox',
      data: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' },
        { id: 6, name: 'Item 6' },
        { id: 7, name: 'Item 7' },
        { id: 8, name: 'Item 8' },
        { id: 9, name: 'Item 9' },
        { id: 10, name: 'Item 10' }
      ]
    };
    const PackBudget = {
      name: 'PackBudget',
      type: 'Radio',
      data: [
        { id: 100, name: '1000' },
        { id: 200, name: '3000' },
        { id: 300, name: '5000' },
        { id: 400, name: '8000' }
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
    const PackSize = {
      name: 'PackBudget',
      type: 'Radio',
      data: [
        { id: 1, name: 'Bachelor' },
        { id: 2, name: 'Mini (2 adults, 1 child)' },
        { id: 3, name: 'Medium (2 adults, 2 child)' },
        { id: 4, name: 'Large (2 adults, 3 child)' },
        { id: 5, name: 'Joint (4 adults, 2+ child)' },
        { id: 6, name: 'Custom' }
      ]
    };

    const PackFrequency = {
      name: 'PackFrequency',
      type: 'Radio',
      data: [
        { id: 1, name: '1 Month' },
        { id: 2, name: '3 Months' },
        { id: 3, name: '6 Months' },
        { id: 4, name: '9 Months' },
        { id: 5, name: '12 months' },
        { id: 6, name: 'Forever' }
      ]
    };
    return [item1, PackBudget, item3, PackSize, PackFrequency];
  }

  buildForm() {
    let json = this.getPackJson();
    this.form = this.formBuilder.group({
      packContents: new FormArray([], minSelectedCheckboxes(1)),
      packBudget: [null, Validators.required],
      packSize: [null, Validators.required],
      packFrequency: [null, Validators.required],
    });

    this.packContents = json[0].data;
    this.packBudget = json[1].data;
    this.packSize = json[3].data;
    this.packFrequency = json[4].data;
    this.addCheckboxes();
  }

  private addCheckboxes() {
    this.packContents.forEach(() => this.packContentsFormArray.push(new FormControl(false)));
  }

  get packContentsFormArray() {
    return this.form.controls.packContents as FormArray;
  }

  submit() {
    console.log(this.form.value);
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
