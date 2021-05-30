import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customise-pack',
  templateUrl: './customise-pack.component.html',
  styleUrls: ['./customise-pack.component.scss']
})
export class CustomisePackComponent implements OnInit, OnDestroy {

  @Input() packOptions: any = {};

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {  }

  ngOnDestroy() { }

}
