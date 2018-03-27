import { Injectable } from '@angular/core';
import { HttpService } from '../../core';

@Injectable()
export class AccountService {

  constructor(private httpService: HttpService) { }

  public login(email: string, password: string) {
    const data = {
      'email': email,
      'password': password
    };
    return this.httpService.postdata('account/signin', data);
  }

}
