import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  bubuscar: FormControl;
  data:[] = [];
  imgs;
  constructor(
    private _data : DataService,
    private _router : Router
  ){ 
    this.filtrar('girls');
  }

  ngOnInit() {
    this.bubuscar = new FormControl('');
    this.bubuscar.valueChanges.pipe(debounceTime(200)).subscribe(
      (terminono)=>{
        this.filtrar(terminono);
      }
    );
  }

  filtrar(palabra){
    this._data.optData(palabra).subscribe(
      (res:any) =>{
        this.data = res.map(i => i.show);
      },err=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error al consumir Rest Api!',
        });
        location.reload();
      }
    );
  }

  more(id:string){
    this._router.navigate(['More/'+id]);
  }

  
}
