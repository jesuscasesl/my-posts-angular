import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsCreateRoutingModule } from './posts-create-routing.module';
import { PostsCreateComponent } from './posts-create.component';

import { FormModule } from 'src/app/components/shared/form/form.module';

@NgModule({
  declarations: [
    PostsCreateComponent
  ],
  imports: [
    CommonModule,
    PostsCreateRoutingModule,
    FormModule
  ]
})
export class PostsCreateModule { }
