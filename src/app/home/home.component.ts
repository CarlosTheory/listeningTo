import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from '../dataservice/data.service';
import { DataAlbum } from '../dataservice/data.service.album';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mostrarArtistas: any;
  mensaje: string = "";	

  public isCollapsed = true;
  constructor(private router: Router, private dataService: DataService, private dataAlbum: DataAlbum) { 
  }

  ngOnInit() {
  	this.dataService.mensajeActual.subscribe(mensaje => this.mensaje = mensaje);
    if (this.mensaje === ""){
      this.router.navigateByUrl('/login');
    }
  }

  showDataAlbum() {
    this.dataAlbum.obtenerAlbum()
    .subscribe((res) => {
      this.mostrarArtistas = res.data;
    });
  }

}
