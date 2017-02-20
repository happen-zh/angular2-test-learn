import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';// 每个浏览器中中运行的应用都需要引入该插件 BrowserModule模块
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing } from './app.router';

import { Search } from './compontents/search/index';
import { TestForm } from './compontents/forms/index';
import { HeroList } from './compontents/heros/hero-list';

import { AppComponent } from './app.component';
import { ClickMeComponent, KeyEvent,TestValue} from './click-me.component';

@NgModule({
  imports: [BrowserModule,routing, FormsModule],   // 当模块需要引入特性的时候通过imports引入到imports数组中 如http/router
  declarations: [AppComponent,HeroList , ClickMeComponent, Search, KeyEvent,TestValue,TestForm],    // 每个组件必须在且仅在一个NgModule类中声明，管道和指令也必须在declarations中声明
  bootstrap: [AppComponent],     // 通过引导根AppModule来启动应用，
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
})

export class AppModule { }
