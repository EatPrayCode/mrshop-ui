import { DemoMaterialModule } from './modules/shared/material.module';
import { SharedModule } from './modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { TopNavComponent } from './layouts/full/components/top-nav/top-nav.component';
import { FooterComponent } from './layouts/full/components/footer/footer.component';
import { FullComponent } from './layouts/full/components/full/full.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomiseItemsTableComponent } from './customise-items-table/customise-items-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    TopNavComponent,
    FooterComponent,
    CustomiseItemsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // SharedModule,
    DemoMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
