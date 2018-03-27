import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './services';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [],
  providers: [HttpService],
  exports: [FormsModule, MaterialModule]
})
export class CoreModule { }
