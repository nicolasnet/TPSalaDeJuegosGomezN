// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = '';
  clave= '';
  progreso: number;
  progresoMensaje="esperando..."; 
  logeando=true;
  ProgresoDeAncho:string;

  clase="progress-bar progress-bar-info progress-bar-striped ";

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
      this.progreso=0;
      this.ProgresoDeAncho="0%";

  }

  ngOnInit() {
  }

  Entrar() {
    if (this.usuario === 'admin' && this.clave === 'admin') {
      this.router.navigate(['/home']);
    }
  }

}
