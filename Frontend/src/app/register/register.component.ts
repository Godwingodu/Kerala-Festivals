import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private fb: FormBuilder, private r: Router, private ds: DataService) {   if (!localStorage.getItem('foo')) { 
    localStorage.setItem('foo', 'no reload') 
    location.reload() 
  } else {
    localStorage.removeItem('foo') 
  }
  }

  regsform = this.fb.group({
    username: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]],
    password: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password2: ['', [Validators.required, Validators.minLength(3)]],
  })

  registration() {
    if (this.regsform.valid) {
      if (this.regsform.value.password == this.regsform.value.password2) {
        console.log(this.regsform.value)
        this.ds.register(this.regsform.value).then(r => r.json()).then(data => {
          alert("Registration Succesfull")
          this.r.navigate(["login"])
        })
      }
      else {
        alert("Password not same")
      }
    }
  }
}
