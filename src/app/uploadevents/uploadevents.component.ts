import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-uploadevents',
  templateUrl: './uploadevents.component.html',
  styleUrls: ['./uploadevents.component.css']
})
export class UploadeventsComponent implements OnInit {
  url="";
  
  onselectFile(e){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
