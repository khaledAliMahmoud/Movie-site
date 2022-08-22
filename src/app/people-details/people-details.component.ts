import { MoviesService } from './../movies.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {

    id:string = '';
    person:any = {};
  imglink:string='https://image.tmdb.org/t/p/w500/';


  constructor(private _ActivatedRoute:ActivatedRoute ,private _MoviesService:MoviesService ) {
    this.id = _ActivatedRoute.snapshot.params['id']
   }

  ngOnInit(): void {
    this._MoviesService.getpersonDetails(this.id).subscribe((res)=>{
      this.person = res
    })
  }

}
