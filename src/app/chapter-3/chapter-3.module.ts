import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UnsubscribingComponent} from "./unsubscribing/unsubscribing";
import {OperatorsComponent} from "./operators/operators";
import {Operators2Component} from "./operators-2/operators-2";

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [UnsubscribingComponent, OperatorsComponent, Operators2Component]
})
export class Chapter3Module {
}
