import { Component, OnInit, Input} from '@angular/core';
import { ListaAlbumesComponent } from '../lista-albumes/lista-albumes.component';

@Component({
  selector: 'app-mostrar-canciones',
  templateUrl: './mostrar-canciones.component.html',
  styleUrls: ['./mostrar-canciones.component.css']
})
export class MostrarCancionesComponent implements OnInit {
  @Input() pasarCancion: any;
  constructor(private listaAlbumes: ListaAlbumesComponent) { 
  }

  ngOnInit() {
  }

  cancionSeleccionada(posCancion){
  	this.listaAlbumes.cancionSeleccionada(posCancion);
  }

}
