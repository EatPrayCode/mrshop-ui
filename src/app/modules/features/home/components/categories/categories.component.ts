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
  categoriesList: any = [
    {
      name: 'Men',
      imageUrl: 'https://images.unsplash.com/photo-1531471689044-dd3ca86632e1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80',
      routeUrl: '',
      packsCount: 4
    },
    {
      name: 'Women',
      imageUrl: 'https://images.unsplash.com/photo-1510877073473-6d4545e9c2af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
      routeUrl: '',
      packsCount: 4
    },
    {
      name: 'Essentials',
      imageUrl: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1234&q=80',
      routeUrl: '',
      packsCount: 4
    },
    {
      name: 'Exotic',
      imageUrl: 'https://images.unsplash.com/photo-1526827826797-7b05204a22ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
      routeUrl: '',
      packsCount: 4
    },
    {
      name: 'Fashion',
      imageUrl: 'https://images.unsplash.com/photo-1519961655809-34fa156820ff?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1234&q=80',
      routeUrl: '',
      packsCount: 4
    },
    {
      name: 'Kids',
      imageUrl: 'https://images.unsplash.com/photo-1556910585-09baa3a3998e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1301&q=80',
      routeUrl: '',
      packsCount: 4
    },
  ];

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

  goToSubCategoryTest() {
    const routeUrl = `/home/${this.currentRoute}/all`;
    this.router.navigateByUrl(routeUrl);
  }

  goToSubCategory(categoryObj: any) {
    const routeUrl = `/home/${this.currentRoute}/${categoryObj.name}`;
    this.router.navigateByUrl(routeUrl);
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
