import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Resultado } from 'src/app/clases/resultado';
import { ResultadosFirebaseService } from 'src/app/services/resultados-firebase.service';
import { JuegoPiedraPapelTijera } from '../clases/juego-piedra-papel-tijera';

@Component({
  selector: 'app-piedrapapeltijera',
  templateUrl: './piedrapapeltijera.component.html',
  styleUrls: ['./piedrapapeltijera.component.css']
})
export class PiedrapapeltijeraComponent implements OnInit {
  nuevoJuego: JuegoPiedraPapelTijera;
  Mensajes:string;
  resultadosNuevos: Resultado;

  constructor(private fireService: ResultadosFirebaseService, private ruta: Router) { 
    this.nuevoJuego = new JuegoPiedraPapelTijera();
    this.resultadosNuevos = new Resultado();
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

  enviarResultados(){
    this.resultadosNuevos.fecha= new Date;
    this.resultadosNuevos.juego= "PPT";
    this.resultadosNuevos.usuario= localStorage.getItem('usuario');
    this.resultadosNuevos.puntaje= this.nuevoJuego.ContadorDeGanadas * 3 + this.nuevoJuego.ContadorDeEmpates;
    this.fireService.create(this.resultadosNuevos);
    this.ruta.navigate(["/Juegos"]);
  }
  

}
