import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {YeOldeJavascriptComponent} from './chapter-1/ye-olde-javascript/ye-olde-javascript.component';
import {StartComponent} from "./start/start.component";
import {NestedCallsComponent} from "./chapter-1/nested-calls/nested-calls.component";
import {PromisesComponent} from "./chapter-1/promises/promises.component";
import {FunctionalProgrammingCharacteristicsComponent} from "./chapter-2/functional-programming-characteristics/functional-programming-characteristics";
import {CreatingObservablesComponent} from "./chapter-2/creating-observables/creating-observables";

const routes = [
  {
    path: 'chapter-1/ye-olde-javascript',
    component: YeOldeJavascriptComponent
  },
  {
    path: 'chapter-1/nested-calls',
    component: NestedCallsComponent
  },
  {
    path: 'chapter-1/promises',
    component: PromisesComponent
  },
  {
    path: 'chapter-2/functional-programming-characteristics',
    component: FunctionalProgrammingCharacteristicsComponent
  },  {
    path: 'chapter-2/creating-observables',
    component: CreatingObservablesComponent
  },
  {
    path: '**',
    component: StartComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: []
})
export class RoutingModule {

}
