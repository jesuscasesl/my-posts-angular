import { Component, OnInit } from '@angular/core';

import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts = this.postsService.postsServ

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getDataPost()
    // this.postsService.getDataPostById(1)

    // const input = {
    //   title: 'hola',
    //   body: 'adios'
    // }
    // this.postsService.createPost(input)
    // this.postsService.updatePost(2, input)
  }

}
