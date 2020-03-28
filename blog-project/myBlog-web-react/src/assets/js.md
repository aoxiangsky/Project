### 基础语法

#### 数组

```javascript

//基础类型结构
let [a,b,c] = [1,2,3]
console.log(a,b,c)

//对象数组解构
let [a,b,c] = [{name:'1'},{name:'2'},{name:'3'}]
console.log(a,b,c)

//...解构
let [head,...tail] = [1,2,3,4]
console.log(head,tail)

//嵌套解构
let [a,[b],d] = [1,[2,3],4]
console.log(a,b,d)

//解构不成功为undefined
let [a,b,c] = [1]
console.log(a,b,c)

//解构默认赋值
let [a=1 ,b=2] = [3]
console.log(a,b)

```

#### 对象

```javascript

//对象属性解构
let {f1,f2} = {f1:'test1',f2:'test2'}
console.log(f1,f2) 

//可以不按照顺序，这也是数组解构和对象解构的区别之一
let {f2,f1} = {f1:'test1',f2:'test2'}
console.log(f1,f2)

//解构对象重命名
let { f1:rename ,f2 } = { f1: 'test1', f2: 'test2' }
console.log(rename,f2)

//嵌套解构
let { f1: {f11} } = {f1:{f11:'test11',f12:'test12'}}
console.log(f11)

//默认值
let { f1 = 'test1', f2: rename = 'test2' } = { f1: 'current1',f2: 'current2' }
console.log(f1,rename)

```

#### 函数参数

```javascript

//参数解构
function func1({x,y}){
    return x+y
}
func1({x:1,y:2})

function func2({x=1,y=2}){
    return x+y
}
func1({x:4})

```

#### String/Map/Set

```javascript

//string
let [a,b,c,...reset] = 'test123'
console.log(a,b,c,reset)

//map
let [a,b] = new Map().set('f1','test1').set('f2','test2')
console.log(a,b)

//Set
let [a,b] = new Set([1,2,3])
console.log(a,b)

```

### 解构赋值用途

#### （1）交换变量的值

```javascript

 let x = 1;
 let y = 2;
 [x,y] = [y,x]

```

上面代码交换变量x和y的值，这样的写法不仅简洁，而且易读，语义非常清晰

#### （2）从函数返回多个值

函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。有了解构赋值，取出这些值就非常方便。

```javascript

//返回一个数组
function example(){
    return [1,2,3];
}
let [a,b,c] = example();

//返回一个对象
function example(){
    return{
        foo:1,
        bar:2
    };
}
let { foo, bar } = example();

```

#### (3)函数参数的定义

解构赋值可以方便地将一组参数与变量名对应起来。

```javascript

//参数是一组有次序的值
function func1([x,y,z]){ ... }
func1([1,2,3])

//参数是一组无次序的值
function func2({x,y,z}){ ... }
func2({z:3,y:2,x:1})

```

#### (4)提取JSON数据

解构赋值对提取JSON对象中的数据，尤其有用

```javascript

let jsonData = {
    id:42,
    status:'ok',
    data:[867,5309]
};
let { id, status, data:number } = jsonData;

```

上面代码可以快速提取JSON数据的值

#### (5)函数参数的默认值

```javascript

jQuery.ajax = function(url,{
    async = true,
    beforeSend = function(){},
    cache = true,
    complete = function(){},
    crossDomain = false,
    global = true
    //...more config
}){
    //... do stuff
}

```

指定参数的默认值，就避免了在函数体内部再写var foo = config.foo || 'default foo' 这样的语句

#### (6)遍历Map结构

任何部署了Iterator接口的对象，都可以用for...of遍历循环。Map结构原生支持Iterator接口，配合变量的解构赋值，获取键名和键值就非常方便

```javascript

var map = new Map();
map.set('first','hello');
map.set('second','world');

for(let [key,value] of map){
    console.log(key + "is" + value)
}
// first is hello
// second is world

```

如果想要获取键名，或者只想获取键值，可以写成下面这样

```javascript

//获取键名
for(let [key] of map){
    //...
}

//获取键值
for(let [,value] of map){
    //...
}

```

#### (7)输入模块的指定方法

加载模块时，往往需要指定输入那些方法。解构赋值使得输入语句非常清晰
```javascript

const { SourceMapConsumer , SourceNode } = require("source-map")

//导入react组件

import { ReactComponent } from './xxComponent.jsx'

```