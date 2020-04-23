import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})

/**
 * @single user component takes the singleUserUrl from api service and takes the single user which is clicked
 * depending on the id the user is clicked has.
 */
export class SingleUserComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {

  }

}

