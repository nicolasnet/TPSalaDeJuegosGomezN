import { Component, OnInit } from '@angular/core';
import { Resultado } from 'src/app/clases/resultado';
import { ResultadosFirebaseService } from 'src/app/services/resultados-firebase.service';
import { Dragon } from '../clases/dragon';

@Component({
  selector: 'app-dragon',
  templateUrl: './dragon.component.html',
  styleUrls: ['./dragon.component.css']
})
export class DragonComponent implements OnInit {

  nuevoJuego: Dragon;
  Mensajes:string;
  contador: number=0;
  nuevoResultado: Resultado = new Resultado();

  constructor(private resultadosService: ResultadosFirebaseService) { 
    this.nuevoJuego = new Dragon;
    
    console.log("entra constructor");
  }


  verificar()
  {
    this.contador++;
    
    console.info("numero Secreto:",this.nuevoJuego.gano);  
    if (this.nuevoJuego.verificar()){   

      this.MostarMensaje("Sos un Genio!!!",true);

      this.nuevoResultado.fecha = new Date;
      this.nuevoResultado.juego = "Dragon";
      this.nuevoResultado.usuario = localStorage.getItem('usuario');
      this.nuevoResultado.puntaje= 10-this.contador;
      this.resultadosService.create(this.nuevoResultado);
    }else{

      let mensaje:string;
      switch (this.contador) {
        case 1:
          mensaje="No, intento fallido, animo";
          break;
          case 2:
          mensaje="En el menu de juegos te fijaste?";
          break;
          case 3:
          mensaje="Ya buscaste en la pagina principal?";
          break;
          case 4:
          mensaje="No son "+this.nuevoJuego.numeroElegido+" dragones";
          break;
          case 5:
          mensaje=" intentos y nada, revista esta pagina?.";
          break;
          case 6:
          mensaje="Afortunado en el amor nomas";
          break;
      
        default:
            mensaje="Ya le erraste "+ this.contador+" veces";
          break;
      }
      this.MostarMensaje("#"+this.contador+" "+mensaje);
     

    }
    console.info("numero Secreto:",this.nuevoJuego.gano);  
  }  

  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
     }, 3000);
    console.info("objeto",x);
  
   }



  ngOnInit() {
  }

}
