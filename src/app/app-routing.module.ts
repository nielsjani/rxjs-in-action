import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {YeOldeJavascriptComponent} from './chapter-1/ye-olde-javascript/ye-olde-javascript.component';
import {StartComponent} from "./start/start.component";
import {NestedCallsComponent} from "./chapter-1/nested-calls/nested-calls.component";
import {PromisesComponent} from "./chapter-1/promises/promises.component";
import {FunctionalProgrammingCharacteristicsComponent} from "./chapter-2/functional-programming-characteristics/functional-programming-characteristics";
import {CreatingObservablesComponent} from "./chapter-2/creating-observables/creating-observables";
import {UnsubscribingComponent} from "./chapter-3/unsubscribing/unsubscribing";
import {OperatorsComponent} from "./chapter-3/operators/operators";
import {Operators2Component} from "./chapter-3/operators-2/operators-2";
import {WeightCalculationComponent} from "./chapter-6/a-weight-calculation/weight-calculation";
import {CartLoadingComponent} from "./chapter-6/b-cart-loading/cart-loading";
import {SellingGemsComponent} from "./chapter-6/c-selling-gems/selling-gems";
import {NighttimeComponent} from "./chapter-6/d-nighttime/nighttime";
import {NightclubComponent} from "./chapter-6/e-nightclub/nightclub";

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
    path: 'chapter-3/unsubscribing',
    component: UnsubscribingComponent
  },
  {
    path: 'chapter-3/operators',
    component: OperatorsComponent
  },
  {
    path: 'chapter-3/operators-2',
    component: Operators2Component
  },
  {
    path: 'chapter-6/weight-calculation',
    component: WeightCalculationComponent
  },
  {
    path: 'chapter-6/cart-loading',
    component: CartLoadingComponent
  },
  {
    path: 'chapter-6/selling-gems',
    component: SellingGemsComponent
  },
  {
    path: 'chapter-6/nighttime',
    component: NighttimeComponent
  },
  {
    path: 'chapter-6/nightclub',
    component: NightclubComponent
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
