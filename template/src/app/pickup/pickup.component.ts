import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.scss']
})
export class PickupComponent implements OnInit {

  keyword = 'name';
  
  data = [
     {
       id: 1,
       name: 'Houston',
     },
     {
       id: 2,
       name: 'Dallas',
       address: '002 Pagac Drives'
     },
     {
       id: 3,
       name: 'Kingsville',
       address: '8542 Lowe Mountain'
     },
     {
       id: 4,
       name: 'Austin',
       address: '1260 Oda Summit'
     },
     {
       id: 5,
       name: 'Corpus christi',
       address: '5017 Lowe Route'
     }
  ];

  constructor() { }

  ngOnInit() {
  }
 
  selectEvent(item) {
    // do something with selected item
  }
 
  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
  }

}