import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Resultado } from 'src/app/clases/resultado';
import { ResultadosFirebaseService } from 'src/app/services/resultados-firebase.service';
import { ServiciopaisesService } from 'src/app/services/serviciopaises.service';
import { JuegoMemotest } from '../clases/juego-memotest';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {

  public juego: JuegoMemotest;
  public contador;
  public tiempoRestante;
  public listadoPaises:any;
  resultadoNuevo: Resultado = new Resultado();
  

  constructor(private resultadosService: ResultadosFirebaseService, private miServicio: ServiciopaisesService) {
    this.miServicio.getTodosLosPaises().subscribe(resultado => {
      this.listadoPaises = resultado;
    }, error  =>{
      console.log('hubo un error: '+ error);
      
    });
    this.juego = new JuegoMemotest(miServicio);
    this.juego.enJuego = false;
    
  }

  accion(indice) {
    if (!this.juego.pensando) {
      this.juego.seSelecciona(indice);
    }

  }

  nuevoJuego() {
    console.log(this.listadoPaises);
    this.juego.nuevoJuego();
    this.tiempoRestante = 60;
    this.contador = setInterval(() => {
      this.tiempoRestante -= 1;
      if (this.juego.gano) {
        let puntosAOtorgar = Math.floor(1000/this.juego.movimientos);
        clearInterval(this.contador);
        this.resultadoNuevo.fecha = new Date;
        this.resultadoNuevo.juego = "Memotest";
        this.resultadoNuevo.usuario = localStorage.getItem('usuario');
        this.resultadoNuevo.puntaje = puntosAOtorgar;
        this.resultadosService.create(this.resultadoNuevo);
        
      }
      if (this.tiempoRestante == 0 && !this.juego.gano) {
        clearInterval(this.contador);
        this.juego.enJuego = false;
        
      }
    }, 1000)
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    clearInterval(this.contador);
  }

}
