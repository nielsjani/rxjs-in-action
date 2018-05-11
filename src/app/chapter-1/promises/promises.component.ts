import {Component, OnInit} from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html'
})
export class PromisesComponent implements OnInit {
  colors: string[];
  users = [];
  moreColors = [];

  constructor() {
  }

  ngOnInit() {
    this.getColors()
      .then(colors => this.mapColors(colors))
      .then(promises => Promise.all(promises))
      .then(users => this.mapUsers(users))
      .then(promises => Promise.all(promises))
      .then(colors => this.mapMoreColors(colors))
    ;
  }

  private mapColors(colorsResp) {
    this.colors = colorsResp.data;
    return this.colors.map( () => this.getUsers());
  }

  private mapUsers(usersList) {
    usersList.forEach(users => users.data.map(user => user.first_name).forEach(item => this.users.push(item)));
    return this.users.map(() => this.getMoreColors());
  }


  mapMoreColors(colorsList) {
    colorsList.forEach(colors => this.moreColors = this.moreColors.concat(colors.data.map(color => color.name)));
  }

  private getColors(): Promise<any> {
    return $.ajax('https://reqres.in/api/unknown?delay=2');
  }

  private getUsers() {
    return $.ajax('https://reqres.in/api/users?page=3&delay=3');
  }

  private getMoreColors() {
    return $.ajax('https://reqres.in/api/smthng?per_page=2&delay=1');
  }
}
