import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _AuthService:AuthService , private _Router:Router) { }

  result:string = '';

  registerForm:FormGroup = new FormGroup({
    first_name:new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(8)] ),
    last_name:new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(8)]),
    email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][a-z]{2,5}$/)] ),
    age:new FormControl(null , [Validators. required , Validators.min(16) , Validators.max(80)] ),
  })

  registerBtn(forminfo:FormGroup){
    this._AuthService.register(forminfo.value).subscribe((res)=>{
      // if(res.message == 'success'){
      //   this._Router.navigate(['/login']);
      // }else{
      //   this.result = res.message;
      //   console.log(res.errors);
        
      // }
      console.log(res);
      
    })    
  }

  ngOnInit(): void {
  }

}
