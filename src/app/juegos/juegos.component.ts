import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
  }
  Juego(tipo: string) {
    switch (tipo) {
      case 'Memotest':
        this.router.navigate(['/Juegos/Memotest']);
        break;

      case 'Tateti':
        this.router.navigate(['/Juegos/Tateti']);
        break;

      case 'AdivinaMasListado':
        this.router.navigate(['/Juegos/AdivinaMasListado']);
        break;

      case 'AgilidadaMasListado':
        this.router.navigate(['/Juegos/AgilidadaMasListado']);
        break;

      case 'PPT':
        this.router.navigate(['/Juegos/PPT']);
        break;
      case 'Dragon':
        this.router.navigate(['/Juegos/Dragon']);
        break;
    }
  }

}
