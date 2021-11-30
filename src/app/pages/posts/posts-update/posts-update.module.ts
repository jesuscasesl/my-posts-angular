import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsUpdateRoutingModule } from './posts-update-routing.module';
import { PostsUpdateComponent } from './posts-update.component';

import { FormModule } from 'src/app/components/shared/form/form.module';


@NgModule({
  declarations: [
    PostsUpdateComponent
  ],
  imports: [
    CommonModule,
    PostsUpdateRoutingModule,
    FormModule
  ]
})
export class PostsUpdateModule { }
