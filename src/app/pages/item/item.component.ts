import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from './../../services/movie.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  name=""
  actor=""
  year=null
  rating=null
  realseDate=Date
  poster=null
  constructor(private router:ActivatedRoute, private http:HttpClient) { }
   movie:any=[]
  ngOnInit(): void {
           let id= this.router.snapshot.params.data.toString();
           let url ="http://www.omdbapi.com/?apikey=c5640773&i=" + id;
           this.http.get(url).subscribe(res=>{

             this.movie=res
             console.log(this.movie)
              this.name=this.movie.Title
              this.year=this.movie.Year
              this.realseDate=this.movie.Released
              this.poster=this.movie.Poster
              this.actor=this.movie.Actors
            });
         }

}
