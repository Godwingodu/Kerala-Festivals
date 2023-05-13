import { Component,Renderer2 } from '@angular/core';
import { DataService } from '../services/data.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  datas: any = []
  searchText: any;

  constructor(private ds: DataService) {
  }

  ngOnInit():
    void {
    this.ds.booking().then(r => r.json()).then(data => this.getdata(data))
  }
  getdata(data: any) {
  this.datas = data
  console.log(this.datas)
  }
}
