import { Injectable } from '@angular/core';
import { FilmInfo } from '../../interfaces/film-info';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  
  constructor() {
    //Simulation d'API, mais avec l'objet en dur ici
    this.films = [
      {filmTitle : "Il faut sauver le soldat Ryan", imageURL : "assets/img/ryan.png"},
      {filmTitle : "La Ligne Verte", imageURL : "assets/img/ligne-verte.png"},
      {filmTitle : "Shining", imageURL : "assets/img/shining.png"},
      {filmTitle : "Star Wars III - La revanche des Siths", imageURL : "assets/img/star-wars-III.png"},
      {filmTitle : "Le Voyage de Chihiro", imageURL : "assets/img/chihiro.png"},
    ];
   }

  films: FilmInfo[];

  public getMovies(): FilmInfo[]{
    return this.films;
  }
}
