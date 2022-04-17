import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {
  title = 'gifySite';
  link = "https://api.giphy.com/v1/gifs/search?api_key=5ZVOk6wXmIMBpLgT0EH7U8AHhnscJRuU&limit=20&q=";
  gifs: any = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getImage("https://api.giphy.com/v1/gifs/trending?api_key=5ZVOk6wXmIMBpLgT0EH7U8AHhnscJRuU").subscribe((res: any) => {
      if (res){
        console.log(res);
        this.gifs.push(res);
        this.gifs = this.gifs[0].data

      }
    })

  }

  performSearch(searchTerm: any, loginForm: any) {
    this.gifs=[];
    console.log(searchTerm.value);

    console.log("Button CLick is working");
    this.dataService.getImage(this.link + searchTerm.value).subscribe((res: any) => {
      if (res) {
        console.log(res);
        
        this.gifs.push(res);
        this.gifs = this.gifs[0].data

      }
    });
    loginForm.reset();

  }

}
