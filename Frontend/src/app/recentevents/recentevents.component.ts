import { Component,Renderer2 } from '@angular/core';
import { DataService } from '../services/data.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recentevents',
  templateUrl: './recentevents.component.html',
  styleUrls: ['./recentevents.component.css']
})
export class RecenteventsComponent implements OnInit {
  recentevents:any=[]
  filteredData:any=[]
  currentDate = new Date();      // Get the current date

  constructor(private ds:DataService,private renderer: Renderer2,private r:Router)
  {
  }
  

  ngOnInit():
  void
  {
    this.ds.getguestevents().then(r=>r.json()).then(data=>this.getdata(data))
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = '/assets/js/recentevents.js';
    this.renderer.appendChild(document.body, script);
  }

  getdata(data:any)
  {
    this.recentevents=data
    this.recentevents.sort((a:any,b:any) => Date.parse(b.event_date) - Date.parse(a.event_date));
    console.log(this.recentevents)

  // Filter the data to get only the items from the current date onwards
  this.filteredData= this.recentevents.filter((item: { event_date: string | number | Date; })=> new Date(item.event_date) >= this.currentDate);
  console.log(this.filteredData);  // Print the filtered data
  }

  vsevent(did:any)
{
  let ids=did.target.id
  console.log("-----------------"+ids)
  this.r.navigate(["VSevent",ids])
}
}
