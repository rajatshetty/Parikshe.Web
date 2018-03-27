import { Component, OnInit } from '@angular/core';
// import { HttpCoreService } from '../../services/http-core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // userName: string;
  // password: string;
  // message: string;
  // isLoading = false;
  // constructor(private http: HttpCoreService, private route: Router) { }

  // ngOnInit() {
  // }

  // onSubmit() {
  //   const data = {
  //     'userName': this.userName,
  //     'password': this.password
  //   };
  //   this.isLoading = true;
  //   this.http.getdata('auth/authorized')
  //     .finally(() => this.isLoading = false)
  //     .subscribe((result) => {
  //       console.log(result);
  //       this.route.navigate(['/dashboard']);
  //     },
  //     error => this.message = 'unathorized'
  //     );
  // }
}
