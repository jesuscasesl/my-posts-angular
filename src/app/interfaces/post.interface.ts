import { User } from './user.interface'
import { Comment } from './comment.interface'

export interface Post {
	id: number;
	title: string;
	body: string;
	user: User;
	comments: Comment;
}