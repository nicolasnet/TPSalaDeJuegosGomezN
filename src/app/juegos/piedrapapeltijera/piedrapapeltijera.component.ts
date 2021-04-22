import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../clases/juego-piedra-papel-tijera';

@Component({
  selector: 'app-piedrapapeltijera',
  templateUrl: './piedrapapeltijera.component.html',
  styleUrls: ['./piedrapapeltijera.component.css']
})
export class PiedrapapeltijeraComponent implements OnInit {
  nuevoJuego: JuegoPiedraPapelTijera;
  Mensajes:string;

  constructor() { 
    this.nuevoJuego = new JuegoPiedraPapelTijera();
  }
  ngOnInit() {
  }


  public piedra(){
    this.nuevoJuego.comenzar();
    console.log("entro a piedra 222");
    this.Mensajes = this.nuevoJuego.piedra();
  }
  public papel(){
    this.nuevoJuego.comenzar();
    console.log("entro a papel 222");
    this.Mensajes = this.nuevoJuego.papel();
  }
  public tijera(){
    this.nuevoJuego.comenzar();
    console.log("entro a tijera 222");
    this.Mensajes = this.nuevoJuego.tijera();
    console.log(this.Mensajes);
  }

  
  

}
