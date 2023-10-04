import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencies'
})
export class CurrenciesPipe implements PipeTransform {

  transform(input: Record<string, { name: string; symbol: string;}>): string {
    let output: string[] = [];

    for(let currency in input) {
      output.push(input[currency].name);
    }

    return output.join(', ');
  }

}
