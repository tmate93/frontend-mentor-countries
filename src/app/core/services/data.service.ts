import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  API_URL = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) {}

  getCountries(): Promise<Counrty<string>[]> {
    return firstValueFrom(this.http.get<Counrty<string>[]>(`${this.API_URL}/all`));
  }

  getCountryByName(name: string): Promise<Counrty<string>[]> {
    return firstValueFrom(this.http.get<Counrty<string>[]>(`${this.API_URL}/name/${name}`));
  }

  getCountryByCode(code: number): Promise<Counrty<string>> {
    return firstValueFrom(this.http.get<Counrty<string>[]>(`${this.API_URL}/alpha/${code}`)).then(data => {return data[0]});
  }
}


export interface Counrty<LanguageKeys extends string> {
  name: {
    common: string;
    official: string;
    nativeName: Record<LanguageKeys, {
      common: string;
      official: string;
    }>;
  };
  tld: string;
  currencies: Record<string, {
    name: string;
    symbol: string;
  }>;
  capital: string;
  region: string;
  subRegion: string;
  languages: Record<LanguageKeys, string>;
  borders: string[];
  population: number;
  flags: Record<string, string>;
}