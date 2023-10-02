import { Component, Input } from '@angular/core';
import { Counrty, DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent {
  @Input() countries!: Counrty<string>[];
  test!: Counrty<string> | null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCountries().then((res) => {
      this.countries = res;
    });
    this.dataService.getCountryByCode(348).then((res) => {
      this.test = res;
    });
  }
}
