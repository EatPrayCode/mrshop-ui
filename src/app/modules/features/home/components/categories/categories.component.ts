import { DataService } from './../../../../../services/data.service';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {

  navigationSubscription;
  categoryType: any = '';
  mainSpinner: boolean = false;
  categoriesList: any = [];

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
    this.api.getCategoriesList(this.categoryType).subscribe((response: any) => {
      this.mainSpinner = false;
      this.categoriesList = [...response];
    });
  }

  goToSubCategoryTest() {
    const routeUrl = `/home/${this.categoryType}/all`;
    this.router.navigateByUrl(routeUrl);
  }

  goToSubCategory(categoryObj: any) {
    const routeUrl = `/home/${this.categoryType}/${categoryObj.name}`;
    this.router.navigateByUrl(routeUrl);
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
