import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
 movie:any=[]
  constructor(private http: HttpClient) { }
  getMovies(name:string):Observable<any>{
    let url ="http://www.omdbapi.com/?apikey=c5640773&s=" + name;

    return this.http.get<any>(url);
  }

   register(data):Observable<any>{
     let url="http://localhost:3000/user";
     return this.http.post(url, data);
   }


  validateUser(name:string, password:string):Observable<any[]>{
    let url="http://localhost:3000/user";
    let data:any=[]
    data=this.http.get(`${url}/?name=${name}&password=${password}`);
    return data
}

}
