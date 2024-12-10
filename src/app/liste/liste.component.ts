import { Component } from '@angular/core';
import { FilmInfo } from '../../interfaces/film-info';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent {
  filmTitle : String = '';
  imageURL : String = '';
  
  films : FilmInfo = {
    'ryan' : {filmTitle : "Il faut sauver le soldat Ryan", imageURL : "assets/img/ryan.png"},
    'verte' : {filmTitle : "La Ligne Verte", imageURL : "assets/img/ligne-verte.png"},
    'shining' : {filmTitle : "Shining", imageURL : "assets/img/shining.png"},
    'sw' : {filmTitle : "Star Wars III - La revanche des Siths", imageURL : "assets/img/star-wars-III.png"},
    'chihiro' : {filmTitle : "Le Voyage de Chihiro", imageURL : "assets/img/chihiro.png"},
  };

  public setName(key : string) : void {
   this.filmTitle = this.films[key].filmTitle;
   this.imageURL = this.films[key].imageURL;
  }

}
