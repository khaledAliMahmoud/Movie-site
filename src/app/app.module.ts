import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    MoviesComponent,
    TvComponent,
    PeopleComponent,
    NotfoundComponent,
    FooterComponent,
    GalleryComponent,
    LoginComponent,
    RegisterComponent,
    MovieDetailsComponent,
    TvDetailsComponent,
    PeopleDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
