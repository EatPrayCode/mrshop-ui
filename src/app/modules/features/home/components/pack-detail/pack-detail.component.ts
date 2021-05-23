import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pack-detail',
  templateUrl: './pack-detail.component.html',
  styleUrls: ['./pack-detail.component.scss']
})
export class PackDetailComponent implements OnInit, OnDestroy {

  navigationSubscription;
  categoryType: any = '';
  subCategoryType: any = '';
  mainSpinner: boolean = false;
  packDetails: any = {};
  packId: any = '';

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
      packId: this.packId
    };
    this.api.getPacksDetails(payload).subscribe((response: any) => {
      this.mainSpinner = false;
      this.packDetails = { ...response };
    });
  }

  goToCustomisePack() {
    const routeUrl = `/home/${this.categoryType}/${this.subCategoryType}/${this.packId}/customise`;
    this.router.navigateByUrl(routeUrl);
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}

