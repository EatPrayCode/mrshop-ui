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
  currentRoute: any = '';

  mainLoader: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialisePage();
      }
    });
  }

  ngOnInit(): void { }

  initialisePage() {
    // this.mainLoader = true;
    this.currentRoute = this.route.snapshot.params['categoryType'];
    // this.mainLoader = false;
  }

  goToSubCategory() {
    const routeUrl = `/home/${this.currentRoute}/all`;
    this.router.navigateByUrl(routeUrl);
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
