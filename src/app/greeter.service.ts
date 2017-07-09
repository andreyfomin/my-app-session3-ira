import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UserAlt } from "app/user-alt";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GreeterService {
  allUsers: UserAlt[] = [
    { name: 'user1', phone: 'phone1', date: new Date() },
    { name: 'user2', phone: 'phone2', date: new Date() },
    { name: 'user3', phone: 'phone3', date: new Date() },
    { name: 'user4', phone: 'phone4', date: new Date() },
    { name: 'user5', phone: 'phone5', date: new Date() },
  ];
  jsonAllUsers = '{"data":[\
    {"Name":"user1","phone":"phone1","date":"2017-07-05T09:41:49.766Z"},\
    {"Name":"user2","phone":"phone2","date":"2017-07-05T09:41:49.766Z"},\
    {"Name":"user3","phone":"phone3","date":"2017-07-05T09:41:49.766Z"},\
    {"Name":"user4","phone":"phone4","date":"2017-07-05T09:41:49.766Z"},\
    {"Name":"user5","phone":"phone5","date":"2017-07-05T09:41:49.766Z"}]}';

  getAllUsers(): UserAlt[] {
    return this.allUsers;
  }

  getAllUsersLive(): Observable<UserAlt[]> {
    // let rrr = this.http.get("https://my.server/allusers")
    //   .map(r => r.json().data);


    return Observable.interval(1000).take(1).map(r => this.jsonAllUsers)
      .map(r => JSON.parse(r).data)
      .map(r => {
        return r.map(x => ({
          name: x.Name,
          phone: x.phone,
          date: x.date
        }))
      });
  }

  getAllUsers2(): Observable<UserAlt[]> {
    let req = this.http.get("http://localhost:3000/users").map(r => <any[]>r.json())
      .map(r => {
        return r.map(x => ({
          name: x.Name,
          phone: x.phone,
          date: x.date
        }))
      });
    return req;
  }

  updateUser(id: number, newData: UserAlt) {
    return this.http.patch(`http://localhost:3000/users/${id}`, {
      Name: newData.name,
      phone: newData.phone
    });
  }

  constructor(private http: Http) { }

  getString(): string {
    return 'greeter';
  }

  getUser(): UserAlt {
    return {
      name: 'aviad',
      phone: '0538833890',
      date: new Date(),
    }
  }

  addUser(name: string, phone: string) {
    this.allUsers.push(new UserAlt(name, phone));
  }
}
