import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'selenium-webdriver';
import { Car } from './model/car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // cars: Car[];

  // constructor(private http: HttpCoreService) {

  // }

  // ngOnInit() {
  //   this.http.getdata('cars').subscribe((cars: Car[]) => {
  //     this.cars = cars;
  //     console.log(this.cars);
  //   });
  // }

  // add() {
  //   const body = {
  //     brand: 'jeep', color: 'grey', modal: 'compass', number: 100
  //   } as Car;
  //   this.http.postdata('cars', body).subscribe((result) => {
  //     console.log(result);
  //   });
  // }

}
