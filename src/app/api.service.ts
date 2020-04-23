import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
// import { map } from 'rxjs/operators';

//takes api from jsonPlaceholder and displays it dashboard component
@Injectable({
  providedIn: "root"
})

export class DataService {
  userList;
  user;
  userApi = "https://jsonplaceholder.typicode.com/users/1";
  apiUrl = "https://jsonplaceholder.typicode.com/users";
  data:any={};
  constructor(private http: HttpClient) {
}

  getUsers() {
    return this.http.get(this.apiUrl);
  }
  returnUsers() {
    return this.getUsers().subscribe(data => (this.userList = data));
  }
  returnList() {
    return this.userList;
  }

}
