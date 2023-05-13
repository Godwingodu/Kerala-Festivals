import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {

  addeventform: FormGroup;
  selectedFile: '' = "";

  constructor(private fb: FormBuilder, private r: Router, private ds: DataService) {
    this.addeventform = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ]")]],
      place: ['', [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ]")]],
      event_date: ['', Validators.required],
      description: ['', Validators.nullValidator],
      pic: ['', Validators.nullValidator],
    })
  }

  onFileChange(e: any) {
    this.selectedFile = e.target.files[0];
  }

  addevent() {
    const formData = new FormData();
    formData.append('name', this.addeventform.value.name);
    formData.append('place', this.addeventform.value.place);
    formData.append('event_date', this.addeventform.value.event_date);
    formData.append('description', this.addeventform.value.description);
    formData.append('pic', this.selectedFile);

    this.ds.addevents(formData).then(res => {
      console.log(res);
      alert("course added successfully")
      this.r.navigate([''])
    })
      .catch(error => {
        console.error(error);
        alert("event not added");
      });
  }

  ngOnInit(): void {
    this.authentication()
  }

  authentication() {
    var token = localStorage.getItem("token")
    if (token = "") {
      this.r.navigate(['login'])
    }
  }

}

