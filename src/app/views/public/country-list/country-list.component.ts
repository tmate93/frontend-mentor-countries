import { Component, Input } from '@angular/core';
import { Counrty } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent {
  @Input() countries!: Counrty<string>[];
}
