import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsDetailsRoutingModule } from './posts-details-routing.module';
import { PostsDetailsComponent } from './posts-details.component';

import { PostsCardModule } from 'src/app/pages/posts/posts-card/posts-card.module';


@NgModule({
  declarations: [
    PostsDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsDetailsRoutingModule,
    PostsCardModule
  ]
})
export class PostsDetailsModule { }
