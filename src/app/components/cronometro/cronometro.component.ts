import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  @Input() inicio: number;
  @Output() terminaCronometro: EventEmitter<string>;
  contador: number;

  constructor() { 
    this.contador = 10;
    this.terminaCronometro = new EventEmitter();
  }

  ngOnInit(): void { //podemos inicializar todas nuestras acciones de los componentes
    this.contador = this.inicio ? this.inicio : 10; //si inicio existe, se le asigna ese valor, sino se le asigna 10
  }

  empezar() {
    let interval = setInterval(() => {
      this.contador--;
      if (this.contador < 0) {
        clearInterval(interval); 
        this.contador = this.inicio;
        this.terminaCronometro.emit("Finaliza el cronometro con el número " + this.inicio);
      }
    }, 1000);
  }

}
