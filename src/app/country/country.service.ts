import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CountryByNameResponse {
    name: string,
    alpha2Code: string,
    alpha3Code: string,
    capital: string,
    region: string,
    subregion: string,
    population: number
}

@Injectable()
export class CountryService {

    constructor(
        private http: HttpClient
    ) { }

    getAllCountries(): Observable<CountryByNameResponse[]> {
        return this.http.get("https://restcountries.eu/rest/v2/alpha?codes=col;no;ee") as Observable<CountryByNameResponse[]>;;
    }

    getCountriesByName(countryName?: string): Observable<CountryByNameResponse[]> {//optional field
        let url: string = "https://restcountries.eu/rest/v2/name/" + countryName;
        return this.http.get(url) as Observable<CountryByNameResponse[]>;
    }
}