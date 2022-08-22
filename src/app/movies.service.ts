import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoviesComponent } from './movies/movies.component';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  gettrending(mediatype:string):Observable<any>{
   return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediatype}/week?api_key=96e05cdb03d0e89d77a8349e1533c5cc`)
  }

  adduser(mediatype:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediatype}/week?api_key=96e05cdb03d0e89d77a8349e1533c5cc`)
   }

  getMovieDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=96e05cdb03d0e89d77a8349e1533c5cc&language=en-US`)
   }

   gettvDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=96e05cdb03d0e89d77a8349e1533c5cc&language=en-US`)
   }

   getpersonDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=96e05cdb03d0e89d77a8349e1533c5cc&language=en-US`)
   }

}

// https://api.themoviedb.org/3/person/85?api_key=96e05cdb03d0e89d77a8349e1533c5cc&language=en-US
