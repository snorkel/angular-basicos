import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html'
})
export class NuevoComponent {

  @Input() nuevo: Personaje = { nombre: '', poder: 0 };
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  constructor(private dbzService: DbzService) { }

  agregar() {
    if (this.nuevo.nombre.trim().length == 0)
      return;

    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = { nombre: '', poder: 0 }
  }
}
