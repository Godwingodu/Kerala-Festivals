import { Component,Renderer2 } from '@angular/core';
import { DataService } from '../services/data.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-allevents',
  templateUrl: './allevents.component.html',
  styleUrls: ['./allevents.component.css']
})
export class AlleventsComponent implements OnInit {
  allevents: any = []
  searchText: any;
  filteredData: any = []
  currentDate = new Date();      // Get the current date

  constructor(private ds: DataService, private r: Router,private renderer: Renderer2) {

  }

  
  ngOnInit():
  
    void {
      if (!localStorage.getItem('foo')) { 
        localStorage.setItem('foo', 'no reload') 
        location.reload() 
      } else {
        localStorage.removeItem('foo') 
      }
    

    this.ds.getguestevents().then(r => r.json()).then(data => this.getdata(data))

    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = '/assets/js/navbarexit.js';
    this.renderer.appendChild(document.body, script);
  }
  getdata(data: any) {
    this.allevents = data
    this.allevents.sort((a: any, b: any) => Date.parse(a.event_date) - Date.parse(b.event_date));
    console.log(this.allevents)

    // Filter the data to get only the items from the current date onwards
    this.filteredData = this.allevents.filter((item: { event_date: string | number | Date; }) => new Date(item.event_date) >= this.currentDate);
    console.log(this.filteredData);  // Print the filtered data
  }

  vsevent(did: any) {
    let ids = did.target.id
    this.r.navigate(["VSevent", ids])
  }


  POSTS: any;
  page: number = 1;  //by opening which page needed to open
  count: number = 0;
  tableSize: number = 6; //how much content to show by default
  tableSizes: any = [5, 10, 15, 20];

  onTableDataChange(event: any) {
    this.page = event;
    this.ds.getguestevents()
  }

  onTableSizeChange(event: any):
    void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.ds.getguestevents()
  }
}
