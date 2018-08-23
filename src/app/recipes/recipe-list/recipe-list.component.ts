import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A first recipe', 'this is simply first test', 'https://www.kwestiasmaku.com/sites/kwestiasmaku.com/files/ciasto_na_pizze_00.jpg'),
    new Recipe('A second recipe', 'this is simply second test', 'https://www.kwestiasmaku.com/sites/kwestiasmaku.com/files/ciasto_na_pizze_00.jpg'),
    new Recipe('A third recipe', 'this is simply third test', 'https://www.kwestiasmaku.com/sites/kwestiasmaku.com/files/ciasto_na_pizze_00.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
