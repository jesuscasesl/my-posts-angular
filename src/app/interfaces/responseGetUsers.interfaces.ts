import { User } from './user.interface'

export interface ResponseGetUsers {
	users: {
		data: User[]
	};
}