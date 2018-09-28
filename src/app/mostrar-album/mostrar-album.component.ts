import { Component, OnInit, Input } from '@angular/core';
import { DataAlbum } from '../dataservice/data.service.album';

import { ListaAlbumesComponent } from '../lista-albumes/lista-albumes.component';


@Component({
  selector: 'app-mostrar-album',
  templateUrl: './mostrar-album.component.html',
  styleUrls: ['./mostrar-album.component.css']
})
export class MostrarAlbumComponent implements OnInit {
  @Input() posicionArtista: any;
  mostrarCanciones: string	;
  constructor(private dataAlbum: DataAlbum, private listaAlbumes: ListaAlbumesComponent) {
  }

  pasarCanciones(posicionAlbum){
  	this.listaAlbumes.pasarCanciones(posicionAlbum);
  }

  ngOnInit() {
  }

  // pasarCanciones(index){
  // 	this.dataAlbum.obtenerAlbum()
  //   .subscribe((res) => {
  //     this.mostrarCanciones = this.posicionArtista.albums[index];
  //   });
  //   console.log(this.mostrarCanciones);
  // }

}
