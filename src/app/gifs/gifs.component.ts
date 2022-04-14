import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {
  title = 'gifySite';
  link="https://api.giphy.com/v1/gifs/search?api_key=5ZVOk6wXmIMBpLgT0EH7U8AHhnscJRuU&q=";
  gifs:any=[];
  constructor( private dataService: DataService) { }

  ngOnInit(): void {
  }
    
  performSearch(searchTerm: HTMLInputElement){
    console.log(searchTerm.value);
    
    console.log("Button CLick is working");
    this.dataService.getImage(this.link+ searchTerm.value).subscribe((res:any)=>{
      if(res){
        this.gifs.push(res);
        this.gifs=this.gifs[0].data        
        
        

      }
    })
  }

}
