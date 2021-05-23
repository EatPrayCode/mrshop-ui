import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pack-checkout',
  templateUrl: './pack-checkout.component.html',
  styleUrls: ['./pack-checkout.component.scss']
})
export class PackCheckoutComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void { }

  placeOrder() {
    const routeUrl = `order-success`;
    this.router.navigateByUrl(routeUrl);
  }

}
