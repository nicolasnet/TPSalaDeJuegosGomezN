import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciopaisesService {

  private paisActual: string;

  constructor(private http: HttpClient) {
    this.paisActual = "Argentina";
  }


  getPaisActual(){
    return this.paisActual;
  }

  setPaisActual(pais: string){
    this.paisActual = pais;
  }

  getTodosLosPaises(){
    return this.http.get('https://api.themoviedb.org/3/tv/popular?api_key=e41fe19661dec9a2c8b08fe0bc7c19cc');
  }
}
