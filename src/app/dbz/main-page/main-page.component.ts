import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  personajes : Personaje[] = [
    {
      nombre: 'Vegueta',
      poder: 15000
    },
    {
      nombre: 'Goku',
      poder: 17500
    }
  ]
  nuevo: Personaje = {
    nombre:'Maestro Rochy',
    poder: 1000
  }

  agregarPersonaje(personaje:Personaje){
    this.personajes.push(personaje)
  }
}
