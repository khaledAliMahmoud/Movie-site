import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'final-project';

  constructor(private _AuthService:AuthService){
    _AuthService.user.subscribe(()=>{
      if(_AuthService.user.getValue() !=null){
        _AuthService.userData()
      }
    })
  }

}
