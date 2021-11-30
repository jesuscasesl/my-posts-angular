import { Post } from './post.interface'

export interface ResponseGetPosts {
	posts: {
		data: Post[]
	};
}