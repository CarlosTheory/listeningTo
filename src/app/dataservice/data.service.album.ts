import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';




@Injectable()
export class DataAlbum {
	albumUrl = "../../assets/Data.json";
	constructor(public http: HttpClient){}

	obtenerAlbum(){
		//return this.http.get<DataJson>(this.albumUrl);
		return this.http.get<DataJson>(this.albumUrl);
	}
}

export interface DataJson {
	data: string; 
}

