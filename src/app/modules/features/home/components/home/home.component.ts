import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  packType: any = 'store';

  cards: any = [
    {
      name: 'Store',
      content: 'Products delivered every month',
      imageUrl: 'imageUrl',
      routerUrl: '/home/store'
    },
    // {
    //   name: 'Services',
    //   content: 'Curated Services right to your home',
    //   imageUrl: 'imageUrl',
    //   routerUrl: '/home/services'
    // },
    // {
    //   name: 'Finances',
    //   content: 'Never miss your bill payments',
    //   imageUrl: 'imageUrl',
    //   routerUrl: '/home/finances'
    // },
    // {
    //   name: 'Investments',
    //   content: 'Watch your money grow magically',
    //   imageUrl: 'imageUrl',
    //   routerUrl: '/home/investments'
    // },
    // {
    //   name: 'Crowdfunding',
    //   content: 'Invest once, earn monthly returns',
    //   imageUrl: 'imageUrl',
    //   routerUrl: '/home/crowdfunding'
    // },
    // {
    //   name: 'Dashboard',
    //   content: 'Track your monthly spend',
    //   imageUrl: 'imageUrl',
    //   routerUrl: 'dashboard'
    // }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initLoad();
  }

  initLoad() {
    let document: any;
  }

  goToCategory(category: any) {
    this.router.navigateByUrl(category.routerUrl);
  }


  getStarted() {
    this.router.navigate(['home']);
  }

}
