import { DataService } from './../../../../../services/data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PackSummaryDialogComponent } from '../pack-summary-dialog/pack-summary-dialog.component';

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
    public dialog: MatDialog
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

  openPackSummaryDialog(pack: any): void {
    let dialogRef = this.dialog.open(PackSummaryDialogComponent, {
      hasBackdrop: true,
      disableClose: false,
      height: '100vh',
      minWidth: '50%',
      position: {
        right: '0px',
        bottom: '0px',
      },
      data: {
        pack: pack
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
