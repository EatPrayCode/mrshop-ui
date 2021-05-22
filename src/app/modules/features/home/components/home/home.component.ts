import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  packType: any = 'store';

  constructor() { }

  ngOnInit(): void {
    this.initLoad();
  }

  initLoad() {
    let document: any;
    const listItems = document.querySelectorAll('.fadeIn');
    const productBoxes = document.querySelectorAll('.product-box');

    listItems.forEach(function (listItem: { setAttribute: (arg0: string, arg1: string) => void; }, index: number) {
      listItem.setAttribute('style', `animation-delay: ${index * .2}s`);
    });

    productBoxes.forEach(function (productBox: { setAttribute: (arg0: string, arg1: string) => void; }, index: number) {
      productBox.setAttribute('style', `animation-delay: ${index * .1}s`);
    });

    document.querySelector('.action-button').addEventListener('click', function () {
      document.querySelector('.app-right').classList.add('isOpen');
      document.querySelector('.app-left').classList.add('hide');
    });

    document.querySelector('.app-right-hide').addEventListener('click', function () {
      document.querySelector('.app-right').classList.remove('isOpen');
      document.querySelector('.app-left').classList.remove('hide');
    });
  }

}
