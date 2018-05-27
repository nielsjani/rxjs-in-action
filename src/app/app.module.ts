import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Chapter1Module} from './chapter-1/chapter-1.module';
import {RoutingModule} from "./app-routing.module";
import {StartModule} from "./start/start.module";
import {RouterModule} from "@angular/router";
import {Chapter2Module} from "./chapter-2/chapter-2.module";
import {Chapter3Module} from "./chapter-3/chapter-3.module";

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
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
