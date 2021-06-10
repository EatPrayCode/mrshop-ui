import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-pack',
  templateUrl: './create-pack.component.html',
  styleUrls: ['./create-pack.component.scss']
})
export class CreatePackComponent implements OnChanges {

  @Input() inputData: any = null;

  @Output() packChange = new EventEmitter();

  form: FormGroup = new FormGroup({});
  packLoaded: any = false;

  ngOnChanges(changeRecord: SimpleChanges) {
    const record = changeRecord.inputData;
    const inputData = record.currentValue || '';
    this.inputData = inputData;
    if (this.inputData) {
      this.initialisePage();
      this.packLoaded = true;
    }
  }

  initialisePage() {
    this.initPackSize(this.inputData.packSizes[0], this.inputData.packTemplates[0], this.inputData);
  }

  savePack() {
    let pack = this.form.value;
    let selectedTemplateKey = pack.packTemplate.key;
    let selectedTemplate = pack.packTemplate;
    let packTemplates = pack.packTemplates;
    let items = pack.items;
    const templateIndex = packTemplates.findIndex((x: any) => x.key === selectedTemplateKey);
    packTemplates[templateIndex] = selectedTemplate;
    packTemplates[templateIndex].value.items = items;
    this.packChange.emit(pack);
  }

  constructor(private fb: FormBuilder) { }

  initPackSize(packSize: any, template: any, inputData: any) {
    this.form = this.fb.group({
      packName: [inputData.packName],
      packTemplate: [template],
      packSize: [packSize],
      packSizes: [inputData.packSizes],
      packTemplates: [inputData.packTemplates],
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
    // this.runOverFn();
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
    const variant = variantsList[0] || {};

    myForm.patchValue({
      variantsList: variantsList,
      variant: variant,
    });
    // this.runOverFn();
  }

  runOverFn1() {
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
        debugger;

        // const itemsFormArray = (<FormArray>this.form.get("items")) as FormArray;
        // const quantityIndex = item.quantity ? item.quantityList.findIndex((x: any) => x.key === item.quantity.key) : 0;
        const brandIndex = item.brand ? item.brandsList.findIndex((x: any) => x.key === item.brand.key) : 0;
        const brand = item.brandsList[brandIndex];
        const variantsList = brand.variantsList;
        const variantIndex = item.variant ? variantsList.findIndex((x: any) => x.key === item.variant.key) : 0;
        const variant = variantsList[variantIndex];


        // console.log(item.brand.variantsList);
        const pricePerItem = item.variant.price;
        const quantity = item.quantity;
        const totalPricePerItem = (pricePerItem * quantity.value);

        element.patchValue({
          totalPricePerItem: totalPricePerItem,
          pricePerItem: pricePerItem,
          isChecked: (item.isChecked),
          name: (item.name),
          brand: (brand),
          variant: (variant),
          quantity: new FormControl(quantity),
          brandsList: ([item.brandsList]),
          quantityList: ([item.quantityList]),
          variantsList: ([variantsList]),
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
    // this.setPackTotal();
    // this.updatePackModel();
  }

  runOverTestFn(index: any) {
    const element = (<FormArray>this.form.get("items")).at(index);
    const disableEnableOptions = { emitEvent: false };
    const item = element.value;

    const brandIndex = item.brand ? item.brandsList.findIndex((x: any) => x.key === item.brand.key) : 0;
    const brand = item.brandsList[brandIndex];
    const variantsList = brand.variantsList;
    const variantIndex = item.variant ? variantsList.findIndex((x: any) => x.key === item.variant.key) : 0;
    const variant = variantsList[variantIndex];

    const pricePerItem = item.variant.price;
    const quantity = item.quantity;
    const totalPricePerItem = (pricePerItem * quantity.value);
    debugger;

    element.patchValue({
      // totalPricePerItem: totalPricePerItem,
      // pricePerItem: pricePerItem,
      // isChecked: (item.isChecked),
      // name: (item.name),
      // brand: (brand),
      // variant: (variant),
      // quantity: new FormControl(quantity),
      // brandsList: ([item.brandsList]),
      // quantityList: ([item.quantityList]),
      // variantsList: ([variantsList]),
    }, disableEnableOptions);
  }

  runOverUpdateVariantPriceFn(index: any, newPrice:any) {
    // const element = (<FormArray>this.form.get("items")).at(index);
    // const disableEnableOptions = { emitEvent: false };
    // const item = element.value;

    // const brandIndex = item.brand ? item.brandsList.findIndex((x: any) => x.key === item.brand.key) : 0;
    // const brand = item.brandsList[brandIndex];
    // const variantsList = brand.variantsList;
    // const variantIndex = item.variant ? variantsList.findIndex((x: any) => x.key === item.variant.key) : 0;
    // const variant = variantsList[variantIndex];

    // const pricePerItem = item.variant.price;
    // const quantity = item.quantity;
    // const totalPricePerItem = (pricePerItem * quantity.value);
    // debugger;

    const myForm: any = (<FormArray>this.form.get("items")).at(index);

    let item = myForm.value;
    const brandIndex = item.brand ? item.brandsList.findIndex((x: any) => x.key === item.brand.key) : 0;

    // let selectedVariant = { ...item.variant, price: newPrice };
    // let selectedVariantsKey = selectedVariant.key;
    // let itemVariantsList = item.variantsList;

    // const variantIndex = itemVariantsList.findIndex((x: any) => x.key === selectedVariantsKey);
    // itemVariantsList[variantIndex] = { ...selectedVariant };

    // let selectedBrand = { ...item.brand, variantsList: itemVariantsList };
    // let selectedBrandsKey = selectedBrand.key;
    // let itemBrandsList = item.brandsList;

    // const brandIndex = itemBrandsList.findIndex((x: any) => x.key === selectedBrandsKey);
    // itemBrandsList[brandIndex] = { ...selectedBrand };




    // // itemsFormArray.controls[index].patchValue({
    // //   variant: selectedVariant,
    // //   itemVariantsList: itemVariantsList
    // // }, disableEnableOptions);
    // myForm.patchValue({
    //   variant: selectedVariant,
    //   // itemVariantsList: itemVariantsList,
    //   brandsList: itemBrandsList,
    //   brand: selectedBrand
    // }, disableEnableOptions);

    // element.patchValue({
      // totalPricePerItem: totalPricePerItem,
      // pricePerItem: pricePerItem,
      // isChecked: (item.isChecked),
      // name: (item.name),
      // brand: (brand),
      // variant: (variant),
      // quantity: new FormControl(quantity),
      // brandsList: ([item.brandsList]),
      // quantityList: ([item.quantityList]),
      // variantsList: ([variantsList]),
    // }, disableEnableOptions);
  }

  updatePackModel() { }

  changeQuantity(e: any, index: any) {
    // this.runOverFn();
  }

  changeVariant(e: any, index: any) {
    this.runOverTestFn(index);
  }

  changePricePerItem(e: any, index: any) {
    this.runOverUpdateVariantPriceFn(index, Number(e.target.value));
    
    // this.runOverFn();
  }

  changeCheckbox(e: any, index: any) {
    // this.runOverFn();
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
