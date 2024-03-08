import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  rooms: any[];
  carParking: any;
  rent: any;
  title: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('assets/data.json').subscribe(data => {
      this.rooms = data.rooms;
      this.carParking = data.car_parking;
      this.rent = data.rent;
    });
  }
}
