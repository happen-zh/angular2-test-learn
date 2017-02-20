import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector:'my-app',
  templateUrl: 'app/app.component.html'
})

export class AppComponent{

}



// 路由部分
// @Component({
//   selector:'my-app',
//   template: `<router-outlet></router-outlet>`
// })

// export class AppComponent{

// }

// @Component({
//   selector: 'my-app',
//   template: `<h1>{{title}}</h1>
//   <h2>I am {{myHero}}<h2>
//   <h3>My friends</h3>
//   <ul>
//     <li *ngFor="let friend of friends">{{friend.id}}/{{friend.name}}</li>
//   </ul>
//   <p *ngIf="friends.length<2">这里是*ngIf的测试地方</p>`
//   // angular2允许''一对单引号之间添加回车符，不需要在想ng1那样拼装字符串
//   // 这里补充一下，该处不是英文单引号'而是英文中的波浪号
//   // 内联的html可以引用单独的html模板文件，然后使用@Component装饰类的templateUrl进行引入
// })
// export class AppComponent {
//   name = 'Angular';
//   title = "Tour of Heroes";
//   myHero = 'windstorm';
//   friends = [
//       new Hero(1, 'zhangyu'),
//       new Hero(2, 'zhuzhang'),
//       new Hero(3, 'haozengcai')
//     ];

//   // 构造函数
//   // 定义变量可以在构造函数内部定义
//   // 只有在启动该方法的时候才会调用，离开时自动吊销
//   constructor() {
//     // this代表的是整个类
//     this.title = 'Who i am?';
//     this.myHero = 'Happen';
    
//   }
// }
