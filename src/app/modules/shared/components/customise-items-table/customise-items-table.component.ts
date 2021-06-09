import { mockData } from './mockJsonPacks';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-customise-items-table',
  templateUrl: './customise-items-table.component.html',
  styleUrls: ['./customise-items-table.component.scss']
})
export class CustomiseItemsTableComponent {

  form: FormGroup = new FormGroup({});

  inputData: any = mockData;

  constructor(private fb: FormBuilder) {
    this.initPackSize(this.inputData.packSizes[0], this.inputData.packTemplates[0], this.inputData);
  }

  initPackSize(packSize: any, template: any, inputData: any) {
    this.form = this.fb.group({
      packName: [inputData.packName],
      packTemplate: [template],
      packSize: [packSize],
      items: this.fb.array([]),
      packTotal: [0]
    });
    this.initItemsList(template.value.items || []);
  }

  changePackSizeFn(packSize: any) {
    const itemsFormArray = this.form.controls.items as FormArray;
    itemsFormArray.controls.forEach((element, index) => {
      const quantityList = element.get("quantityList")?.value;
      const quantityIndex = quantityList.findIndex((x: any) => x.key === packSize.key);
      element.patchValue({
        quantity: (quantityList[quantityIndex])
      });
    });
  }

  initItemsList(list: any) {
    list.forEach((item: any) => {
      this.addItem(item);
    });
    this.runOverFn();
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
    const itemsFormArray = (<FormArray>this.form.get("items")) as FormArray;
    const quantityIndex = item.quantity ? item.quantityList.findIndex((x: any) => x.key === item.quantity.key) : 0;
    const brandIndex = item.brand ? item.brandsList.findIndex((x: any) => x.key === item.brand.key) : 0;
    const brand = item.brandsList[brandIndex];
    const variantsList = brand.variantsList;
    const variantIndex = item.variant ? variantsList.findIndex((x: any) => x.key === item.variant.key) : 0;
    const variant = variantsList[variantIndex];

    const pricePerItem = variant.price;
    const quantity = item.quantity || item.quantityList[quantityIndex];
    const totalPricePerItem = (pricePerItem * quantity.value || 0);

    itemsFormArray.push(
      this.fb.group({
        isChecked: (item.isChecked),
        name: (item.name),
        pricePerItem: (pricePerItem),
        totalPricePerItem: (totalPricePerItem),
        brand: (brand),
        variant: (variant),
        quantity: new FormControl(quantity),
        brandsList: ([item.brandsList]),
        quantityList: ([item.quantityList]),
        variantsList: ([variantsList]),
      })
    );
  }

  changeBrand(e: any, index: any) {
    const myForm = (<FormArray>this.form.get("items")).at(index);
    const variantsList: any = myForm.value.brand.variantsList;
    const variant = variantsList[0]||{};

    myForm.patchValue({
      variantsList: variantsList,
      variant: variant,
    });
    this.runOverFn();
  }

  runOverFn() {
    const itemsFormArray = (<FormArray>this.form.get("items")) as FormArray;
    const disableEnableOptions = { emitEvent: false };
    itemsFormArray.controls.forEach((element, index) => {
      const isChecked = element.get("isChecked")?.value;
      if (isChecked) {
        element.get("quantity")?.enable();
        element.get("variant")?.enable();
        element.get("brand")?.enable();
        element.get("pricePerItem")?.enable();
        element.get("totalPricePerItem")?.enable();
        const item = element.value;
        const pricePerItem = item.variant.price;
        const quantity = item.quantity;
        const totalPricePerItem = (pricePerItem * quantity.value);
        element.patchValue({
          totalPricePerItem: totalPricePerItem,
          pricePerItem: pricePerItem
        }, disableEnableOptions);
      }
      else {
        element.get("quantity")?.disable();
        element.get("variant")?.disable();
        element.get("brand")?.disable();
        element.get("pricePerItem")?.disable();
        element.get("totalPricePerItem")?.disable();
        element.get("name")?.disable();
      }
    });
    this.setPackTotal();
  }

  changeQuantity(e: any, index: any) {
    this.runOverFn();
  }

  changeVariant(e: any, index: any) {
    this.runOverFn();
  }

  changeCheckbox(e: any, index: any) {
    this.runOverFn();
  }

  changePackSize(e: any) {
    this.changePackSizeFn(e);
  }

  changePackTemplate(e: any) {
    const packTemplates = this.inputData.packTemplates;
    const templateIndex = packTemplates.findIndex((x: any) => x.key === e.key);
    const packSize = this.form.controls.packSize.value;
    this.initPackSize(packSize, packTemplates[templateIndex], this.inputData);
  }

  trackFn(index: any) {
    return index;
  }

}
