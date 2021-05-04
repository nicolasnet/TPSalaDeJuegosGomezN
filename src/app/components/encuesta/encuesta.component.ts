import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Encuesta } from 'src/app/clases/encuesta';
import { EncuestaFirebaseService } from 'src/app/services/encuesta-firebase.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  public forma: FormGroup;
  nuevaEncuesta: Encuesta;

  constructor(private fb: FormBuilder, private fireService: EncuestaFirebaseService) { }

  ngOnInit(): void {
    this.forma = this.fb.group({
      'nombre': ['', [Validators.required], this.spaceValidator],
      'apellido':['', [Validators.required], this.spaceValidator],
      'edad': ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      'celular': ['', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]],
      'puntaje': ['', Validators.required],
      'favorito': ['', Validators.required],
      'opinion': ['', Validators.required],
    });
  }

  private async spaceValidator(control: AbstractControl): Promise<object>{
    console.log("entra en spaceControl");
    const nombre = <string> control.value;
    const espacios = nombre.includes(' ');

    if(espacios){
      return {
        contieneEspacios: true
      };
    }else{
      return null;
    }
  }



  NuevaEncuesta(){
    const encuestaNueva = new Encuesta;
    encuestaNueva.usuario = localStorage.getItem('usuario');
    encuestaNueva.nombre = this.toTitleCase(this.forma.get('nombre').value);
    encuestaNueva.apellido = this.toTitleCase(this.forma.get('apellido').value);
    encuestaNueva.edad = this.forma.get('edad').value;
    encuestaNueva.celular = this.forma.get('celular').value;
    encuestaNueva.puntaje = this.forma.get('puntaje').value;
    encuestaNueva.opinion = this.forma.get('opinion').value;
    encuestaNueva.favorito = this.forma.get('favorito').value;
    this.fireService.create(encuestaNueva);
  }

  toTitleCase(str) {
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();   
  }


}
