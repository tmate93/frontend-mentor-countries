import { Component } from '@angular/core';
import { DataService ,Counrty } from 'src/app/core/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  countries!: Counrty<string>[];
  regionList!: string[];

  constructor(private dataService: DataService) {
    this.dataService.getRegions().then((res) => { this.regionList = res});
  }

  onSearch(filter: {region: string | null, keyWords: string | null}): void {
    this.countries = [];
    let results: Counrty<string>[] = [];

    if(filter.region === "" || filter.region === null) {
      this.dataService.getCountries().then((res) => { 
        results = res 

        if(filter.keyWords === "" || filter.keyWords === null) {
          this.countries = results;
        } else {
          results.filter(country => {
            return country.name.common.toLowerCase().includes(filter.keyWords!.toLowerCase())
          }).forEach(country => {
              if (!this.countries.find(fCountry => fCountry.name === country.name))
              this.countries.push(country);
          })
        }
      });
    } else {
      this.dataService.getCountriesByRegion(filter.region).then((res) => { 
        results = res 

        if(filter.keyWords === "" || filter.keyWords === null) {
          this.countries = results;
        } else {
          results.filter(country => {
            return country.name.common.toLowerCase().includes(filter.keyWords!.toLowerCase())
          }).forEach(country => {
              if (!this.countries.find(fCountry => fCountry.name === country.name))
              this.countries.push(country);
          })
        }
      });
    }
  }

  ngOnInit() {
    this.dataService.getCountries().then((res) => {
      this.countries = res;
    });
  }
}
