import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nativeName'
})
export class NativeNamePipe implements PipeTransform {

  transform<LanguageKeys extends string> (input: Record<LanguageKeys, { common: string; official: string;}>): string {
    let output: string[] = [];

    for(let language in input) {
      output.push(input[language].common);
    }

    return output[0];
  }

}
