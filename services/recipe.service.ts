import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  getRecipes(): Recipe[] {
    return [
      {
        id: 1,
        name: 'Pancakes',
        category: 'Breakfast',
        tags: ['Simple', 'Trending'],
        imageUrl: 'https://th.bing.com/th/id/OIP.zmdy6RSEZeDiWxMNS2hN-gAAAA?rs=1&pid=ImgDetMain',
      },
      {
        id: 2,
        name: 'Lemon Eton Mess',
        category: 'Dessert',
        tags: ['Easy', 'Trending'],
        imageUrl: 'https://th.bing.com/th/id/OSK.HEROz1VGKrhR6UKOuq53TxPwFyb4HiyZ_JgIliy70S3hIdM?rs=1&pid=ImgDetMain',
      },
      {
        id: 3,
        name: 'Classic Cheesecake',
        category: 'Dessert',
        tags: ['Rich', 'Creamy'],
        imageUrl: 'https://bing.com/th?id=OSK.7051dbd80c33fe2009b79722e730d7d9',
      },
      {
        id: 4,
        name: 'Berry Smoothie Bowl',
        category: 'Breakfast',
        tags: ['Healthy', 'Fresh'],
        imageUrl: 'https://th.bing.com/th/id/OIP.EDdtpL_FJUoJLIJYUfy2tAHaLH?rs=1&pid=ImgDetMain',
      },
      {
        id: 5,
        name: 'Spaghetti Carbonara',
        category: 'Dinner',
        tags: ['Italian', 'Quick'],
        imageUrl: 'https://th.bing.com/th/id/OIP.dchqjONJhrMllqIkMeIZbwHaLH?rs=1&pid=ImgDetMain',
      },
      {
        id: 6,
        name: 'Avocado Toast',
        category: 'Breakfast',
        tags: ['Simple', 'Healthy'],
        imageUrl: 'https://www.jessicagavin.com/wp-content/uploads/2020/07/avocado-toast-11.jpg',
      },
      {
        id: 7,
        name: 'Grilled Chicken Salad',
        category: 'Lunch',
        tags: ['Healthy', 'Protein-Rich'],
        imageUrl: 'https://i.pinimg.com/originals/68/52/4f/68524f554edc553908cb778f09424a2a.jpg',
      },
      {
        id: 8,
        name: 'Chocolate Lava Cake',
        category: 'Dessert',
        tags: ['Decadent', 'Trending'],
        imageUrl: 'https://bing.com/th?id=OSK.22e35e6896601da85dfe55568476266e',
      },
      {
        id: 9,
        name: 'Vegetable Stir Fry',
        category: 'Dinner',
        tags: ['Quick', 'Vegan'],
        imageUrl: 'https://bing.com/th?id=OSK.644af19e702c44f1b9d0d28a089b279a',
      },
      {
        id: 10,
        name: 'Choc-Crackle Peanut Butter Crunch',
        category: 'Snacks',
        tags: ['Awesome', 'Trending'],
        imageUrl: 'https://bing.com/th?id=OSK.3a9c58666b93e2f5b6fdc093bcb3aab0',
      },
    ];
  }
}

