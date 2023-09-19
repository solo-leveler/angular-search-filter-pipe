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
  displayedColumns: string[] = ['Capital', 'Languages', 'Name', 'Population'];
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
        this.dataSource.data = res;
        console.log(this.dataSource.data);
      });
  }
}
export interface CountryModel {
  capital: Array<string>;
  languages: Object;
  name: Object;
  population: number;
}
