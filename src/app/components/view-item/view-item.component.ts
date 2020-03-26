import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {

  id:string;
  data;
  constructor(
    private _data : DataService,
    private _router : Router,
    private _route : ActivatedRoute
  ){ 
    this._route.params.subscribe( params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this._data.getData(this.id).subscribe(
      (res:any) =>{
        this.data = res;
      },err=>{
        this._router.navigate(['Home']);
      }
    );
  }

  return(){
    this._router.navigate(['Home']);
  }

}
