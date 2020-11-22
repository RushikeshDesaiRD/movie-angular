import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from './../../services/movie.service';

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.css']
})
export class SignupComponentComponent implements OnInit {
  name="";
  password="";
  checkLogIn:boolean;
  constructor(private movie:MovieService, private router:Router) { }

  ngOnInit(): void {
    console.log(this.checkLogIn)
  }
  onSubmit(){
     let new_data={
      name:this.name,
      password:this.password
     }
     this.movie.register(new_data).subscribe(

     )
     this.router.navigateByUrl('/login')

  }



}
