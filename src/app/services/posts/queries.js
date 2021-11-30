import { gql } from "@apollo/client";

export const getPostsQuery = `
query getPosts {
	posts {
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

export const getPostByIdQuery = gql`
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
}`