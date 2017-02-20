import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {Search} from './compontents/search/index';
import {TestForm} from './compontents/forms/index';
import { HeroList } from './compontents/heros/hero-list';

const routes:Routes = [
  {
    path:'',
    redirectTo:'/search',
    pathMatch:'full'
  },
  {
    path:'search',
    component:Search
  },
  {
    path:'test-form',
    component:TestForm
  },
  {
    path:'hero-list',
    component:HeroList
  }
];

export const routing = RouterModule.forRoot(routes);