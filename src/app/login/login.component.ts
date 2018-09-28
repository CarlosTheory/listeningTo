import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservice/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data = {username: ''};
  mensaje: string;
  usuarioNull: string = "Introduzca su nombre y presione 'Entrar' ";
  constructor(private router: Router, private dataService: DataService) {
   }

  ngOnInit() {
    this.dataService.mensajeActual.subscribe(mensaje => this.mensaje = mensaje);
  }

  sendLogin() {
    if(this.data.username === ''){
      this.usuarioNull;
    } else {
      console.log(this.data.username);
      this.dataService.cambiarMensaje(this.data.username);
      this.router.navigateByUrl('/home');
    }
  }

}
