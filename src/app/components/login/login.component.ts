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
import { AuthService } from 'src/app/services/auth.service';
import { MensajesService } from 'src/app/services/mensajes.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  isSignedIn= false;
  errorIngreso=false;
  emailIngreso: string = "";
  contraIngreso: string = "";


  constructor(public firebaseService: AuthService, private router: Router){}
  
  ngOnInit() {
    if(localStorage.getItem('user')!== null){
      this.isSignedIn = true;
    }else{
      this.isSignedIn = false;
    }
  }


  async OnSignUp(email:string, password: string){
    await this.firebaseService.SignUp(email,password);
    
    if(this.firebaseService.isLoggedIn){
      this.isSignedIn = true;
      this.router.navigate(['/home']);
    }    
  }

  
  async OnSignIn(email:string, password: string){
    console.log(this.firebaseService.isLoggedIn);

    await this.firebaseService.SignIn(email,password);
    console.log("prueba2");
    if(this.firebaseService.isLoggedIn){
      this.isSignedIn = true;
      this.router.navigate(['/home']);
    }
    else{
      this.errorIngreso=true;
      console.log("Hola");
    }
  }

  CompletaIngreso(){
    console.log("entro a completar");
    this.emailIngreso= "hola@hola.com";
    this.contraIngreso = "123456";
  }



  // usuario = '';
  // clave= '';
  // progreso: number;
  // progresoMensaje="esperando..."; 
  // logeando=true;
  // ProgresoDeAncho:string;

  // clase="progress-bar progress-bar-info progress-bar-striped ";

  // constructor(
  //   private route: ActivatedRoute,
  //   private router: Router) {
  //     this.progreso=0;
  //     this.ProgresoDeAncho="0%";

  // }

  // ngOnInit() {
  // }

  // Entrar() {
  //   if (this.usuario === 'admin' && this.clave === 'admin') {
  //     this.router.navigate(['/home']);
  //   }
  // }

}
