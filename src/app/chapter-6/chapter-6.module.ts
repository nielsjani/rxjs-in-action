import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {WeightCalculationComponent} from "./a-weight-calculation/weight-calculation";
import {CartLoadingComponent} from "./b-cart-loading/cart-loading";
import {SellingGemsComponent} from "./c-selling-gems/selling-gems";
import {NighttimeComponent} from "./d-nighttime/nighttime";
import {NightclubComponent} from "./e-nightclub/nightclub";

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [WeightCalculationComponent, CartLoadingComponent, SellingGemsComponent, NighttimeComponent, NightclubComponent]
})
export class Chapter6Module {
}
