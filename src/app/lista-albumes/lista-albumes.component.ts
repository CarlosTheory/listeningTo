import { Component, OnInit, Input } from '@angular/core';
import { DataAlbum } from '../dataservice/data.service.album';

@Component({
  selector: 'app-lista-albumes',
  templateUrl: './lista-albumes.component.html',
  styleUrls: ['./lista-albumes.component.css']
})
export class ListaAlbumesComponent implements OnInit {
  @Input() artistas: string;
  posicionIndex: number;
  mostrarAlbumes: any;

  mostrarCanciones: any;
  estasEscuchando: any;

  constructor(private dataAlbum: DataAlbum) {
  }

/*
  Recibe la posicion del artista y 
  guarda la respuesta en mostrarAlbumes
  con la posicion actual seleccionada.
  Esta es enviada a posicionArtista 
  en el componente mostrar-album.
  posArtista -> Determina Albumes
*/ 

  mostrarAlbums(posArtista){
  	this.dataAlbum.obtenerAlbum()
    .subscribe((res) => {
      this.mostrarAlbumes = res.data[posArtista];
    });
    console.log(this.mostrarAlbumes);
  }

/*  
  Recibe la posicion y guarda la 
  respuesta en mostrarCanciones.
  Esta funcion es invocada en 
  mostrar-canciones.
  posArtista -> Determina Albumes
  posAlbumes -> Determina Canciones*/

  pasarCanciones(posAlbum){
  	this.dataAlbum.obtenerAlbum()
    .subscribe((res) => {
      this.mostrarCanciones = this.mostrarAlbumes.albums[posAlbum];
    });
    console.log(this.mostrarCanciones);
  }

  cancionSeleccionada(posCancion){
  	this.dataAlbum.obtenerAlbum()
  	.subscribe((res) => {
  		this.estasEscuchando = this.mostrarCanciones.songs[posCancion];
  	});
  }

  ngOnInit() {
  }

}
