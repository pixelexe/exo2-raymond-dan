import { Component } from '@angular/core';
import { FilmInfo } from '../../interfaces/film-info';
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent {

  constructor(filmsService : FilmsService){
    //Simulation d'un appel API
    this.films = filmsService.getMovies();
  }

  films: FilmInfo[];
  filmTitle : string = '';
  imageURL : string = '';

  setSelectedMovie(filmTitle: string, imageURL: string) {
    this.filmTitle = filmTitle;
    this.imageURL = imageURL
  }

  
}
