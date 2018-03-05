import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faviourite',
  templateUrl: './faviourite.component.html',
  styleUrls: ['./faviourite.component.scss']
})
export class FaviouriteComponent  {
  isSelected: boolean = <boolean>true ;
  constructor() { }

  selectFaviourite() {
    this.isSelected = !this.isSelected;
  }

}
