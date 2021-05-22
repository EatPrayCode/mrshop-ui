import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  packType: any = 'store';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initLoad();
  }

  initLoad() {
    let document: any;
  }

  goToPacks() {
    this.router.navigate(['/pack-customise']);
  }


  getStarted() {
    this.router.navigate(['home']);
  }

}
