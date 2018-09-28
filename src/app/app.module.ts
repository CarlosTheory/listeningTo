/* Librerias */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


/* Componentes */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { DataService } from './dataservice/data.service';
import { DataAlbum } from './dataservice/data.service.album';
import { ListaAlbumesComponent } from './lista-albumes/lista-albumes.component';
import { MostrarAlbumComponent } from './mostrar-album/mostrar-album.component';
import { MostrarCancionesComponent } from './mostrar-canciones/mostrar-canciones.component';
import { EstasEscuchandoComponent } from './estas-escuchando/estas-escuchando.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },

  { path:'', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListaAlbumesComponent,
    MostrarAlbumComponent,
    MostrarCancionesComponent,
    EstasEscuchandoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    DataAlbum
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
