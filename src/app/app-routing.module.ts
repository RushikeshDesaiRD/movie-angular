import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemComponent } from './pages/item/item.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponentComponent } from './pages/signup-component/signup-component.component';
const routes: Routes = [
   {
     path:"",
     component: HomeComponent,
   },
   {
     path:"login",
     component: LoginComponent,
   },
   {
     path:"signup",
     component:SignupComponentComponent,
   },
   {
     path:"item/:data",
     component:ItemComponent,
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
