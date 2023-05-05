import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Heroes } from 'src/app/Interfaces/heroes';
import { HEROES } from 'src/app/\'Mock-data/mock-heroes';

@Component({
  selector: 'app-heroes-lists',
  templateUrl: './heroes-lists.component.html',
  styleUrls: ['./heroes-lists.component.css']
})
export class HeroesListsComponent {

  //PRACTICE
  hero: Heroes = {
     id : 1,
     name : 'Iron Man'
  };


  //INPUT OUTPUT
  @Output() newItemEvent = new EventEmitter<string>();//Step 1

  addNewItem(value: string) {       //Step 2
    this.newItemEvent.emit(value);
  }

  //MOCK DATA
  heroes = HEROES;
  selectedHero?: Heroes;

  onSelect(hero: Heroes): void {
    this.selectedHero = hero;
  }

}

