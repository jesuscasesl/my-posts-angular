import { DOCUMENT } from '@angular/common';
import { Component, OnInit, HostListener, Inject } from '@angular/core';

import { PostsService } from 'src/app/services/posts/posts.service';
import { MsgService } from 'src/app/services/msg/msg.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  showButton = false;
  posts: any;
  postAux = []

  private scrollHeight = 450;
  private pageNum = 1;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    const data = this.postsService.getDataPost()
    data.then((response: any) => {
      this.posts = response
      this.postAux = response
    })
  }

  handleChanged(e: any){
    const filter = e.currentTarget.value;
    const newData = this.postAux.filter( (post: any) => post.user.name.toLowerCase().includes(filter.toLowerCase()) )
    this.posts = newData
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const yOffSet = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showButton = (yOffSet || scrollTop) > this.scrollHeight;
  }

  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

  onScrollDown(): void {
    this.pageNum++;

    const data = this.postsService.getPostsByPage(this.pageNum);
    data.then((response: any) => {
      this.posts = [...this.postAux, ...response]
      this.postAux = this.posts
    })
  }
}
