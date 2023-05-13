import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-expiredevents',
  templateUrl: './expiredevents.component.html',
  styleUrls: ['./expiredevents.component.css']
})
export class ExpiredeventsComponent implements OnInit{

  allevents: any = []
  searchText: any;
  filteredData:any=[]
  currentDate = new Date();      // Get the current date
  constructor(private ds: DataService, private r: Router) {
  }

  ngOnInit():
    void {
    this.authentication()
    this.ds.getevents().then(r => r.json()).then(data => this.getdata(data))
  }

  getdata(data: any) {
    this.allevents = data
    this.allevents.sort((a: any, b: any) => Date.parse(a.event_date) - Date.parse(b.event_date));
    console.log(this.allevents)
    // Filter the data to get only the items from the current date onwards
  this.filteredData= this.allevents.filter((item: { event_date: string | number | Date; })=> this.currentDate >=new Date(item.event_date));
  console.log(this.filteredData);  // Print the filtered data
  }

  deleteevent(id: any) {
    this.ds.deleteevents(id)
    alert("Event deleted succesfully")
    location.reload()
  }

  editevent(id: any) {
    this.r.navigate(["editevent", id])
  }

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  tableSizes: any = [5, 10, 15, 20];

  onTableDataChange(event: any) {
    this.page = event;
    this.ds.getevents()
  }

  onTableSizeChange(event: any):
    void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.ds.getevents()
  }

  authentication() {

    var token = localStorage.getItem('token');
    if (token = "") {
      this.r.navigate(['login'])
    }
  }
}