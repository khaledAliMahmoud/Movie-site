import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from './../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  tv:any [] = [];
  imglink:string='https://image.tmdb.org/t/p/w500/';


  constructor(private _MoviesService:MoviesService , private _Router:Router) { }

  ngOnInit(): void {
    this._MoviesService.gettrending('tv').subscribe((res)=>{
      this.tv=res.results
    });
  }

}
