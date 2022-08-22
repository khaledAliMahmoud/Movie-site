import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthService , private _Router:Router) { }

  result:string = '';

  loginForm:FormGroup = new FormGroup({
     email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][a-z]{2,5}$/)] ),
  })

  logInBtn(forminfo:FormGroup){
    this._AuthService.login(forminfo.value).subscribe((res)=>{
      if(res.message == 'success'){
        localStorage.setItem('user_data' , JSON.stringify(res.token) );
       this._AuthService.userData();
        this._Router.navigate(['/home']);
      }else{
        this.result = res.message;
        console.log(res.message);
        
      }
    })    
  }

  ngOnInit(): void {
  }

}
