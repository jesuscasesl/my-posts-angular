import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css']
})
export class PostsCreateComponent implements OnInit {
  type: string = "create"
  post: any = {title: '', body: ''}

  constructor() { }

  ngOnInit(): void {}
}
