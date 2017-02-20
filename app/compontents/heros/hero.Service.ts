/*hero.Service.ts*/
/*以来注入的服务测试*/

import { Injectable } from '@angular/core';

import { HEROES }      from  '../../services/hero-list';
import { Logger }      from  '../../services/logger';

@Injectable()
export class HeroService {
  constructor(private logger: Logger){

  }
  getHeroes(){ 
    this.logger.log('加入日志了……');
    return HEROES; 
  }
}