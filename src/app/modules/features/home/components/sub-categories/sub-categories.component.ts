import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss']
})
export class SubCategoriesComponent implements OnInit, OnDestroy {

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

  ngOnInit(): void {  }

  initialisePage() {
    // this.mainLoader = true;
    this.currentRoute = this.route.snapshot.params['subCategoryType'];
    // this.mainLoader = false;
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}

