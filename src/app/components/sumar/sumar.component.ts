import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent implements OnInit {

  num1: number;
  num2: number;
  resultado: number;

  constructor() { 
    this.num1 = 120;
    this.num2 = 230;
    this.resultado = 0;
  }

  ngOnInit(): void {
  }

  functionCalcular() {
    this.resultado = this.num1 + this.num2;
  }

}
