import { Component,Renderer2 } from '@angular/core';
import { OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-vsevent',
  templateUrl: './vsevent.component.html',
  styleUrls: ['./vsevent.component.css']
})
export class VSeventComponent implements OnInit{

  specificevent:any=[]
  pid:any=""

  constructor(private ds:DataService,private ar:ActivatedRoute)
  {
    ar.params.subscribe(data=>this.pid=data["id"])
  }

  ngOnInit():
  void
  {
    this.ds.getspecificguestevents(this.pid).then(r=>r.json()).then(data=>this.getdata(data))
  }
  
  getdata(d:any){
    this.specificevent=d
    console.log(this.specificevent)
  }
}