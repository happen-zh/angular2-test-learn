import {Component} from '@angular/core';

@Component({
  selector:'key-test',
  template:`<input #box (keyup.enter)="testClick(box.value)"
            (testClick)="update(box.value)">
            <ul>
              <li *ngFor="let item of value_arr">
                {{item}}
              </li>
            </ul>`
})

export class TestValue{
  values = '';
  value_arr = [''];
  testClick(value:string){
    this.value_arr.push(value);
  }
}

@Component({
    selector: 'click-me',
    template: `
    <button (click)="onClickMe()">Click me!</button>
    {{clickMessage}}`
})

export class ClickMeComponent{
    clickMessage='';
    onClickMe(){
        this.clickMessage = 'You are my hero!';
    }
}

@Component({
  selector:'key-event',
  template:`<input (keyup)="clickMe($event)">
            <p>{{values}}</p>`
})

export class KeyEvent{
  values = '';
  // 该处将event转换为any类型，简化代码，但是有成本，没有任何类型信息，对象获取时要自己进行验证判断  应该采用下边的方法
  // clickMe(event:any){
  //   this.values = event.key;
  //   // event.key为当前key值
  //   // event.targe.value为当前触发事件的dom对象的值
  // }

  // 正确的方法
  clickMe(event:KeyboardEvent){
    this.values = (<HTMLInputElement>event.target).value;
  }
}

@Component({
  selector:'box-value',
  template:`<input #box >`
})

export class BoxValue{

}