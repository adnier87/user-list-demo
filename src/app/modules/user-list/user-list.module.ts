import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

import { UserListComponent } from './components/user-list/user-list.component';
import { UserFilterPipe } from './pipes/user-filter.pipe';
import { UserSortPipe } from './pipes/user-sort.pipe';



@NgModule({
  declarations: [
    UserListComponent,
    UserFilterPipe,
    UserSortPipe
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule
  ],
  exports: [
    UserListComponent
  ]
})
export class UserListModule { }
