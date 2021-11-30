import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular'
import { BehaviorSubject } from 'rxjs';
import { take, tap} from 'rxjs/operators';

import { User } from 'src/app/interfaces/user.interface'
import { ResponseGetUsers } from 'src/app/interfaces/responseGetUsers.interfaces'

const QUERY_GET_USERS = gql `
  query getUsers {
    users {
      data {
        id
        name
        username
        email
        phone
      }
    }
  }
`

const QUERY_GET_USERS_BY_ID = gql `
  query getUserById($userId: ID!){
    user(id: $userId) {
      id
      name
      username
      email
      phone
    }
  }
`

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersSubject = new BehaviorSubject<User[]>([]);
  usersServ = this.usersSubject.asObservable();

  private userSubject = new BehaviorSubject<any>([]);
  userServ = this.userSubject.asObservable();

  constructor(private apollo: Apollo) { }

  getDataUser(): void {
    this.apollo.watchQuery<ResponseGetUsers>({
      query: QUERY_GET_USERS
    }).valueChanges.pipe(
      take(1),
      tap( ({ data }) => {
        this.usersSubject.next(data.users.data)
      })
    ).subscribe()
  }

  getDataUserById(id: any): void {
    this.apollo.watchQuery<any>({
      query: QUERY_GET_USERS_BY_ID,
      variables: {
        userId: id
      }
    }).valueChanges.pipe(
      take(1),
      tap( ({ data }) => {
        this.userSubject.next(data.user)
      })
    ).subscribe()
  }
}
