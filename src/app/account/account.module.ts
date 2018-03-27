import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinginComponent, SignupComponent } from './components';
import { RouterModule } from '@angular/router';
import { routes } from './account.routes';
import { AccountService } from './services';
import { CoreModule } from '../core';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SinginComponent, SignupComponent],
  providers: [AccountService]
})
export class AccountModule { }
