import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StartComponent} from "./start.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [StartComponent]
})
export class StartModule { }
