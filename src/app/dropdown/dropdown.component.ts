import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../service/countries.service';
import { HttpErrorResponse, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
 res:any[]=[];
 state:any[]=[];
 city:any[]=[];
  constructor(private countries_ser:CountriesService) { }

  ngOnInit() {
    this.getCountries();
  }

  public getCountries()
  {
    this.countries_ser.getAllCountries().subscribe((posRes)=>{
       this.res=posRes.Countries;
    },(err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
        alert("client side error");
      }else{
        alert("server side error");
      }
    });
  }
  public OnChange(CountryValue){
       this.state=this.res[CountryValue].States;
       this.city=this.state[0].Cities;

  }
  public OnStateChange(StateValue){
    this.city=this.state[StateValue].Cities;
    console.log(this.city);

  }
}
