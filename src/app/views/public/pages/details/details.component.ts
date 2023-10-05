import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Counrty, DataService } from 'src/app/core/services/data.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  country!: Counrty<string> | null;

  public constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(async (params) => {
      this.country = await this.dataService.getCountryByCode(String(params['id']));
    });
  }
}
