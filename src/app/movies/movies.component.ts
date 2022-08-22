import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from './../movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies:any [] = [];
  imglink:string='https://image.tmdb.org/t/p/w500/';

  constructor(private _MoviesService:MoviesService , private _Router:Router) { }

  ngOnInit(): void {
    this._MoviesService.gettrending('movie').subscribe((res)=>{
      this.movies=res.results
    })
  }

}
