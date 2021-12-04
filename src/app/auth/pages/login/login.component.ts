import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent{

  constructor(
    private router: Router
  
  ) { }

  login() {
    // Ir al backens  y validar que el usuario exista
    this.router.navigate(['./heroes']);
  }

}
