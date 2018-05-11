import {Component, OnInit} from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-nested-calls',
  templateUrl: './nested-calls.component.html'
})
export class NestedCallsComponent implements OnInit {
  colors: string[];
  users = [];
  moreColors = [];

  constructor() {
  }

  ngOnInit() {
    this.getColors();
  }

  getColors() {
    $.ajax({
      url: 'https://reqres.in/api/unknown?delay=2',
      type: "GET",
      success: (resp) => {
        this.colors = resp.data;
        this.colors.forEach(color => this.getUsers());
      }
    });
  }

  private getUsers() {
    $.ajax({
      url: 'https://reqres.in/api/users?page=3&delay=3',
      type: "GET",
      success: (resp) => {
        resp.data.map(user => user.first_name).forEach(item => {
          this.users.push(item);
          this.getMoreColors();
        });
      }
    });
  }

  private getMoreColors() {
    $.ajax({
      url: 'https://reqres.in/api/smthng?per_page=2&delay=1',
      type: "GET",
      success: (resp) => {
        this.moreColors = this.moreColors.concat(resp.data.map(color => color.name));
      }
    });
  }
}
