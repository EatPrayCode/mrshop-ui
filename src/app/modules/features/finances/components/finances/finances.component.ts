import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finances',
  templateUrl: './finances.component.html',
  styleUrls: ['./finances.component.scss']
})
export class FinancesComponent implements OnInit {

  packType: any = 'finances';

  constructor() { }

  ngOnInit(): void {
  }

}
