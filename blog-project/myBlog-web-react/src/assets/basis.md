# TypeScript 基础入门

## 数据基础类型

### 布尔类型（boolean）

```typescript
var flag: boolean = true;
```

### 数字类型（number）

```typescript
var num: number = 123;
```

### 字符串类型（string）

```typescript
var str: string = "this is string";
```

### 数组类型（array）


- 第一种定义数组的方式

  - var arr:number[]=[11,22,33] 定义数组元素类型都是 number 类型

- 第二种定义数组的方式

  - var arr:Array<number>=[11,22,33]


### 元组类型（tuple）

- [属于数组的一种]

```typescript

let arr: [number, string] = [123, "this is ts"];

可以给数组中每一个位置指定一个类型;

```

### 枚举类型（enum）

```typescript
enum Flag = {success=1,error=2};
let s:Flar=Flag.success;
console.log(s) //1

enum Color {blue,red,'orange'};
var c:Color=Color.red;
console.log(c)	// 1	如果标识符没有赋值，它的值就是下标

enum Color {blue,red=3,'orange'};
var c:Color=Color.red;
console.log(c)	// 3
var d:Color=Color.orange;
console.log(c)	// 4
```

### 任意类型（any）

```typescript
var num: any = 123;
num = "str";
num = true;
console.log(num);
```

### null 和 undefined

- (其他 never 类型的子类型)

```typescript
var num: number;
console.log(num); //输出undefined	报错

var num: undefined;
console.log(num); //输出：undefined	正确

// 一个元素可能是number类型，可能是null，可能是undefined
var num: number | null | undefined;
```

### void 类型

- [typescript 中的 void 表示没有任何类型，一般用于定义方法的时候方法没有返回值]

```typescript
表示方法没有返回任何类型;
正确写法;
function run(): void {
  console.log("run");
}
run();
错误写法;
function run(): undefined {
  console.log("run");
}
run();
正确写法;
function run(): number {
  return 123;
}
run();
```

### never 类型

- 是其他类型，包括 null 和 undefined]的子类型，代表从不会出现的值，这意味着声明 never 的变量只能被 never 类型所赋值

```typescript
var a:never
a=(() => {
	throe new Error('错误')
})()
```

## 函数定义

### 一般定义

```typescript
function run(): string {
  return "run";
}
```

### 匿名函数

```typescript
var fun2 = function(): number {
  return 123;
};
```

### 定义方法传参

```typescript
function getInfo(name:string,age:number):string{
	return `{name}` -- `{age}`
}

var getInfo = function(name:string,age:number):string{
    return `{name}` --- `${age}`
}
```

### 没有返回值的方法

```typescript
function run()：void{
	console.log('run')
}
run()
```

### 方法的可选参数

- es5 中实参和形参可以不一样，但是 ts 中必须一样，如果不一样就需要配置可选参数,形参后打个问号，且可选参数必须配置到参数的最后面

  ```typescript
  function getInfo(name: string, age?: number): string {
    if (age) {
      return `${name} --- ${age}`;
    } else {
      return `${name} ---保密年龄`;
    }
  }
  getInfo("zhangsan");
  ```

### 默认参数

- es5 中没法设置默认参数，es6 和 ts 中可以设置默认参数

  ```typescript
  function getInfo(name: string, age: number = 20): string {
    if (age) {
      return `${name} --- ${age}`;
    } else {
      return `${name} ---保密年龄`;
    }
  }
  getInfo("zhangsan");
  ```

### 剩余参数

```typescript
function sum(...result: number[]): number {
  var sum = 0;
  for (var i = 0; i < result.length; i++) {
    sum += result[i];
  }
  return sum;
}
sum(1, 4, 5, 2, 4, 3);

function sum(a: number, b: number, ...result: number[]): number {
  var sum = a + b;
  for (var i = 0; i < result.length; i++) {
    sum += result[i];
  }
  return sum;
}
sum(1, 4, 5, 2, 4, 3);
```

### 函数重载

- java 中方法的重载，重载指的是两个或者两个以上同名函数，但它们的参数不一样，这时会出现函数重载的情况
- typescript 中的重载，通过为同一个函数提供多个函数类型定义来实现多种功能的目的

- ts 为了兼容 es5 和 es6 重载的写法和 java 中有区别

  ```javascript
  //es5中出现同名方法，下面的会替换上面的方法

  function css(config) {}

  function css(config, value) {}
  ```

- ts 中的重载

  ```typescript
  function getInfo(name: string): string;

  function getInfo(age: number): string;

  function getInfo(str: any): any {
    if (typeof str === "string") {
      return "我叫：" + str;
    } else {
      return "我的年龄是" + str;
    }
  }

  alert(getInfo("张三")); //正确

  alert(getInfo(20)); //正确

  alert(getInfo(true)); //错误写法

  function getInfo(name: string): string;
  function getInfo(name: string, age: number): string;
  function getInfo(name: any, age?: any): any {
    if (age) {
      return "我叫：" + name + "我的年龄是" + age;
    } else {
      return "我叫：" + name;
    }
  }

  alert(getInfo("zhangsan")); /*正确*/
  alert(getInfo(123)); //错误
  alert(getInfo("zhangsan", 20)); /*正确*/
  ```

### 箭头函数

- es6 中的箭头函数中的 this 指向上下文

## 类

### es5 中的类与继承

```javascript
function Person() {
  this.name = "张三";
  this.age = "20";
}
var p = new Person();
```

- 构造函数和与原型链里面增加的方法

```javascript
function Person() {
  this.name = "张三";
  this.age = "20";
  this.run = function() {
    alert(this.name + "在运动");
  };
}
//原型链上面的属性会被多个实例共享   构造函数不会
Person.prototype.sex = "男";
Person.prototype.work = function() {
  alert(this.name + "在工作");
};
var p = new Person();
// alert(p.name);
// p.run();
p.work();
```

- es5 中的继承

```javascript
// 原型链 + 对象冒充实现组合继承模式
function Person() {
  this.name = "张三"; /*属性*/
  this.age = 20;
  this.run = function() {
    /*实例方法*/
    alert(this.name + "在运动");
  };
}
Person.prototype.sex = "男";
Person.prototype.work = function() {
  alert(this.name + "在工作");
};
//Web类 继承Person类   原型链+对象冒充的组合继承模式
function Web() {
  Person.call(this); /*对象冒充实现继承*/
}
var w = new Web();
// w.run();  //对象冒充可以继承构造函数里面的属性和方法
w.work(); //对象冒充可以继承构造函数里面的属性和方法   但是没法继承原型链上面的属性和方法

//es5里面的继承   原型链实现继承
function Person() {
  this.name = "张三"; /*属性*/
  this.age = 20;
  this.run = function() {
    /*实例方法*/
    alert(this.name + "在运动");
  };
}
Person.prototype.sex = "男";
Person.prototype.work = function() {
  alert(this.name + "在工作");
};
//Web类 继承Person类   原型链+对象冒充的组合继承模式
function Web() {}
Web.prototype = new Person(); //原型链实现继承
var w = new Web();
//原型链实现继承:可以继承构造函数里面的属性和方法 也可以继承原型链上面的属性和方法
//w.run();
w.work();

//原型链实现继承的问题
function Person(name, age) {
  this.name = name; /*属性*/
  this.age = age;
  this.run = function() {
    /*实例方法*/
    alert(this.name + "在运动");
  };
}
Person.prototype.sex = "男";
Person.prototype.work = function() {
  alert(this.name + "在工作");
};
function Web(name, age) {}
Web.prototype = new Person();
var w = new Web("赵四", 20); //实例化子类的时候没法给父类传参
w.run();
// var w1=new Web('王五',22);

//原型链+对象冒充的组合继承模式
function Person(name, age) {
  this.name = name; /*属性*/
  this.age = age;
  this.run = function() {
    /*实例方法*/
    alert(this.name + "在运动");
  };
}
Person.prototype.sex = "男";
Person.prototype.work = function() {
  alert(this.name + "在工作");
};

function Web(name, age) {
  Person.call(this, name, age); //对象冒充继承   实例化子类可以给父类传参
}

Web.prototype = new Person();
var w = new Web("赵四", 20);
w.work();

//原型链+对象冒充继承的另一种方式
function Person(name, age) {
  this.name = name; /*属性*/
  this.age = age;
  this.run = function() {
    /*实例方法*/
    alert(this.name + "在运动");
  };
}
Person.prototype.sex = "男";
Person.prototype.work = function() {
  alert(this.name + "在工作");
};
function Web(name, age) {
  Person.call(this, name, age); //对象冒充继承  可以继承构造函数里面的属性和方法、实例化子类可以给父类传参
}
Web.prototype = Person.prototype;
var w = new Web("赵四", 20); //实例化子类的时候没法给父类传参
w.run();
```

### TS 中类的定义

- ts 中定义类

```typescript
class Person {
  name: string; //属性   前面省略的public关键词
  constructor(name: string) {
    //构造函数  实例化类的时候触发的方法
    this.name = n;
  }
  run(): void {
    alert(this.name);
  }
}
var p = new Person("张三");
p.run();

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
}
var p = new Person("张三");
alert(p.getName()); //张三
p.setName("李四");
alert(p.getName()); //李四
```

- ts 中实现继承，extends、super

```typescript
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  run(): string {
    return `${this.name}在运动`;
  }
}
// var p = new Person('王五')
// alert(p.run())

class Web extends Person {
  constructor(name: string) {
    super(name); //初始化父类的构造函数
  }
  run(): string {
    return `${this.name}在运动-子类`;
  }
  work() {
    alert(`${this.name}在工作`);
  }
}

var w = new Web("李四");
alert(w.run());
alert(w.work());
```

### 类里面的修饰符

- public：公有 在当前类里面、子类、类外面都可以访问
  - 属性如果不加修饰符，默认就是公有（public）

```typescript
//public	公有，在类里面、子类、类外面都可以访问

class Person {
  public name: string;
  constructor(name: string) {
    this.name = name; //在类里面访问
  }
  run(): string {
    return `${this.name}`;
  }
}
var p = new Person("王五");
// alert(p.run())
alert(p.name); //在类外面访问公有属性

class Web extends Person {
  constructor(name: string) {
    super(name); //初始化父类的构造函数
  }
  run(): string {
    return `${this.name}`;
  }
  work() {
    alert(`${this.name}在工作`);
  }
}
// var w =new Web('李四')
// w.work()  //在子类里访问
```

- protected：保护类型 在当前类里面、子类里面可以访问，在类外部没法访问

```typescript
class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
  run(): string {
    return `${this.name}在运动`;
  }
}
var p = new Person("王五");
alert(p.run());
// alert(p.name)    在外部无法访问，报错

class Web extends Person {
  constructor(name: string) {
    super(name);
  }
  work() {
    alert(`${this.name}`);
  }
}
var w = new Web("李四11");
w.work();
alert(w.run());
```

- private：私有 在当前类里面可以访问，子类、类外部都没法访问

```typescript
class Person {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  run(): string {
    return `${this.name}在运动`;
  }
}
alert(p.name); //外部无法访问，会报错

class Web extends Person {
  constructor(name: string) {
    super(name);
  }
  work() {
    console.log(`${this.name}在工作`); //子类无法访问，会报错
  }
}
```

### 类的静态属性

```typescript
class Per {
  public name: string;
  public age: number = 20;

  static sex = "男";
  constructor(name: string) {
    this.name = name;
  }
  run() {
    //实例方法
    alert(`${this.name}在运动`);
  }
  work() {
    alert(`${this.name}在工作`);
  }
  static print() {
    alert("print方法" + Per.sex);
  }
}
var p = new Per("张三");
p.run();
Per.print();
alert(Per.sex);
```

### 多态

- 多态：父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
- 多态属于继承

```typescript
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    //具体吃什么  不知道   ，  具体吃什么?继承它的子类去实现 ，每一个子类的表现不一样
    console.log("吃的方法");
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  eat() {
    return this.name + "吃粮食";
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
  eat() {
    return this.name + "吃老鼠";
  }
}
```

### 抽象类

- 它是提供其他类继承的基类，不能直接被实例化
- 用 abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
- abstract 抽象方法只能放在抽象类里面
- 抽象类和抽象方法用来定义标准。 标准：Animal 这个类要求它的子类必须含有 eat 方法

```typescript
abstract class Animal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract eat(): any; //抽象方法不包含具体实现并且必须在派生类中实现。
  run() {
    console.log("其他方法可以不实现");
  }
}
// var a = new Animal()    //报错，不可以被实例化

class Dog extends Animal {
  //抽象类的子类必须实现抽象类里面的抽象方法
  constructor(name: any) {
    super(name);
  }
  eat() {
    console.log(this.name + "吃粮食");
  }
}
var d = new Dog("小花花");
d.eat();

class Cat extends Animal {
  //抽象类的子类必须实现抽象类里面的抽象方法
  constructor(name: any) {
    super(name);
  }
  run() {}
  eat() {
    console.log(this.name + "吃老鼠");
  }
}
var c = new Cat("小花猫");
c.eat();
```

## 接口

- 接口的作用

> 在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要。typescript 中多的接口类似于 java,同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。

### 属性类接口

```typescript
//ts中定义方法
function printLabel(): void {
  console.log("printLabel");
}
printLabel();

//ts中定义方法传入参数
function printLabel(label: string): void {
  console.log("printLabel");
}
printLabel("hahah");

//ts中自定义方法传入参数，对json进行约束
function printLabel(labelInfo: { label: string }): void {
  console.log("orintLabel");
}
printLabel("hahah"); //错误写法
printLabel({ name: "张三" }); //错误的写法
printLabel({ label: "张三" }); //正确的写法

//对批量方法传入参数进行约束
//就是传入对象的约束，属性接口
interface FullName {
  firstName: string;
  secondName?: string; //加个?就成了接口可选属性
}
function printName(name: FullName) {
  //必须传入对象 firstName   secondName
  console.log(name.firstName + "---" + name.secondName);
}
printName("12313"); //错误

var obj = {
  //传入的参数必须包含firstName secondName
  age: 20,
  firstName: "张",
  secondName: "三"
};
printName(obj);
printName({
  //参数顺序可以不一样
  secondName: "三",
  firstName: "张"
});

//接口：行为和动作的规范，对批量方法进行约束
```

- ajax 封装

```typescript
interface Config {
  type: string;
  url: string;
  data?: string;
  dataType: string;
}

//原生js封装的ajax
function ajax(config: Config) {
  var xhr = new XMLHttpRequest();
  xhr.open(config.type, config.url, true);
  xhr.send(config.data);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log("chengong");
      if (config.dataType == "json") {
        console.log(JSON.parse(xhr.responseText));
      } else {
        console.log(xhr.responseText);
      }
    }
  };
}

ajax({
  type: "get",
  data: "name=zhangsan",
  url: "http://a.itying.com/api/productlist", //api
  dataType: "json"
});
```

### 函数类型接口

```typescript
//加密的函数类型接口
interface encrypt {
  (key: string, value: string): string;
}
var md5: encrypt = function(key: string, value: string): string {
  //模拟操作，执行加密算法
  return key + value;
};
console.log(md5("name", "zhangsan"));
```

### 可索引接口

```typescript
//可索引接口：数组、对象的约束（不常用）

//ts定义数组的方式
var arr: number[] = [2313, 24535];
var arr1: Array<string> = ["111", "222"];

//可索引接口  对数组的约束
interface UserArr {
  [index: number]: string;
}
var arr: UserArr = ["aaa", "bbb"];
console.log(arr[0]);

//可索引接口  对对象的约束
interface UserObj {
  [index: string]: string;
}
var arr: UserObj = { name: "张三" };
```

### 类类型接口

```typescript
interface Animal {
  name: string;
  eat(str: string): void;
}
class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    console.log(this.name + "吃粮食");
  }
}

var d = new Dog("小黑");
d.eat();

class Cat implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat(food: string) {
    console.log(this.name + "吃" + food);
  }
}
var c = new Cat("小花");
c.eat("老鼠");
```

### 接口扩展

- 接口可以继承接口

```typescript
interface Animal {
  eat(): void;
}

interface Person extends Animal {
  work(): void;
}

class Web implements Person {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    console.log(this.name + "喜欢吃馒头");
  }
  work() {
    console.log(this.name + "写代码");
  }
}

var w = new Web("小李");
w.eat();
```

## 泛型

- 定义

> 泛型：软件工程中，我们不仅要创建一致的定义良好的 API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。
>
> 在像 C#和 Java 这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。
>
> 通俗理解：泛型就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持(类型校验)

```typescript

// any放弃了类型检查，传入什么，返回什么。比如：传入number类型必须返回number类型，传入string类型必须返回string类型
// 传入的参数类型和返回的参数类型可以不一致

function getData(value: any): any {
  return "哈哈哈";
}
```

- 泛型：可以支持不特定的数据类型 要求：传入的参数和返回的参数一致
- T 表示泛型，具体什么类型是调用这个方法的时候决定的,也可用其他大写字母表示

```typescript
function getData<T>(value: T): T {
  return value;
}
getData<number>(123);
getData<string>("1233423");
```

### 类的泛型

```typescript
class MinClas<T> {
  public list: T[] = [];

  add(value: T): void {
    this.list.push(value);
  }

  min(): T {
    var minNum = this.list[0];
    for (var i = 0; i < this.list.length; i++) {
      if (minNum > this.list[i]) {
        minNum = this.list[i];
      }
    }
    return minNum;
  }
}

var m1 = new MinClas<number>(); /*实例化类 并且制定了类的T代表的类型是number*/
m1.add(11);
m1.add(3);
m1.add(2);
alert(m1.min());
```

### 泛型接口

```typescript
interface ConfigFn<T> {
  (value: T): T;
}
function getData<T>(value: T): T {
  return value;
}
var myGetData: ConfigFn<string> = getData;
myGetData("20");
```
