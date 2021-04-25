import { Component, Input, OnInit } from '@angular/core';
import {MensajesService} from '../services/mensajes.service';
import {Mensaje} from '../clases/mensaje';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

 
  @Input() chatActivo:boolean=true;
  title="Sala de Juegos"
  chat:any;
  usuarioInteractura=localStorage.getItem('usuario')
  mensajeGuardar= new Mensaje;

  constructor(private mensajeService:MensajesService) {
    this.mensajeService.getAll().subscribe(chat =>{
      
      this.chat=chat;
    })
  }
  
  ngOnInit(): void {
    
  }

  ngOnChange(){
    this.usuarioInteractura=localStorage.getItem('usuario')
  }

  enviarMensaje(comentario: string){
    this.mensajeGuardar.hora= new Date;
    this.mensajeGuardar.usuario=localStorage.getItem('usuario');
    this.mensajeGuardar.comentario=comentario;
    console.log(this.mensajeGuardar.comentario);

    this.mensajeService.create(this.mensajeGuardar );
    this.mensajeGuardar.comentario="";
  }

}
