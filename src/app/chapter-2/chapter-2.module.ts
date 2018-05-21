import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FunctionalProgrammingCharacteristicsComponent} from "./functional-programming-characteristics/functional-programming-characteristics";
import {FormsModule} from "@angular/forms";
import {CreatingObservablesComponent} from "./creating-observables/creating-observables";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [FunctionalProgrammingCharacteristicsComponent, CreatingObservablesComponent]
})
export class Chapter2Module {
}
