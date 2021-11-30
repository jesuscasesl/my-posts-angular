import { Component, OnInit, Input } from '@angular/core';

import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-posts-card',
  templateUrl: './posts-card.component.html',
  styleUrls: ['./posts-card.component.css']
})
export class PostsCardComponent implements OnInit {
  @Input() post: any;
  showComments: Boolean = false;
  textBtn: String = ''

  constructor() { }

  ngOnInit(): void {
    this.textBtn = 'Show Comments';
  }

  handleClickBtn() {
    this.showComments = !this.showComments;
    this.textBtn = this.showComments ? 'Hide Comments' : 'Show Comments';
  }
}
