import { Component, OnDestroy } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { distinctUntilChanged } from "rxjs/operators";

export interface PeriodicElement {
  name: string;
  position: number;
  indexCache: number;
  weight: number;
  symbol: string;
  isCheck: boolean;
  type: String;
  quantityTypes: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    indexCache: 0,
    name: "Rice",
    weight: 1.0079,
    symbol: "H",
    isCheck: true,
    type: "Regular",
    quantityTypes: [{ value: 'steak-Rice', viewValue: 'SteakRice1' }, { value: 'steak-Rice', viewValue: 'SteakRice2' },]
  },
  {
    position: 2,
    indexCache: 1,
    name: "Coffee",
    weight: 4.0026,
    symbol: "He",
    isCheck: false,
    type: "Regular",
    quantityTypes: [{ value: 'steak-Coffee', viewValue: 'SteakCoffee1' }, { value: 'steak-Coffee', viewValue: 'SteakCoffee2' },]
  },
  {
    position: 3,
    indexCache: 2,
    name: "Dal",
    weight: 6.941,
    symbol: "Li",
    isCheck: false,
    type: "Not Regular",
    quantityTypes: [{ value: 'steak-Dal', viewValue: 'SteakDal1' }, { value: 'steak-Dal', viewValue: 'SteakDal2' },]
  },
  {
    position: 4,
    indexCache: 3,
    name: "Sugar",
    weight: 9.0122,
    symbol: "Be",
    isCheck: false,
    type: "Regular",
    quantityTypes: [{ value: 'steak-Sugar', viewValue: 'SteakSugar1' }, { value: 'steak-Sugar', viewValue: 'SteakSugar2' },]
  },
  {
    position: 5,
    indexCache: 4,
    name: "Salt",
    weight: 10.811,
    symbol: "B",
    isCheck: false,
    type: "Regular",
    quantityTypes: [{ value: 'steak-Salt', viewValue: 'SteakSalt1' }, { value: 'steak-Salt', viewValue: 'SteakSalt2' },]
  },
  {
    position: 6,
    indexCache: 5,
    name: "Pepper",
    weight: 12.0107,
    symbol: "C",
    isCheck: false,
    type: "Not Regular",
    quantityTypes: [{ value: 'steak-Pepper', viewValue: 'SteakPepper1' }, { value: 'steak-Pepper', viewValue: 'SteakPepper2' },]
  },
  {
    position: 7,
    indexCache: 6,
    name: "Pulses",
    weight: 14.0067,
    symbol: "N",
    isCheck: false,
    type: "Regular",
    quantityTypes: [{ value: 'steak-Pulses', viewValue: 'SteakPulses1' }, { value: 'steak-Pulses', viewValue: 'SteakPulses2' },]
  },
  {
    position: 8,
    indexCache: 7,
    name: "Garlic Paste",
    weight: 15.9994,
    symbol: "O",
    isCheck: false,
    type: "Not Regular",
    quantityTypes: [{ value: 'steak-Garlic1', viewValue: 'SteakGarlic1' }, { value: 'steak-Garlic2', viewValue: 'SteakGarlic2' }, { value: 'steak-Garlic3', viewValue: 'SteakGarlic3' }]
  }
];

@Component({
  selector: 'app-customise-items-table',
  templateUrl: './customise-items-table.component.html',
  styleUrls: ['./customise-items-table.component.scss']
})
export class CustomiseItemsTableComponent {

  public useForm: any = new FormGroup({});

  indexToPush: any = [];

  types = ["1/2 Kg", "1 Kg", "2 Kg"];
  updatedElements: PeriodicElement[] = [];

  public displayedColumns: string[] = [
    "isCheck",
    "position",
    "name",
    "weight",
    "symbol",
    "type"
  ];

  // public dataSource = ELEMENT_DATA;
  dataSource: MatTableDataSource<PeriodicElement> = new MatTableDataSource(
    ELEMENT_DATA
  );

  constructor() {
    this.useForm = new FormGroup({
      /* FormArray to contain all the row FormGroups */
      elements: new FormArray([])
    });
    this.initForm();
  }

  public initForm() {
    /* FormGroup for all editable cells in a row */
    const rowFormGroups = ELEMENT_DATA.map(element => {
      const rowFormGroup = new FormGroup({
        indexCache: new FormControl(element.indexCache),
        symbol: new FormControl(element.symbol),
        isCheck: new FormControl(element.isCheck),
        type: new FormControl({ value: element.type, disabled: !element.isCheck })
      });

      /* Listen for changes to the row */
      rowFormGroup.valueChanges.pipe(distinctUntilChanged()).subscribe(rowValues => {
        let index = rowValues.indexCache;
        let dropdownCtrl = (this.useForm.get("elements") as FormArray).at(index);
        const disableEnableOptions = { emitEvent: false };
        const checkBoxChecked = dropdownCtrl.get('isCheck')?.value;
        if (checkBoxChecked) {
          dropdownCtrl.get('type')?.enable(disableEnableOptions);
        }
        else {
          dropdownCtrl.get('type')?.disable(disableEnableOptions);
        }
      });
      return rowFormGroup;
    });

    /* Parent FormGroup */
    this.useForm = new FormGroup({
      /* FormArray to contain all the row FormGroups */
      elements: new FormArray(rowFormGroups)
    });
  }

  public saveChanges() {
    // console.log(this.useForm);
    const len = (this.useForm.get("elements") as FormArray).length;
    // the line below is the actual info we need
    // *******************************************
    //console.log("next", this.useForm.get("elements").controls[i].value);
    // console.log('play here', ( (this.useForm.get('elements') as FormArray) ));
    for (let i = 0; i < len; i++) {
      if ((this.useForm.get("elements") as FormArray).at(i).dirty) {
        this.indexToPush.push(i);
      }
    }

    // I should not be pushing this.dataSource but I don't know how to access the updated row.
    for (let i = 0, j = 0; i < this.dataSource.data.length && j < this.indexToPush.length; i++) {
      if (this.indexToPush[j] === i) {
        // console.log(this.dataSource.data[i]);
        //              this.dataSource.data[i].symbol =
        // this.updatedElements.push(this.dataSource.data[i]);
        this.updatedElements.push(this.useForm.get("elements").value);
        j++;
      }
    }

    console.log('Check if my updated data is being saved.', this.updatedElements);
  }
}
