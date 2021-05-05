import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ResultadosFirebaseService } from 'src/app/services/resultados-firebase.service';




@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit  {

  listadoResultados: any;
  displayedColumns: string[] = ['fecha', 'usuario', 'juego', 'puntaje'];
  dataSource;

  constructor(private resultadoService: ResultadosFirebaseService){
    this.resultadoService.getAll().subscribe(resultados =>{
      
      this.dataSource=resultados;
      
    })

  }

  ngOnInit(){

  }


}
