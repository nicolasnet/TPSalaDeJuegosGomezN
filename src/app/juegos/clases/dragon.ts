import { Juego } from '../clases/juego'

export class Dragon extends  Juego {

    cantidadSecreta: number = 5;
    numeroElegido: number;

    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("El secreto del dragon",gano,jugador);      
    }
        
    public verificar() {
        if (this.numeroElegido == this.cantidadSecreta) {
          this.gano = true;
        }
        if (this.gano) {
          return true;
        } else {
          return false;
        }
     }

}
