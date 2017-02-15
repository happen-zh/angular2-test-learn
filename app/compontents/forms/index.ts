/*index.ts*/
import {Component} from '@angular/core';
import {Hero} from '../../hero';

@Component({
  selector:'test-form',
  templateUrl: 'app/pages/forms/index.html'
})

export class TestForm{
  powerList = ['yi','er','san','si','wu'];
  model = new Hero(123,'happen','yi','testMsg');
}