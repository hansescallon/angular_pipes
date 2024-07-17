import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'Capitan America';
  arreglo:number[] = [1,2,3,4,5,6,7,8,9,10];
  PI:number = 3.141516;
  porcentaje: number = 0.234;
  salario:number = 1234.5;
  fecha :Date = new Date();
  url: string = 'https://www.youtube.com/embed/TZAklerD988?si=V3Hijf6-p2zItXVB';
  heroe = {
    nombre:'Logan',
    clave:'wolverine',
    edad:500,
    direccion : {
      calle: 'primera',
      casa:20
    }
  }
}
