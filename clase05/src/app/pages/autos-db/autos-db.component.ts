import { Component, inject, OnInit, signal } from '@angular/core';
import { Auto } from '../../classes/auto';
import { AltaAutoComponent } from '../autos/alta-auto/alta-auto.component';
import { DetalleAutoComponent } from '../autos/detalle-auto/detalle-auto.component';
import { ListadoAutoComponent } from '../autos/listado-auto/listado-auto.component';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-autos-db',
  imports: [AltaAutoComponent, DetalleAutoComponent, ListadoAutoComponent],
  templateUrl: './autos-db.component.html',
  styleUrl: './autos-db.component.css'
})
export class AutosDBComponent implements OnInit {
  db = inject(DatabaseService);

  autos = signal<Auto[]>([]);
  autoSelecionado?: Auto;

  ngOnInit() {
    this.db.canal.on(
      'postgres_changes',
      {
        event: '*', // insert, update, delete, * (todos)
        schema: 'public',
      },
      (payload) => {
        switch (payload.eventType) {
          case "INSERT":
            const nuevoAuto = payload.new as Auto;
            this.autos.update((autosAnterior) => {
              autosAnterior.push(nuevoAuto);
              
              console.log("El nuevo auto es: ", nuevoAuto);
              
              return [...autosAnterior];
            })
            break;
          
          case "UPDATE":
            // hago algo
            break;
          
          case "DELETE":
            // hago algo
            break;
        }
      }
    );

  this.db.canal.subscribe();

  this.db.listar().then((autos) => {

    //console.log(autos);
    const copy: Auto[] = [];
    autos.forEach((a) => {if(!this.autos().includes(a)) {
      copy.push(a);
    }});

    this.autos.set(copy);
  })
}


  agregarAuto(auto: Auto) {
    this.db.crear(auto);
  }

  

  obtenerAutoSeleccionado(auto: Auto){
    this.autoSelecionado = auto;
  }

  eliminar(inidice: number){
    this.autos().splice(inidice, 1);
  }
}