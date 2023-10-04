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

  public async onSearch(filter: {region: string | null, keyWords: string | null}): Promise<void> {
    const results = filter.region
      ? await this.dataService.getCountriesByRegion(filter.region)
      : await this.dataService.getCountries();

    if (filter.keyWords === "" || filter.keyWords === null) {
      this.countries = results;
    } else {
      this.countries = results
        .filter(country => country.name.common.toLowerCase().includes(filter.keyWords!.toLowerCase()))
        .filter(country => !this.countries.find(fCountry => fCountry.name === country.name))
    }
  }

  ngOnInit() {
    this.dataService.getCountries().then((res) => {
      this.countries = res;
    });
  }
}
