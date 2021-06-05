import { categoriesAbout } from './../../../../mocks/categories-about';
import { categoriesList } from './../../../../mocks/categories.mock';
import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-categories-about',
  templateUrl: './categories-about.component.html',
  styleUrls: ['./categories-about.component.scss']
})
export class CategoriesAboutComponent implements OnInit, OnChanges {

  @Input() categoryType: string = '';
  description:any = '';

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changeRecord: SimpleChanges) {
    const record = changeRecord.categoryType;
    const categoryType = record.currentValue || '';
    this.description = categoriesAbout[categoryType].categoriesAboutText;
  }

}

