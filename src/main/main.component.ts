import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, AfterViewInit {
  constructor(private httpClient: HttpClient) {}
  object = Object;
  searchText: string;
  displayedColumns: string[] = ['name', 'capital', 'languages', 'population'];
  dataSource = new MatTableDataSource<CountryModel>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getCountriesAPI();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getCountriesAPI() {
    this.httpClient
      .get<CountryModel[]>(
        'https://restcountries.com/v3.1/all?fields=name,capital,languages,population'
      )
      .subscribe((res) => {
        //this foreach is used to make it as a single-depth-object
        res.forEach((el: any) => {
          (el.name = el.name.official),
            (el.languages = Object.values(el.languages));
        });
        //this single-dept object is kinda required for the search pipe to work
        //you can make sure that the object you use is single-depth
        this.dataSource.data = res;
      });
  }
}
export interface CountryModel {
  capital: Array<string>;
  languages: Object;
  name: Object;
  population: number;
}
