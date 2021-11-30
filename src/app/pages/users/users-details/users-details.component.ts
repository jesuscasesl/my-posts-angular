import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  id: any
  user = this.usersService.userServ

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.usersService.getDataUserById(this.id)
  }
}
