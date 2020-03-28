#### 结论先行

1. 推荐在循环对象属性的时候，使用for...in,在遍历数组的时候使用for...of.
2. for...in循环出的是key，for...of循环出的是value
3. 注意,for...of是ES6新引入的特性。修复了ES5引入的for...in的不足
4. for...of不能循环普通的对象，需要通过和Object.key()搭配使用

#### 使用for...in循环：

##### 循环数组

```javascript

Array.prototype.sayHello = function(){
    console.log('helloworld')
}
Array.prototype.str = 'world'
var myArray = [1,2,10,40,100];
myArray.name = '数组';

for(let index in myArray){
    console.log(`${myArray[index]}`)
}
for(let value of myArray){
    console.log(value)
}

```

##### 循环对象

```javascript

Object.prototype.sayHello = function(){
    console.log('Hello')
}
Object.prototype.str = 'World'
var student = {
    name : 'aoxiang',
    age : 22,
    locate : {
        country : 'china',
        city : 'xiamen',
        scholl : 'HUAKE'
    } 
}

for(let key in student){
    console.log(key)
}

//首先输出的是对象的属性名，再是对象原型中的属性和方法
//如果不想让其输出原型中的属性和方法，可以使用hasOwnProperty方法进行过滤

for(let key in student){
    if(student.hasOwnProperty(key)){
        console.log(key)
    }
}

//若非常想用for...of来遍历普通对象的属性的话，可以通过Object.keys()来搭
//配使用，先获取对象的所有key的数组然后遍历
for(let key of Object.keys(student)){
    console.log(key+":"student[key])
}


```