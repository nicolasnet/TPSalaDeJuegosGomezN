import { Juego } from '../clases/juego'

export class JuegoPiedraPapelTijera extends Juego{
    eleccionMaquina: string;
    eleccionHumano: string;
    numeroSecreto: number;
    ContadorDeEmpates: number =0;
    ContadorDeGanadas: number =0;
    ContadorDePerdidas: number=0;

    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Piedra Papel Tijeras",gano,jugador);      
    }

    public comenzar()
    {
        //Genero el número RANDOM entre 1 y 3
        this.numeroSecreto = Math.floor( Math.random()*3)+1;
        switch(this.numeroSecreto)
        {
            case 1:
                this.eleccionMaquina="piedra";
                break;
            case 2:
                this.eleccionMaquina="papel";
                break;
            case 3:
                this.eleccionMaquina="tijera";
                break;
        }
    }

        
    public piedra()
    {
        console.log("entra a piedra");
        
        this.eleccionHumano="piedra";
        if(this.eleccionHumano==this.eleccionMaquina)
        {
            this.ContadorDeEmpates++;
            return "La Maquina eligio piedra, tenemos un EMPATE.";            
        }
        else if(this.eleccionMaquina=="tijera")
        {
            this.ContadorDeGanadas++;
            return "Vos ganastes, la maquina eligio tijera.";            
        }
        else
        {
            this.ContadorDePerdidas++;
            return "Te gano la Maquina jaja eligio Papel.";            
        }
    }

    public papel()
    {
        this.eleccionHumano="papel";
        if(this.eleccionHumano==this.eleccionMaquina)
        {
            this.ContadorDeEmpates++;		
            return "Empate, Ambos eligieron Papel";      

        }
        else if(this.eleccionMaquina=="piedra")
        {
            this.ContadorDeGanadas++;
            return "Vos ganastes campeón! la maquina eligio Piedra.";            
        }
        else
        {
            this.ContadorDePerdidas++;
            return "Ganó la Maquina eligio tijera, no siempre se gana.";            
        }
    }

    public tijera()
    {
        this.eleccionHumano="tijera";
        if(this.eleccionHumano==this.eleccionMaquina)
        {
            this.ContadorDeEmpates++;		
            return "Empate, esta reñido, ambos eligieron tijera.";            
        }
        else if(this.eleccionMaquina=="papel")
        {
            this.ContadorDeGanadas++;
            return "Vos ganastes que groso, la tijera vence al papel.";            
        }
        else
        {
            this.ContadorDePerdidas++;
            return "Ganó la Maquina con piedra, mejor suerte la próxima";       
        }
    }
    
    public verificar():boolean{
        console.log("hola");
        return true;
    }



}
