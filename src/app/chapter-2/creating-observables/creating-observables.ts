import {Component, OnInit} from "@angular/core";

import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-creating-observables',
  templateUrl: './creating-observables.html'
})
export class CreatingObservablesComponent implements OnInit {

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.singleSynchronous();
    this.multiSynchronous();
    this.singleAsync();
    this.multiAsync();
  }

  /*
   Wrap the value in an observable, then double it and log it to console
   */
  private singleSynchronous() {
    const value = 21;
  }


  /*
   Wrap the values in an observable, then double each value and make the sum of them. Log the sum to console
   */
  private multiSynchronous() {
    const values = [2, 15, 4];
  }

  /*
   Make a rest call, then concat the data.first_name and data.last_name fields and log it to console
   */
  private singleAsync() {
    const url = "https://reqres.in/api/users/2";
    this.httpClient.get(url);
  }


  /*
   Listen to all clicks on the 'theDiv' html element and log on which of the three p-tags the user clicked
   Hint: toElement.innerText
   */
  private multiAsync() {
    const query = document.querySelector("#theDiv");
  }
}
