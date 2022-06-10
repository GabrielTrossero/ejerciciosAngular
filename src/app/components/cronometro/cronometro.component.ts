import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  contador: number;

  constructor() { 
    this.contador = 10;
  }

  ngOnInit(): void { //podemos inicializar todas nuestras acciones de los componentes
    
  }

  empezar() {
    let interval = setInterval(() => {
      this.contador--;
      if (this.contador === 0) {
        clearInterval(interval); 
      }
    }, 1000);
  }

}
