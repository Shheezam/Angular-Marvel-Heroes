import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MARVEL HEROES';
 
  items = [''];
  

  addItem(newItem: string) {      //Step 4
    this.items.push(newItem);
  }
  
}
