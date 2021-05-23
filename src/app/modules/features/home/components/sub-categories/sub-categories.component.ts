import { DataService } from './../../../../../services/data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss']
})
export class SubCategoriesComponent implements OnInit, OnDestroy {

  navigationSubscription;
  categoryType: any = '';
  subCategoryType: any = '';
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
    this.subCategoryType = this.route.snapshot.params['subCategoryType'];
    this.api.getCategoriesList(this.categoryType).subscribe((response: any) => {
      this.mainSpinner = false;
      this.categoriesList = [...response];
    });
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
