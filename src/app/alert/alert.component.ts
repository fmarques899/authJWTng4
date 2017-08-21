import { Component, OnInit } from '@angular/core';

import { AlertService } from '../services/index'

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  message : any;
  all : any

  constructor(
    private alert : AlertService
  ) { }

  ngOnInit() {
    this.alert.getMessage().subscribe(message=>{this.message = message})
    this.alert.getMessageALL().subscribe(message=>{ this.all = message})
  }

}
