import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms' //validation,reactive forms
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';  //gettingtoken

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //<-----reactive forms----------->
  constructor(private fb: FormBuilder, private r: Router, private ds: DataService) {

  }

  logform = this.fb.group({
    username: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]],  //validation
    password: ['', [Validators.required, Validators.minLength(3)]]  //validation
  })

  log() {
    if (this.logform.valid) {
      this.ds.getToken(this.logform.value).then(r => r.json()) //getting token
        .then(data => {
          if (data['token']) {
            localStorage.setItem('token', data['token'])
            alert("login successfull")
            location.assign("");
          }
          else {
            alert("invalid credential")
          }
        })
    }
  }
  
  //<-----reactive forms----------->
  reg() {
    this.r.navigate(["reg"])
  }
}
