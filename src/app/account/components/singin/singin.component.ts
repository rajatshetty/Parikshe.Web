import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services';
import 'rxjs/add/operator/finally';
import { Router } from '@angular/router';
@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
  isLoading: boolean;
  email: string;
  password: string;
  message: string;
  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.isLoading = true;
    this.accountService.login(this.email, this.password)
      .finally(() => this.isLoading = false)
      .subscribe((result: any) => {
        sessionStorage.setItem('token', result.access_token);
        this.router.navigate(['./dashboard']);
        console.log(result);
      },
      error => console.log(JSON.stringify(error))
      );
  }
}
