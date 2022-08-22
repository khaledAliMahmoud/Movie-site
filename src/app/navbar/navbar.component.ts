import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

islogin:boolean = false; 

  constructor(private _AuthService:AuthService) { }

  ngOnInit(): void {

    this._AuthService.user.subscribe(()=>{
      if(this._AuthService.user.getValue() !=null){
        this.islogin = true;
      }else{
        this.islogin = false;
      }
    });
  }

  calLogOut(){
    this._AuthService.logOut();
  }


}
