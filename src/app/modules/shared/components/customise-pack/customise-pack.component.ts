import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customise-pack',
  templateUrl: './customise-pack.component.html',
  styleUrls: ['./customise-pack.component.scss']
})
export class CustomisePackComponent implements OnInit, OnDestroy {

  @Input() packOptions: any = {};

  tempPackCustomiseOptions: any = {

    checkboxOptions: [],

    singleSelectOptions: [
      'line',
      'square',
      'ruler',
      'crop',
      'brush',
      'resize'
    ],
    singleSelectOptionsPrices: [
      '500$',
      '1000$',
      '1500$',
      '2000$',
      '2500$',
      '5000$'
    ],
    multiSelectOptions: [
      'breakfast',
      'dinner',
      'pick',
      'garden',
      'internet',
      'parking',
      'television',
      'books',
      'kayak',
      'drink',
      'gym',
      'walking',
    ]
  };

  
  orderForm: FormGroup = new FormGroup({});
  items: FormArray = new FormArray([]);

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      customerName: '',
      email: '',
      items: this.formBuilder.array([ this.createItem() ])
    });

    [1,2,3,4].forEach(e=>{
      this.addItem();
    });
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      price: ''
    });
  }

  getControls(){
    return (this.orderForm.get('items') as FormArray).controls;
  }

  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }


  ngOnDestroy() { }

}
