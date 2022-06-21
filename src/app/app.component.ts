import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numeros: number[];

  constructor() {
    this.numeros = [2, 4, 6];
  }

  onTerminaCronometro($event) {
    console.log($event);
  }
}
