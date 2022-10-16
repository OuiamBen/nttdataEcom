import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FillterpageComponent } from './fillterpage/fillterpage/fillterpage.component';
import { LoginComponent } from './login/login/login.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  { path:'shop-left-side',component:FillterpageComponent},
  {path:'login',component:LoginComponent},
  {path:'contact',component:ContactComponent},
 
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
