import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languages'
})
export class LanguagesPipe implements PipeTransform {

  transform<LanguageKeys extends string> (input: Record<LanguageKeys, string>): string {
    let output: string[] = [];

    for(let language in input) {
      output.push(input[language]);
    }

    return output.join(', ');
  }

}
