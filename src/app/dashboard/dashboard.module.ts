import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components';
import { RouterModule } from '@angular/router';
import { routes } from './dashboard.routes';
import { CoreModule } from '../core/index';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
