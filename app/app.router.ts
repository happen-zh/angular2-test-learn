import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {Search} from './compontents/search/index';
import {TestForm} from './compontents/forms/index';

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
  }
];

export const routing = RouterModule.forRoot(routes);