import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../api.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
//the dashboard is the app component that contains both editUser and userList and userListItem its the parent of all those components
export class DashboardComponent implements OnInit {

  addUser;
  public userList:any = [];
  constructor(private Auth:AuthService, private api:DataService) {}
  show=this.Auth.show
  
  ngOnInit() {
    this.userList = this.api.returnList();
    return this.api.returnUsers();

  }
 
  addOutPutFunc(event:{}): void {
    this.addUser = {
      name:event
    }
    this.userList.unshift(this.addUser);
  }
  removeUserFunc=(): void=> {
    this.userList.shift();
}

}