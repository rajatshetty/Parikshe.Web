import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule,
    MatListModule,
    MatProgressBarModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule
  ],
  declarations: [],
  exports: [MatButtonModule, MatProgressBarModule, MatCheckboxModule, MatIconModule, MatListModule, MatToolbarModule
    , MatFormFieldModule, MatSelectModule, MatInputModule, MatCardModule]
})
export class MaterialModule { }
