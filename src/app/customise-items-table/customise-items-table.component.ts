import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customise-items-table',
  templateUrl: './customise-items-table.component.html',
  styleUrls: ['./customise-items-table.component.scss']
})
export class CustomiseItemsTableComponent {

  form: FormGroup;
  hideArray: Array<boolean> = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      items: this.fb.array([])
    });
    this.initItemsList(null);
  }

  initItemsList(list: any) {
    list = list || [{}, {}, {}];
    list.forEach((item: any) => {
      this.addItem(item);
    });
  }

  addItem(item: any) {
    const creds = this.form.controls.items as FormArray;
    const brands = [
      { key: "reebok", value: "Reebok", price: 1500 },
      { key: "adidas", value: "Adidas", price: 1499 },
      { key: "itc", value: "ITC", price: 1600 }
    ];
    const quantityList = [
      { key: "1/2", value: "1/2" },
      { key: "1", value: "1" },
      { key: "2", value: "2" }
    ];
    const variantsList = [
      { key: "red", value: "Red" },
      { key: "green", value: "Green" },
      { key: "blue", value: "Blue" }
    ];
    creds.push(
      this.fb.group({
        action: "",
        isChecked: "",
        name: { disabled: true, value: "" },
        label: { disabled: true, value: "" },
        price: { disabled: true, value: "" },
        brand: { disabled: true, value: "" },
        variant: { disabled: true, value: "" },
        quantity: { disabled: true, value: "" },
        toggle: false,
        brandsList: ([brands]),
        quantityList: ([quantityList]),
        variantsList: ([variantsList]),
      })
    );
    this.hideArray.push(false);
  }

  changeBrand(e: any, index: any) {
    const newPrice = 1000;
    const myForm = (<FormArray>this.form.get("items")).at(index);
    myForm.patchValue({
      price: newPrice
    });
  }

  changeVariant(e: any, index: any) {
    const newPrice = 2000;
    const myForm = (<FormArray>this.form.get("items")).at(index);
    myForm.patchValue({
      price: newPrice
    });
  }

  changeCheckbox(e: any, index: any) {
    const myForm = (<FormArray>this.form.get("items")).at(index);
    const isChecked = myForm.get("isChecked")?.value;
    if (isChecked) {
      myForm.get("quantity")?.enable();
      myForm.get("variant")?.enable();
      myForm.get("brand")?.enable();
    }
    else {
      myForm.get("quantity")?.disable();
      myForm.get("variant")?.disable();
      myForm.get("brand")?.disable();
    }
  }

  changeQuantity(e: any, index: any) {
    const myForm = (<FormArray>this.form.get("items")).at(index);
    myForm.patchValue({
      price: 2000
    });
  }

  trackFn(index: any) {
    return index;
  }

}

