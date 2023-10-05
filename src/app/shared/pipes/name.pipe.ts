import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService, Counrty } from 'src/app/core/services/data.service';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {
  output?: string;

  constructor(private dataService: DataService) {}

  async transform(input: string): Promise<string | undefined> {
    let country: Counrty<string> | null;
    country = await this.dataService.getCountryByCode(input);
    this.output = country?.name.common;
    
    return this.output;
  }

}
