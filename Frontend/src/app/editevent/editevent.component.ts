import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editevent',
  templateUrl: './editevent.component.html',
  styleUrls: ['./editevent.component.css']
})
export class EditeventComponent implements OnInit{
currentvalue:any;
  editeventform:FormGroup;
  selectedFile: ''="";
  pid:any=""
  specificevent:any=[]

   constructor(private fb:FormBuilder,private r:Router,private ar:ActivatedRoute,private ds:DataService )
   {
    this.ar.params.subscribe(data=>this.pid=data["id"])
    this.editeventform=this.fb.group({
      name:['',[Validators.required,Validators.pattern(".*\\S.*[a-zA-z0-9 ]")]],
      place:['',[Validators.required,Validators.pattern(".*\\S.*[a-zA-z0-9 ]")]],
      event_date:['',Validators.required],
      description:['',Validators.nullValidator],
      pic:['',Validators.nullValidator],
    })
   } 
  
   onFileChange(e:any){
    this.selectedFile=e.target.files[0];
  }
   
  editevent()
{
  const formData =new FormData();
  formData.append('name',this.editeventform.value.name);
  formData.append('place',this.editeventform.value.place);
  formData.append('event_date',this.editeventform.value.event_date);
  formData.append('description',this.editeventform.value.description);
  formData.append('pic',this.selectedFile);

  this.ds.editevents(formData,this.pid).then(res=>{
    console.log(res);
    alert("Event Updated successfully")
    this.r.navigate(['mgviewallevents'])
  })
  .catch(error=>{
    console.error(error);
    alert("event not added");
  });

}

  ngOnInit():
  void
  {
    this.ds.getspecificevents(this.pid).then(r=>r.json()).then(data=>this.getdata(data))
    this.authentication()
  }
  
  getdata(d:any){
    this.specificevent=d
  }
  
  authentication()
  {
    var token=localStorage.getItem("token")
    if(token="")
    {
  this.r.navigate(['login'])  }
  }
  }
  