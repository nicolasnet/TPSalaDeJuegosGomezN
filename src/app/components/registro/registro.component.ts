import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/clases/mensaje';
import { MensajesService } from 'src/app/services/mensajes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public forma: FormGroup;

  isSignedIn= false;
  errorIngreso=false;
  mensaje: Mensaje = new Mensaje();

  constructor(private fb: FormBuilder, private mensajesService: MensajesService,public firebaseService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.forma = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'psw': ['', Validators.required],
      'psw2': ['', Validators.required],
    });
  }

  

  EnviarMensaje(){
    console.log("Entro a funcion enviar mensaje");
    this.mensajesService.create(this.mensaje).then(() => {
      console.log("Mensaje Enviado");
    });
  }



  async OnSignUp(email:string, psw: string, psw2: string){
    
    if(psw==psw2){
      await this.firebaseService.SignUp(email,psw);
    
      if(this.firebaseService.isLoggedIn){
        this.isSignedIn = true;
        this.errorIngreso = false;
        localStorage.setItem('usuario',email)
        this.router.navigate(['/home']);
      }    
    }else{
      this.errorIngreso = true;
    }    
  }


}
