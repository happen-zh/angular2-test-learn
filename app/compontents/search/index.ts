/*index.ts*/
import { Component } from '@angular/core';

@Component({
  selector:'search-index',
  template:`<a routerLink="/test-form">表单例子</a>
            <br><a routerLink="/hero-list">依赖注入</a>
           `
})

export class Search{
  
}