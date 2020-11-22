import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name="";
  password="";
  checkLogIn:any;
  constructor(private movie:MovieService) { }

  ngOnInit(): void {
  }
  onSubmit(){
      this.checkLogIn = this.movie.validateUser(this.name, this.password).subscribe(data => {
      if(data.length===0){
        this.checkLogIn=false
      }else{
        this.checkLogIn=true
      }

      })

  }

}
