import { Component } from '@angular/core';
import { CountryService, CountryByNameResponse } from "./country.service";

@Component({
  selector: 'priya-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers: [CountryService]
})
export class CountryComponent {
  testInput: string;
  countries: any;
  countriesByName: any;

  constructor(
    private appService: CountryService
  ) {
    this.getCountries();
  }

  private getCountries(): void {
    let vm = this;
    this.appService.getCountries().subscribe(
      successRes => {
        console.log("countries==> ", successRes);
        vm.countries = successRes;
      },
      errorRes => {
        console.log("errorRes===> ", errorRes);
        vm.countries = undefined;
      },
      () => {
        console.log("finally block");
      }
    );
  }

  getCountriesByName(countryName?: string): void {
    this.appService.getCountriesByName(countryName).subscribe(
      (success: CountryByNameResponse[]) => {
        this.countriesByName = success;
      }, error => {
        this.countriesByName = undefined;
      }
    );
  }
}
