import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.getCountriesAPI();
  }

  getCountriesAPI(){
    this.httpClient.get('https://restcountries.com/v3.1/all?fields=name,capital,languages,population').subscribe(res => {
      console.log(res)
    })
  }

}