import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent implements OnInit {

  id:string = '';
  tvDetails:any = {};
  imglink:string='https://image.tmdb.org/t/p/w500/';

  constructor(private _MoviesService:MoviesService , private _ActivatedRoute:ActivatedRoute) {
    this.id = _ActivatedRoute.snapshot.params['id']
   }

  ngOnInit(): void {
    this._MoviesService.gettvDetails(this.id).subscribe((res)=>{
      this.tvDetails=res
    })
  }

}
