import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.css']
})
export class PostsDetailsComponent implements OnInit {
  id: any
  post: any

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    const data = this.postsService.getDataPostById(this.id)
    data.then((response: any) => {
      this.post = response
    })
  }
}
