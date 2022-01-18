import { Component, OnInit } from '@angular/core';
import { USERS } from '../mock-user';
import { User } from '../user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private userService: UserService) {}

  public users: User[] = [];
  public user: User = { id: 1, userName: '', age: 0 };
  selectedUser?: User;

  ngOnInit(): void {
    this.getListUsers();
  }

  private getListUsers() {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  public onAdd() {
    this.userService.addUser(this.user);
    this.user = { id: 1, userName: '', age: 0 };
    this.getListUsers();
  }

  public onDelete(id: number) {
    this.userService.deleteUser(id);
    this.userService.getUsers();
  }

  public onSelected(user: User) {
    this.selectedUser = user;
  }

  public onUpdate() {
    this.userService.updateUser(this.selectedUser!);
    this.userService.getUsers();
  }
}
