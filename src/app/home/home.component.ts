import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  title = "Video List";
  videoList = [
    {
      name:"1",
      slug:"1",
      embed:`WxMRykqTrIA`
    }
  ] 
    
    title2 = "Video List 02";
  videoList2 = [
    {
      name:"2",
      slug:"2",
      embed:`rVqj_AkHTlk`
    }
  ] 
   
  title3 = "Video List 03";
  videoList3 = [
    {
      name:"3",
      slug:"3",
      embed:`9DQXlRpY2qc`
    }
  ] 

  
   
  constructor(private sanitizer: DomSanitizer) { }
  
  ngOnInit(): void {
  }

  getEmbedUrl(item){
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+ item.embed + '?ecver=2');
  }
  
}
