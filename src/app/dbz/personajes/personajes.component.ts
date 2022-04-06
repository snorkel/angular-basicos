import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  get personajes(): Personaje[] {
    return this.dbzService.Personajes;
  }

  constructor(private dbzService: DbzService) {
  }

  // @Input() personajes: Personaje[] = [];

}
