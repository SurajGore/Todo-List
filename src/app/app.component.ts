import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-List';
  constructor(){
    // setTimeout(() => {
    //   this.title = 'Change Title'
    // }, 2000);
  }
}
