import { Component } from '@angular/core';
import { CountryService, CountryByNameResponse } from "./country.service";

@Component({
  selector: 'priya-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers: [CountryService]
})
export class CountryComponent {
  countryInput: string;
  countries: CountryByNameResponse[];
  countriesByName: CountryByNameResponse[];

  constructor(
    private appService: CountryService
  ) {
    this.getAllCountries();
  }

  private getAllCountries(): void {
    let vm = this;
    this.appService.getAllCountries().subscribe(
      (successRes: CountryByNameResponse[]) => {
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
        console.log("countries==> ", success);
      }, error => {
        console.log("errorRes===> ", error);
        this.countriesByName = undefined;
      },
      () => {
        console.log("finally block");
      }
    );
  }
}
