import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  @Input() cites;

  voteUp(idx){
    this.cites[idx].vote ++;
    this.ranking();
  }

  voteDown(idx){
    this.cites[idx].vote --;
    this.ranking();
  }

  delete(idx) {
    this.cites.splice(idx,1);
  }

  ranking(){
    this.cites.sort(function(a,b) {
      console.log("sorting")
      return b.vote - b.vote;
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
