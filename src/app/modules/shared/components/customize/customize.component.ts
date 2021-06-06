import { Component, Input, OnDestroy, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements OnInit, OnChanges {

  form: any = new FormGroup({});

  packContents: any = [];

  packBudget: any = [];
  packSize: any = [];
  packFrequency: any = [];

  packJson: any = null;
  @Input() customizeOptions: any = {}

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void { }

  ngOnChanges(changeRecord: SimpleChanges) {
    const record = changeRecord.customizeOptions;
    const customizeOptions = record.currentValue || [];
    this.packJson = customizeOptions.packJson || null;
    if (this.packJson) {
      this.buildForm(this.packJson);
    }
  }

  buildForm(json: any) {
    this.form = this.formBuilder.group({
      // packContents: new FormArray([], minSelectedCheckboxes(1)),
      // packBudget: [null, Validators.required],
      packSize: [1, Validators.required],
      packFrequency: [1, Validators.required],
    });

    // this.packContents = json[0].data;
    // this.packBudget = json[1].data;
    this.packSize = json[3].data;
    this.packFrequency = json[4].data;
    // this.addCheckboxes();
  }

  private addCheckboxes() {
    this.packContents.forEach(() => this.packContentsFormArray.push(new FormControl(false)));
  }

  get packContentsFormArray() {
    return this.form.controls.packContents as FormArray;
  }

  changePackSize(e: any) {
    // this.packSize.setValue(e.target.value, {
    //   onlySelf: true
    // })

    console.log("changed pack size");
  }

  changePackFrequency(e: any) {

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
