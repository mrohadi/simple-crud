import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USERS } from '../mock-user';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public listUsers: User[] = USERS;

  /**
   * Get All users from web servers
   * This should fetch data from web server
   * @returns All Users
   */
  public getUsers(): Observable<User[]> {
    const users = of(this.listUsers);
    return users;
  }

  /**
   * Add new user to data base
   * @param user User object to add
   */
  public addUser(user: User): void {
    this.listUsers.push(user);
  }

  /**
   * Delete user from data base
   * @param id of user
   */
  public deleteUser(id: number): void {
    let index = this.listUsers.findIndex((x) => x.id == id);
    let users = this.listUsers.splice(index, 1);
    users.forEach((user) => {
      console.log(user.userName);
    });
  }

  /**
   * Update user
   * @param user User object to update
   */
  public updateUser(user: User): void {
    let index = this.listUsers.findIndex((x) => x.id == user.id);
    this.listUsers[index].userName = user.userName;
    this.listUsers[index].age = user.age;
  }
}
