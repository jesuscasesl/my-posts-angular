import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { PostsListRoutingModule } from './posts-list-routing.module';
import { PostsListComponent } from './posts-list.component';

import { PostsCardModule } from 'src/app/pages/posts/posts-card/posts-card.module';

@NgModule({
  declarations: [
    PostsListComponent
  ],
  imports: [
    CommonModule,
    PostsListRoutingModule,
    PostsCardModule,
    InfiniteScrollModule,
  ]
})
export class PostsListModule { }
