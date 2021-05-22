import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pack-list',
  templateUrl: './pack-list.component.html',
  styleUrls: ['./pack-list.component.scss']
})
export class PackListComponent implements OnInit {

  @Input() packType: string = 'default';
  packsList: any = [];

  constructor() { }

  ngOnInit(): void {
    this.packsList = [
      {
        id: '1',
        imgSrc: 'https://i.imgur.com/w2rCsEw.jpg',
        packName: '',
        packCost: ''
      },
      {
        id: '2',
        imgSrc: 'https://i.imgur.com/w2rCsEw.jpg',
        packName: '',
        packCost: ''
      },
      {
        id: '3',
        imgSrc: 'https://i.imgur.com/w2rCsEw.jpg',
        packName: '',
        packCost: ''
      },
      {
        id: '4',
        imgSrc: 'https://i.imgur.com/w2rCsEw.jpg',
        packName: '',
        packCost: ''
      },
      {
        id: '1',
        imgSrc: 'https://i.imgur.com/w2rCsEw.jpg',
        packName: '',
        packCost: ''
      },
      {
        id: '1',
        imgSrc: 'https://i.imgur.com/w2rCsEw.jpg',
        packName: '',
        packCost: ''
      },
      {
        id: '1',
        imgSrc: 'https://i.imgur.com/w2rCsEw.jpg',
        packName: '',
        packCost: ''
      },
      {
        id: '1',
        imgSrc: 'https://i.imgur.com/w2rCsEw.jpg',
        packName: '',
        packCost: ''
      },
    ];

  }

}
