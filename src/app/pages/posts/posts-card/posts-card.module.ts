import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostsCardComponent } from './posts-card.component';

@NgModule({
  declarations: [
    PostsCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PostsCardComponent]
})
export class PostsCardModule { }
