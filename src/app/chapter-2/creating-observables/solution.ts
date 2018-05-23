import 'rxjs/add/observable/of';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/reduce';


class SolutionCreatingObservables {

  constructor(private httpClient: HttpClient) {
  }


  /*
   Wrap the value in an observable, then double it and log it to console
   */
  private singleSynchronous() {
    const value = 21;
    Observable.of(value)
      .subscribe(res => console.log(res * 2));
  }


  /*
   Wrap the values in an observable, then double each value and make the sum of them. Log the sum to console
   */
  private multiSynchronous() {
    const values = [2, 15, 4];
    Observable.from(values)
      .map(res => res * 2)
      .reduce((res1, res2) => res1 + res2)
      .subscribe(res => console.log(res));
  }

  /*
   Make a rest call, then concat the data.first_name and data.last_name fields and log it to console
   */
  private singleAsync() {
    const url = "https://reqres.in/api/users/2";
    this.httpClient.get(url)
      .map((person: any) => person.data.first_name + " " + person.data.last_name)
      .subscribe(name => console.log(name));
  }


  /*
   Listen to all clicks on the 'theDiv' html element and log on which of the three p-tags the user clicked
   Hint: toElement.innerText
   */
  private multiAsync() {
    const query = document.querySelector("#theDiv");
    Observable.fromEvent(query, 'click')
      .map((click: any) => click.toElement.innerText)
      .subscribe(name => console.log(name));
  }

  /*
   Handle this observable. Log its contents to console. In case of an error, log 'is'. When the observable completes, log 'you!'
   */
  private theFifthOne() {
    const fifth$ = Observable.create(observer => {
      observer.next('a');
      observer.next('winner');
      observer.error(('ARGGH'));
      observer.complete();
    });

    fifth$
      .catch(err => {
        console.log('is');
        return Observable.empty();
      })
      .subscribe(
        res => console.log(res),
        error => console.log('Wont be reached'),
        () => console.log('you!')
      );
  }
}
