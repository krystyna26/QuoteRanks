import { Component } from '@angular/core';
import { NgModule } from '@angular/core'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  cite = {
    quote : "",
    author: "",
    vote: 0
  }

  list:Array<object> = [];

  onSubmit(){
    this.list.push(this.cite);
    console.log(this.list);
    this.cite = {
      quote:"",
      author:"",
      vote:0
    }
  }

 
}
