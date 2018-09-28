import { Component, OnInit, Input } from '@angular/core';
import { ListaAlbumesComponent } from '../lista-albumes/lista-albumes.component';

@Component({
  selector: 'app-estas-escuchando',
  templateUrl: './estas-escuchando.component.html',
  styleUrls: ['./estas-escuchando.component.css']
})
export class EstasEscuchandoComponent implements OnInit {
  @Input() mostrarCancion: string;	
  @Input() nombreArtista: string;
  @Input() nombreAlbum: string;
  
  constructor(private listaAlbumes: ListaAlbumesComponent) { }

  ngOnInit() {
  }

}
