import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Chapter1Module} from './chapter-1/chapter-1.module';
import {RoutingModule} from "./app-routing.module";
import {StartModule} from "./start/start.module";
import {RouterModule} from "@angular/router";
import {Chapter2Module} from "./chapter-2/chapter-2.module";
import {Chapter3Module} from "./chapter-3/chapter-3.module";
import {Chapter6Module} from "./chapter-6/chapter-6.module";
import {Chapter7Module} from "./chapter-7/chapter-7.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    StartModule,
    Chapter1Module,
    Chapter2Module,
    Chapter3Module,
    Chapter6Module,
    Chapter7Module,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
