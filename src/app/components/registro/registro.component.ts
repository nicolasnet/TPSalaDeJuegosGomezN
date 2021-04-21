import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/clases/mensaje';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  mensaje: Mensaje = new Mensaje();

  constructor(private mensajesService: MensajesService) { }

  ngOnInit(): void {
  }


  EnviarMensaje(){
    console.log("Entro a funcion enviar mensaje");
    this.mensajesService.create(this.mensaje).then(() => {
      console.log("Mensaje Enviado");
    });
  }


}
