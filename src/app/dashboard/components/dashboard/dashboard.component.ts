import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../core/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    return this.httpService.getdata('api/cars').subscribe((result: any) => {
      console.log(result);
    });
  }

}
