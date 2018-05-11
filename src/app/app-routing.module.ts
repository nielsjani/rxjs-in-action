import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {YeOldeJavascriptComponent} from './chapter-1/ye-olde-javascript/ye-olde-javascript.component';
import {StartComponent} from "./start/start.component";
import {NestedCallsComponent} from "./chapter-1/nested-calls/nested-calls.component";
import {PromisesComponent} from "./chapter-1/promises/promises.component";

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
