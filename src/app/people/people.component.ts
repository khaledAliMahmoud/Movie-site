import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from './../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  
  persons:any [] = [];
  imglink:string='https://image.tmdb.org/t/p/w500/';

  constructor(private _MoviesService:MoviesService , private _Router:Router) { }

  ngOnInit(): void {
    this._MoviesService.gettrending('person').subscribe((res)=>{
      this.persons=res.results
    });
  }
  
  }


