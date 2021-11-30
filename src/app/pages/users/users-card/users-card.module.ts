import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsersCardComponent } from './users-card.component';

@NgModule({
  declarations: [
    UsersCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [UsersCardComponent]
})
export class UsersCardModule { }
