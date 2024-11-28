import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; 
import { RecipeComponent } from './components/recipe/recipe.component'; 

@NgModule({
   
 
  imports: [
    AppComponent,
    RecipeComponent,
    BrowserModule
  ],
  providers: [],
})
export class AppModule { }

