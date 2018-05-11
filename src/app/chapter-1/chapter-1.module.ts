import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YeOldeJavascriptComponent } from './ye-olde-javascript/ye-olde-javascript.component';
import {NestedCallsComponent} from "./nested-calls/nested-calls.component";
import {PromisesComponent} from "./promises/promises.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [YeOldeJavascriptComponent, NestedCallsComponent, PromisesComponent]
})
export class Chapter1Module { }
