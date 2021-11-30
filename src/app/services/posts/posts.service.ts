import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular'
import { BehaviorSubject } from 'rxjs';
import { take, tap, pluck, withLatestFrom } from 'rxjs/operators';

import { Post } from 'src/app/interfaces/post.interface'
import { ResponseGetPosts } from 'src/app/interfaces/responseGetPosts.interfaces'

const QUERY_GET_POSTS = gql `
  query getPosts {
    posts (options: { paginate: { page:1, limit: 10}}) {
      data {
        id
        title
        body
        user {
          id
          name
          username
          email
          phone
        }
        comments {
          data {
            id
            name
            email
            body
          }
        }
      }
    }
  }
`

const QUERY_GET_POSTS_BY_ID = gql `
  query getPostById($postId: ID!){
    post(id: $postId) {
      id
      title
      body
      user {
        id
        name
        username
        email
        phone
      }
      comments {
        data {
          id
          name
          email
          body
        }
      }
    }
  }
`

const QUERY_CREATE_POSTS = gql`
mutation createPost (
  $input: CreatePostInput!
) {
  createPost(input: $input) {
    id
    title
    body
  }
}`

const QUERY_UPDATE_POSTS = gql`
mutation updatePost(
  $id: ID!,
  $input: UpdatePostInput!
) {
  updatePost(id: $id, input: $input) {
    id
    title
    body
  }
}`

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private postsSubject = new BehaviorSubject<Post[]>([]);
  postsServ = this.postsSubject.asObservable();

  private postSubject = new BehaviorSubject<any>([]);
  postServ = this.postSubject.asObservable();

  constructor(private apollo: Apollo) { }

  async getDataPost()  {
    let responsess: any = [];

    await this.apollo.watchQuery<ResponseGetPosts>({
      query: QUERY_GET_POSTS
    }).valueChanges.pipe(
      take(1),
      tap( ({ data }) => {
        // this.postsSubject.next(data.posts.data)
        responsess = data.posts.data;
      })
    ).toPromise();

    return responsess;
  }

  async getDataPostById(id: any) {
    let responsess: any = {};
    await this.apollo.watchQuery<any>({
      query: QUERY_GET_POSTS_BY_ID,
      variables: {
        postId: id
      }
    }).valueChanges.pipe(
      take(1),
      tap( ({ data }) => {
        responsess = data.post
      })
    ).toPromise()

    return responsess;
  }

  async createPost(input: any) {
    let responsess: any = {};

    await this.apollo.mutate<any>({
      mutation: QUERY_CREATE_POSTS,
      variables: {
        input: input
      }
    }).subscribe(({ data }) => {
      responsess = data
    },(error) => {
      console.log('there was an error sending the query', error);
    })

    return responsess;
  }

  async updatePost(id: any, input: any) {
    let responsess: any = {};

    await this.apollo.mutate<any>({
      mutation: QUERY_UPDATE_POSTS,
      variables: {
        input: input,
        id: id
      }
    }).subscribe(({ data }) => {
      responsess = data
    },(error) => {
      console.log('there was an error sending the query', error);
    })

    return responsess;
  }

  async getPostsByPage(pageNum: number) {
    let responsess: any = [];
    const QUERY_BY_PAGE = gql`{
      posts (options: { paginate: { page: ${pageNum}, limit: 10}}) {
        data {
          id
          title
          body
          user {
            id
            name
            username
            email
            phone
          }
          comments {
            data {
              id
              name
              email
              body
            }
          }
        }
      }
    }`;

    await this.apollo.watchQuery<any>({
      query: QUERY_BY_PAGE
    }).valueChanges.pipe(
      take(1),
      pluck('data', 'posts'),
      withLatestFrom(this.postsServ),
      tap(([apiResponse, posts]) => {
        responsess = apiResponse.data
      })
    ).toPromise();

    return responsess;
  }
}
