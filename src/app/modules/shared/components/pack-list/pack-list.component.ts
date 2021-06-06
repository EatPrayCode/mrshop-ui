import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pack-list',
  templateUrl: './pack-list.component.html',
  styleUrls: ['./pack-list.component.scss']
})
export class PackListComponent implements OnInit, OnDestroy {

  navigationSubscription;
  categoryType: any = '';
  subCategoryType: any = '';
  mainSpinner: boolean = false;
  @Input() packType: string = 'default';
  packsList: any = [];

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
    const payload = {
      categoryType: this.categoryType,
      subCategoryType: this.subCategoryType
    };
    this.api.getPacksList(payload).subscribe((response: any) => {
      this.mainSpinner = false;
      this.packsList = [...response];
    });
  }

  goToPack(packObject: any) {
    const routeUrl = `/home/${this.categoryType}/${this.subCategoryType}/${packObject.id}`;
    this.router.navigateByUrl(routeUrl);
  }

  goToCustomisePack(packObject: any) {
    const routeUrl = `/home/${this.categoryType}/${this.subCategoryType}/${packObject.id}/customise`;
    this.router.navigateByUrl(routeUrl);
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
