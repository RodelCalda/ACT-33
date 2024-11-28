import { Component, OnInit } from '@angular/core';
import { RecipeService } from './services/recipe.service';
import { Recipe } from './models/recipe.model'; 
import { CommonModule } from '@angular/common';
import { RecipeComponent } from "./components/recipe/recipe.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RecipeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  recipes: Recipe[] = []; // Initialize the array

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes(); // Ensure recipes are fetched correctly
  }
}
