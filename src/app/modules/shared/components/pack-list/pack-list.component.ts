import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pack-list',
  templateUrl: './pack-list.component.html',
  styleUrls: ['./pack-list.component.scss']
})
export class PackListComponent implements OnInit {

  @Input() packType: string = 'default';

  constructor() { }

  ngOnInit(): void { }

}
