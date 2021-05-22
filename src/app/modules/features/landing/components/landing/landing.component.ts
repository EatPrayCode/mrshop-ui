import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initLoad();
  }

  initLoad() {
    const menuToggle: any = document.querySelector(".toggle");
    const showcase: any = document.querySelector(".showcase");
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      showcase.classList.toggle("active");
    });
  }

  getStarted() {
    this.router.navigate(['home']);
  }

}
