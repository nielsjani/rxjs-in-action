import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {PassingGemsComponent} from "./a-passing-gems/passing-gems";
import {MiningBuddiesComponent} from "./b-mining-buddies/mining-buddies";

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [PassingGemsComponent, MiningBuddiesComponent]
})
export class Chapter7Module {
}
