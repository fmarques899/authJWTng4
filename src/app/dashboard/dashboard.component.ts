import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.fetch().subscribe(response=>{
      console.log(response);      
    })
  }

  logout() {
    this.userService.logout()
  }
}
