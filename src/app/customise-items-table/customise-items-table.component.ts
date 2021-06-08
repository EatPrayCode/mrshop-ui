import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-customise-items-table',
  templateUrl: './customise-items-table.component.html',
  styleUrls: ['./customise-items-table.component.scss']
})
export class CustomiseItemsTableComponent {

  form: FormGroup = new FormGroup({});

  json: any = {
    "packSize": "big",
    "items": [
      {
        "isChecked": true,
        "name": "Items Name 1",
        "price": 2000,
        "brand": {
          "key": "adidas",
          "value": "Adidas",
          "price": 1499
        },
        "variant": {
          "key": "blue",
          "value": "Blue"
        },
        "quantity": {
          "key": "2",
          "value": "2"
        },
        "brandsList": [
          {
            "key": "reebok",
            "value": "Reebok",
            "price": 1500
          },
          {
            "key": "adidas",
            "value": "Adidas",
            "price": 1499
          },
          {
            "key": "itc",
            "value": "ITC",
            "price": 1600
          }
        ],
        "quantityList": [
          {
            "key": "1/2",
            "value": "1/2"
          },
          {
            "key": "1",
            "value": "1"
          },
          {
            "key": "2",
            "value": "2"
          }
        ],
        "variantsList": [
          {
            "key": "red",
            "value": "Red"
          },
          {
            "key": "green",
            "value": "Green"
          },
          {
            "key": "blue",
            "value": "Blue"
          }
        ]
      },
      {
        "isChecked": false,
        "name": "Item Name 2",
        "price": 1000,
        "brand": {
          "key": "adidas",
          "value": "Adidas",
          "price": 1499
        },
        "variant": {
          "key": "green",
          "value": "Green"
        },
        "quantity": {
          "key": "1",
          "value": "1"
        },
        "brandsList": [
          {
            "key": "reebok",
            "value": "Reebok",
            "price": 1500
          },
          {
            "key": "adidas",
            "value": "Adidas",
            "price": 1499
          },
          {
            "key": "itc",
            "value": "ITC",
            "price": 1600
          }
        ],
        "quantityList": [
          {
            "key": "1/2",
            "value": "1/2"
          },
          {
            "key": "1",
            "value": "1"
          },
          {
            "key": "2",
            "value": "2"
          }
        ],
        "variantsList": [
          {
            "key": "red",
            "value": "Red"
          },
          {
            "key": "green",
            "value": "Green"
          },
          {
            "key": "blue",
            "value": "Blue"
          }
        ]
      }
    ]
  };

  packSizes: any = [
    { id: 1, value: 'small' },
    { id: 2, value: 'big' },
    { id: 3, value: 'large' }
  ];

  constructor(private fb: FormBuilder) {
    this.initPackSize('large', this.json);
  }

  initPackSize(packSize: any, json: any) {
    this.form = this.fb.group({
      packSize: [packSize],
      items: this.fb.array([]),
      packTotal: [0]
    });
    this.initItemsList(json.items || []);
  }

  initItemsList(list: any) {
    list.forEach((item: any) => {
      this.addItem(item);
    });
    this.setPackTotal();
  }

  setPackTotal() {
    const itemsFormArray = this.form.controls.items as FormArray;
    let items = itemsFormArray.value;
    items = items.filter((ele: any) => {
      return ele.isChecked
    });
    const packTotal = items.reduce((a: any, b: any) => a + +b.price, 0);
    this.form.patchValue({
      packTotal: packTotal
    });
  }

  addItem(item: any) {
    const itemsFormArray = this.form.controls.items as FormArray;
    const quantityIndex = item.quantityList.findIndex((x: any) => x.key === item.quantity.key);
    const variantIndex = item.variantsList.findIndex((x: any) => x.key === item.variant.key);
    const brandIndex = item.brandsList.findIndex((x: any) => x.key === item.brand.key);

    itemsFormArray.push(
      this.fb.group({
        isChecked: (item.isChecked),
        name: (item.name),
        price: (item.price),
        brand: (item.brandsList[brandIndex]),
        variant: (item.variantsList[variantIndex]),
        quantity: new FormControl(item.quantityList[quantityIndex]),
        brandsList: ([item.brandsList]),
        quantityList: ([item.quantityList]),
        variantsList: ([item.variantsList]),
      })
    );
  }

  changeBrand(e: any, index: any) {
    const newPrice = 1000;
    const myForm = (<FormArray>this.form.get("items")).at(index);
    myForm.patchValue({
      price: newPrice
    });
    this.setPackTotal();
  }

  changeVariant(e: any, index: any) {
    const newPrice = 2000;
    const myForm = (<FormArray>this.form.get("items")).at(index);
    myForm.patchValue({
      price: newPrice
    });
    this.setPackTotal();
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
    this.setPackTotal();
  }

  changeQuantity(e: any, index: any) {
    const myForm = (<FormArray>this.form.get("items")).at(index);
    myForm.patchValue({
      price: 2000
    });
  }

  changePackSize(e: any) {
    const packSize = 'big';
    this.initPackSize(packSize, this.json);
  }

  trackFn(index: any) {
    return index;
  }

}
