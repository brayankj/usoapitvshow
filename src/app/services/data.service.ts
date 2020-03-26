import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http:HttpClient){ 

  }

  optData(palabra:string){
    return this._http.get(`http://api.tvmaze.com/search/shows?q=${palabra}`);
  }

  getData(id:string){
    return this._http.get(`http://api.tvmaze.com/shows/${id}`);
  }

}
