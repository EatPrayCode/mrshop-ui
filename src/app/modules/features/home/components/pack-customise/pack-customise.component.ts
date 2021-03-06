import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { DataService } from 'src/app/services/data.service';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-pack-customise',
  templateUrl: './pack-customise.component.html',
  styleUrls: ['./pack-customise.component.scss']
})
export class PackCustomiseComponent implements OnInit, OnDestroy {

  navigationSubscription;
  categoryType: any = '';
  subCategoryType: any = '';
  packId: any = '';
  mainSpinner: boolean = false;
  @Input() packType: string = 'default';
  customizeOptions: any = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public api: DataService,
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initialisePage();
      }
    });
  }

  ngOnInit(): void { }

  initialisePage() {
    this.mainSpinner = true;
    this.categoryType = this.route.snapshot.params['categoryType'];
    this.subCategoryType = this.route.snapshot.params['subCategoryType'];
    this.packId = this.route.snapshot.params['packId'];
    const payload = {
      categoryType: this.categoryType,
      subCategoryType: this.subCategoryType,
      packId: this.packId,
    };
    this.api.getCustomiseOptions(payload).subscribe((response: any) => {
      this.customizeOptions = { ...response };
      this.mainSpinner = false;
    });
  }

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

  goToPackCheckout() {
    const routeUrl = `/home/${this.categoryType}/${this.subCategoryType}/${this.packId}/checkout`;
    this.router.navigateByUrl(routeUrl);
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
