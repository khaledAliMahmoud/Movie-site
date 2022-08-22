import { Router } from '@angular/router';
import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies:any [] = [];
  tv:any [] = [];
  persons:any [] = [];

  imglink:string='https://image.tmdb.org/t/p/w500/';
  constructor(private _MoviesService:MoviesService , private _Router:Router) { }

  ngOnInit(): void {
    this._MoviesService.gettrending('movie').subscribe((res)=>{
      this.movies=res.results.slice(0,10)
    })

    this._MoviesService.gettrending('tv').subscribe((res)=>{
      this.tv=res.results.slice(0,10)
    });

    this._MoviesService.gettrending('person').subscribe((res)=>{
      this.persons=res.results.slice(0,10)
    });
  }



}
