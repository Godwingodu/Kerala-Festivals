import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-subscribeduser',
  templateUrl: './subscribeduser.component.html',
  styleUrls: ['./subscribeduser.component.css']
})
export class SubscribeduserComponent {
  constructor(private fb:FormBuilder,private r:Router,private ds:DataService)
  {
  }
  
  subscribeduserform=this.fb.group({
    name:['',[Validators.required,Validators.pattern("[a-zA-Z]+")]],
    email:['',[Validators.required,Validators.email]],
  })
  
  subscribeduser()
  {
    if(this.subscribeduserform.valid)
    {
        console.log(this.subscribeduserform.value)
        this.ds.subscribeduser(this.subscribeduserform.value).then(r=>r.json()).then(data=>{
        alert("Submitted Succesfull")
        location.reload()
      })    
    } 
  }
  }
  