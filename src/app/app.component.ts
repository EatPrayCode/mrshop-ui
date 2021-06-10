import { Component } from '@angular/core';
import { mockData } from './mockJsonPacks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'mrshop-ui';
  inputData: any = null;

  constructor() {
    this.inputData = mockData;
  }

  handlePackChange(change: any) {
    this.inputData = { ...change };
  }

  resetInputData() {
    this.inputData = {};
    this.inputData = { ...mockData };
  }

}
