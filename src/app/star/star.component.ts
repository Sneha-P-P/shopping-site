import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() rating: number;
  starWidth: number; 
  emptyStarWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnChanges() {
    this.starWidth = this.rating * 86/5 ;
    this.emptyStarWidth = 86 - this.starWidth;
  }
  onClick(): void{
    this.ratingClicked.emit(`The Rating is ${this.rating}`);
  }
}
