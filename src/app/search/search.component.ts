import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  constructor(private http: HttpClient) {}

  locationList: any[] = [];
  ngOnInit() {}

  getCityLocation(cityname) {
    var url =
      "http://www.datasciencetoolkit.org/maps/api/geocode/json?sensor=false&address=";
    var city_url = url.concat(cityname.value);
    alert(city_url);
    this.http.get(url).subscribe(response => {
      this.locationList = response as string[];
    });
  }
}
