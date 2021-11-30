import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersDetailsRoutingModule } from './users-details-routing.module';
import { UsersDetailsComponent } from './users-details.component';

import { UsersCardModule } from 'src/app/pages/users/users-card/users-card.module';

@NgModule({
  declarations: [
    UsersDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersDetailsRoutingModule,
    UsersCardModule
  ]
})
export class UsersDetailsModule { }
