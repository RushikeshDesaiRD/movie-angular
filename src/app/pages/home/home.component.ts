import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies=[];
  name:string=""
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {

  }
  btnClick(){
    this.movieService.getMovies(this.name).subscribe(movies => {
      this.movies=movies.Search;


    })
  }

}
