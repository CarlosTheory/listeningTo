import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
	private fuenteMensaje = new BehaviorSubject("");  // -> Mensaje por defecto(vacio);
	mensajeActual = this.fuenteMensaje.asObservable();

	constructor(private router: Router, private http: HttpClient){
	}


	cambiarMensaje(mensaje: string){
		this.fuenteMensaje.next(mensaje);		
	}
}

