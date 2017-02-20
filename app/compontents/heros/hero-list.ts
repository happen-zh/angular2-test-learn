/*hero-list.ts*/
/*英雄列表组件*/
import {Component} from '@angular/core';

import {HEROES} from '../../services/hero-list';
import {Hero} from '../../hero';
import {HeroService} from './hero.Service';
import { Logger }      from  '../../services/logger';

@Component({
  selector:'hero-list',
  template:`
    <div *ngFor="let item of heroes">
      {{item.id}}-{{item.name}}
    </div>
  `,
  providers:[HeroService,Logger]
})

export class HeroList{
  heroes: Hero[];
  // 依赖注入的声明必须放置在构造函数内
  constructor(heroService:HeroService){
    this.heroes = heroService.getHeroes();
  }
}