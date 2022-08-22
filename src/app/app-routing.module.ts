import { PeopleDetailsComponent } from './people-details/people-details.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AuthguardGuard } from './authguard.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[AuthguardGuard],component:HomeComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'gallery',canActivate:[AuthguardGuard],component:GalleryComponent},
  {path:'about',canActivate:[AuthguardGuard],component:AboutComponent},
  {path:'people',canActivate:[AuthguardGuard],component:PeopleComponent},
  {path:'tv',canActivate:[AuthguardGuard],component:TvComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'movieDetails/:id',component:MovieDetailsComponent},
  {path:'tvdetails/:id',component:TvDetailsComponent},
  {path:'peopledetails/:id',component:PeopleDetailsComponent},
  {path:'movies',canActivate:[AuthguardGuard],component:MoviesComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
