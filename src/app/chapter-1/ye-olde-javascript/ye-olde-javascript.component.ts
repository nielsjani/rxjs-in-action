import { Component, OnInit } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-ye-olde-javascript',
  templateUrl: './ye-olde-javascript.component.html'
})
export class YeOldeJavascriptComponent implements OnInit {
  colors: string[];
  sum: number;

  constructor() { }

  ngOnInit() {
    $.ajax({
      url: 'https://reqres.in/api/unknown?delay=2',
      type: "GET",
      success: (resp) => this.colors = resp.data.map(color => color.name)
    });
    this.sum = 2 * 4 * 8;
  }
}
