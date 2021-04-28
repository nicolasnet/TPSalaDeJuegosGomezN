import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  servicio: AuthService;

  constructor() { }

  ngOnInit(): void {
  }

  Desconectarse(){
    this.servicio.LogOut();
  }

}
