# VUE

- 你明亮的眼睛牵引着我
- 让我守在梦想眺望未来

---



>  上班用`VUE`和`Element`，利用周末总结总结。
>
>  不想分篇，内容太多了，一个周末我没法写完TAT....
>
>  站在巨人的肩膀上，后续将继续补写完善。

## 尔等接旨

- 指令，溜了溜了~~~

- 有`v`的就是指令,`are you ok?`

### v-for

- 当循环目标为数组时

```javascript
<el-table-column
        v-for="(value,index) in arrHeadName"
        :key = "index"
        :prop = "value.prop"
        :label = "value.label"
        align="center"
        >
</el-table-column>
```

> 循环数据渲染`dom`，第一个参数是value，第二个参数是索引

- 当循环目标为对象时

```javascript
<div v-for="(value, name) in object">
  {{ name }}: {{ value }}
</div>
<div v-for="(value, name, index) in object">
  {{ index }}. {{ name }}: {{ value }}
</div>
```

> 第一个属性为键值，第二个为键名，第三个为索引

### v-if

> 控制是否渲染这个节点
>
> 当有`else`分支逻辑的时候，可以给该元素加上`v-else`指令来控制，`v-else`会更具上面那个v-if来控制，效果与`v-if`相反，且一定要紧挨着，还可以使用`v-else-if`实现更多的分支逻辑

```vue
<div v-if="type === 'A'">
      巴啦啦一大堆
    </div>
    <div v-else-if="type === 'B'">
      巴啦啦又是一大堆
    </div>
    <div v-else-if="type === 'C'">
      巴啦啦还是一大堆
    </div>
    <div v-else>
     再巴啦啦一句可好
</div>
```

### v-for和v-if一同使用

> 当它们处于同一节点，`v-for` 的优先级比 `v-if` 更高，这意味着 `v-if` 将分别重复运行于每个 `v-for` 循环中。当你只想为*部分*项渲染节点时，这种优先级的机制会十分有用，如下：

```vue
<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo }}
</li>
```

> 上面代码值能渲染未完成的todo
>
> 而如果你的目的是有条件地跳过循环的执行，那么可以将 `v-if` 置于外层元素 (或 [`)上。如：

```vue
<ul v-if="todos.length">
  <li v-for="todo in todos">
    {{ todo }}
  </li>
</ul>
<p v-else>No todos left!</p>
```

### v-on

```vue
<el-button
           size="mini"
           v-on:click="handleEdit(scope.$index, scope.row)"
           >编辑</el-button>
<el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
           >删除</el-button>
```

> 该指令应用来绑定事件，后面要加上绑定的事件类型，可以在值中加上一些简单的`javascript`表达式

```vue
<el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
```

> 可以将一些方法设置在methods中，这样就可以在`v-on:click`的值中直接写方法名字，默认会在方法中出传入事件对象，当写方法的时候加了`()`就可以传参，若需要事件对象，则主动传入`$event`。
>
> v-on可绑定任意事件，缩写为@
>
> 使`DOM`与`js`一目了然，当`ViewModel`被销毁时，所有事件处理器会被自动删除

### v-bind

>用来绑定`class`，数据，或者内联样式，`vue`中可以使用对象或数据进行控制

### v-html

> 可以解析`html`格式的数据

### v-text

> 将模板内的`textContent`属性替换为指令值所代表的数据，也可以用来防止闪烁

### v-cloak

> 用来防止表达式闪烁，当加载完时这个属性就消失了，所以一般用来设置`css`样式隐藏

```css
    <style>
    [v-cloak]{
        visibility: hidden;
    }
    </style>
```

### v-pre

> 跳过元素和其子元素的编译过程，可用来显示mustache



### v-show

> 控制`css`中的`dispaly`属性，从而控制元素的显示和隐藏，不能与`v-else`配合使用，且不能使用在`template`标签上，因为`template`不会渲染，渲染`css`属性无效



> `v-if` 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
>
> `v-if` 也是**惰性的**：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
>
> 相比之下，`v-show` 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
>
> 一般来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好。

### v-once

> 只渲染元素和组件**一次**。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。

```vue
<!-- 单个元素 -->
<span v-once>This will never change: {{msg}}</span>
<!-- 有子元素 -->
<div v-once>
  <h1>comment</h1>
  <p>{{msg}}</p>
</div>
<!-- 组件 -->
<my-component v-once :comment="msg"></my-component>
<!-- `v-for` 指令-->
<ul>
  <li v-for="i in list" v-once>{{i}}</li>
</ul>

```

## 十里眼与助听器

- 哈哈一时就这样想了，开个玩笑是`computed`和`watch`

### watch

> 通过键值来设置一些监听，键为数据名，值为一个函数，函数的两个参数分别是改变前与改变后的值

```vue
msg:function(val,oldval){
	console.log(val,oldval)
}
```

> 值还可以是一个方法名字，当数据改变的时候这个方法会执行
>
> 当数据为object的时候，object的键值对不会被监听到，（数组的push等（一类）方法可时以），这个时候需要设置深度监听`deep`。
>
> 监听的函数`handler`前面几种写法都为数据变化的时候才会执行，初始化的时候不会执行，如果设置了`immediate`为true就可以了
>
> 可用`vm.$watch`取消监听

```vue
msg:{
  deep:true,  //深度监听
  handler:function(val){
    console.log('do something')
  }
}

msg:{
  immediate:true, //即刻执行
  handler:function(val){
    this.name = val*2
  }
}
```

### computed

> 为`vm`设置一个新的数据，这个新数据基于一个依赖，当依赖发生变化时，新数据也会发生变化。
>
> 与`watch`相比，watch多用于因为某数据变化而执行某些动作。而计算属性为因为一个数据变化而更改另一个数据
>
> 与调用方法相比，性能更高，计算属性是基于它们的依赖进行缓存的，计算属性只有在它们的相关依赖发生改变时才会重新求值。而方法当重新发生渲染就会再次执行函数
>
> 计算属性也拥有getter和setter，默认写的是getter，设置setter执行可以当此计算属性数据更改的时候去做些什么，相当于watch这个函数

```vue
msg:{
  get:function(){
    return this.name + "-" + this.age
  },
  set:function(val){
    this.name = val.split('-')[0]
    this.age = val.split('-')[1]
  }
}
```

## 把你变成猪八戒，哼

- 其实我叫`filter`

- `filter`过滤器，我就是不好好写名字哈哈哈

>可用来实现数据格式化，在mustache或v-bind中使用

### 全局定义

- `Vue.filter(name.handler)`

> name是过滤器名字，handler是数据格式化处理函数，接收的第一个参数就是要处理的数据，返回什么数据，格式化的结果就是什么。
>
> 模板中通过 | （管道符）来使用，在过滤器的名字后面加（）来传参，参数会在handler函数中第二个及后面的形参来接收

```vue
<img :src="t.img | wh" onerror="this.style.visibility='hidden'">

例如，判断移动端所需图片大小
Vue.filter('wh', (value, size) => {
  const dpr = window.devicePixelRatio

  return size === 'large'
    ? value.replace('w.h', `${256*dpr}.${360*dpr}`)
    : value.replace('w.h', `${64*dpr}.${90*dpr}`)
})
```

### 局部定义

- 若为局部定义，则直接在`vue`组件模板中写

```vue
filters:(value, size) => {
    const dpr = window.devicePixelRatio
    return size === 'large' 
    ? value.replace('w.h', `${256*dpr}.${360*dpr}`)
    : value.replace('w.h', `${64*dpr}.${90*dpr}`)
}
```

## mixin

>在`Vue`中，我们可以通过定义多个`mixin`来实现代码抽离复用，便于维护，提升页面的逻辑性
>
>一个`mixin`其实就是一个纯粹的对象，上面挂载着抽离出来的配置，在某一个实例中，通过`mixins`选项（数组）导入后，此实例就拥有导入的`mixin`的配置
>
>且导入的配置不会覆盖原有的，而是合并到一起

- 数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。

- 同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子**之前**调用
- 值为对象的选项，例如 `methods`、`components` 和 `directives`，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。

> 混入也可以进行全局注册。使用时格外小心！一旦使用全局混入，它将影响**每一个**之后创建的 `Vue` 实例。使用恰当时，这可以用来为自定义选项注入处理逻辑。

```vue
// 为自定义的选项 'myOption' 注入一个处理器。
Vue.mixin({
  created: function () {
    var myOption = this.$options.myOption
    if (myOption) {
      console.log(myOption)
    }
  }
})

new Vue({
  myOption: 'hello!'
})
// => "hello!"
```

[官方文档参考链接](https://cn.vuejs.org/v2/guide/mixins.html#%E5%9F%BA%E7%A1%80)

- 更高级的自定义用法`Vue.config.optionMergeStrategies`

## 组件

### 全局注册

```vue
Vue.component('my-component-name', {
  // ... options ...
})
```

> 全局：`Vue.component(name,Vue.extend({}))`
>
> 局部：`{ components:{name:Vue.extend({})} }`

### 局部注册

```vue
    new Vue({
        el:"#app",
        components:{
            'my-app':App
        }
    })
```

### 注意浏览器规则

> 因为`vue`在解析模板的时候会根据某些`html`的规则，例如，在`table`里只能放`tr,td,th`..，如果放入组件不会解析 这个时候我们可以放入`tr`使用`is`方式来标识这个`tr`其实是组件

```vue
<table id="app">
    <tr is="hello"></tr>
</table>
```

###  template

> 我们可以在`html`的某个地方通过`template`标签来定义组件的模板，在组件的`template`属性中通过选择器指定对应的`template`标签内容就可以了,注意，需要给`template`标签加id来指定

```vue
<template id="my-hello">
    <div>
        <h1>hello world</h1>
        <p>hahahah</p>
    </div>
</template>
//组件中
template:"#my-hello"
```

### is切换

> 在实例、组件的模板中的某一个标签上，可以通过`is`属性来指定为另一个目标的组件，这个时候我们一般会使用`component`标签来占位、设置`is`属性来指定目标组件

```vue
<component :is="type"></component>

//组件中
data:{
    type:'aaa'
},
components:{
    'aaa':{template:"<h1>AAAAAAAAAAAAA</h1>"},
    'bbb':{template:"<h1>BBBBBBBBBBBBB</h1>"}
}
```

### keep-alive

> 包裹动态组件(组件)时，会缓存不活动的组件实例，而不是销毁它们。
> 组件切换调用的时候本身会被销毁掉的，只要加上keep-alive进行包裹，就不会被销毁，而是被缓存起来，下一次使用的时候直接从缓存中调用

### 组件嵌套

### props

> `HTML` 中的特性名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。这意味着当你使用` DOM` 中的模板时，`camelCase` (驼峰命名法) 的 `prop `名需要使用其等价的 `kebab-case` (短横线分隔命名) 命名

```vue
Vue.component('blog-post', {
  // 在 JavaScript 中是 camelCase 的
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
})

<!-- 在 HTML 中是 kebab-case 的 -->
<blog-post post-title="hello!"></blog-post>

//使用字符串模板限制不存在
```

#### 传递动态或者静态的prop

```vue
<!-- 动态赋予一个变量的值 -->
<blog-post v-bind:title="post.title"></blog-post>

<!-- 动态赋予一个复杂表达式的值 -->
<blog-post
  v-bind:title="post.title + ' by ' + post.author.name"
></blog-post>
```

#### 单项数据流

> `Prop` 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意间修改了父组件的状态，来避免应用的数据流变得难以理解。
>
> 另外，每次父组件更新时，子组件的所有 `prop` 都会更新为最新值。这意味着你不应该在子组件内部改变 `prop`。如果你这么做了，`Vue`会在控制台给出警告

#### prop验证

[官方写的很好了，下面也基本是官档的](https://cn.vuejs.org/v2/guide/components-props.html#%E7%B1%BB%E5%9E%8B%E6%A3%80%E6%9F%A5)

> 当父组件传递数据给子组件的时候，子组件不接收，这个数据就会挂载在子组件的模板的根节点上

```vue
Vue.component('my-component', {
  props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
})
```

#### 类型检查

## slot

> 使用方式：当组件当做标签进行使用的时候，用`slot`可以用来接受组件标签包裹的内容，当给`solt`标签添加`name`属性的时候，可以调换响应的位置

> 插槽作用域：作用域插槽其实就是带数据的插槽，父组件接收来自子组件的`slot`标签上通过`v-bind`绑定进而传递过来的数据，父组件通过`scope`来进行接受子组件传递过来的数据

### 匿名插槽

### 具名插槽

## transition

> `Vue`提供了`transition`组件来帮助我们实现过渡效果，依据就是在控制元素显示隐藏的时候为`dom`在指定的时刻添加上对应的类名。

>在进入/离开的过渡中，会有 6 个 class 切换(v代表的是transition的name属性的值)。
>
>v-enter：定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。
>
>v-enter-active：定义过渡的状态。在元素整个过渡过程中作用，在元素被插入时生效，在 transition/animation 完成之后移除。这个类可以被用来定义过渡的过程时间，延迟和曲线函数。
>
>v-enter-to: 2.1.8版及以上 定义进入过渡的结束状态。在元素被插入一帧后生效 (于此同时 v-enter 被删除)，在 transition/animation 完成之后移除。
>
>v-leave: 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。
>
>v-leave-active：定义过渡的状态。在元素整个过渡过程中作用，在离开过渡被触发后立即生效，在 transition/animation 完成之后移除。这个类可以被用来定义过渡的过程时间，延迟和曲线函数。
>
>v-leave-to: 2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发一帧后生效 (于此同时 v-leave 被删除)，在 transition/animation 完成之后移除。

### transition-group

> 如果有多个元素需要用transition-group包裹，并且需要有key值做标记

[官档介绍](https://cn.vuejs.org/v2/guide/transitions.html)

## 组件通信

- 父组件可以将一条数据传递给子组件，这条数据可以是动态的，父组件的数据更改的时候，子组件接收的也会变化。子组件被动的接收父组件的数据,子组件不要再更改这条数据了

- 父组件如果将一个引用类型的动态数据传递给子组价的时候，数据会变成双向控制的，子组件改数据的时候父组件也能接收到数据变化,因为子组件改的时候不是在改数据(地址)，而是在改数据里的内容，也就是说引用类型数据的地址始终没有变化，不算改父组件数据。父子间数据共享（双向控制）,基本不会使用，违背了单向数据流

- 父组件可以将一个方法传递给子组件，子组件调用这个方法的时候，就可以给父组件传递数据。父组件被动的接收子组件的数据

- 父组件可以将一个事件绑定在子组件的身上，这个事件的处理程序是父组件某一个方法，当子组件触发自己的这个被绑定的事件的时候，相当于触发了父组件的方法。父组件被动的接收子组件的数据

- 在组件间可以用过ref形成ref链，组件还拥有一个关系链（$parent,$children,$root）,通过这两种链；理论来说，任意的两个组件都可以互相访问，互相进行通信。任意组件通信，用的少...

- event bus  事件总线  小天使  专注于非父子组件的通信，其实父子组件也可以使用，只是没有必要

  在B组件的某个钩子函数为event_bus绑定一个事件，事件的处理程序是B想做的事情。在A组件的某一个操作里，触发event_bus绑定的事件

### event bus

```vue
//创建bus

let bus = new Vue()

//a

new Vue({
  template:'...',
  mounted(){
    bus.$on('emit-a',function(){
      alert(1)
    })
  }
})

//b

new Vue({
  template:'...',
  methods:{
    emitA(){
      bus.$emit('emit-a')
    }
  }
})
//当b组件的emitA方法被调用的时候，A组件就会执行alert（1）
```

- 大量组件间数据共享的时候 `vuex`

## 生命周期

> 附上一张图吧，很久之前画的，不想写了`emmmm.....`
>
> 找了20分钟图没找到，溜了溜了。。。后面再补

## Vue-router

> 现在的应用都流行SPA应用（single page application）
>
> 传统的项目大多使用多页面结构，需要切换内容的时候我们往往会进行单个`html`文件的跳转，这个时候受网络、性能影响，浏览器会出现不定时间的空白界面，用户体验不好
>
> 单页面应用就是用户通过某些操作更改地址栏`url`之后，动态的进行不同模板内容的无刷新切换，用户体验好。
>
> `Vue`中会使用官方提供的``vue-router`插件来使用单页面，原理就是通过检测地址栏变化后将对应的路由组件进行切换（卸载和安装）

- 利用`router-view`来指定路由切换的位置
- 使用`router-link`来创建切换的工具，会渲染成`a`标签，添加`to`属性来设置要更改的`path`信息，且会根据当前路由的变化为`a`标签添加对应的`router-link-active/router-link-exact-active`（完全匹配成功）类名

```vue
:to='{name:"detail",params:{id:_new.id},query:{content:_new.content}}'
```

> `name`是要跳转的路由的名字，也可以写`path`来指定路径，但是用`path`的时候就不能使用`params`传参，`params`是传路径参数，`query`传`queryString`参数
>
> replace属性可以控制router-link的跳转不被记录\

### 多级路由

```vue
import Index from "views/index"
export default [
    {
        path: '/',
        component: Index,   
        redirect: '/billmanage/gatherimg',	//重定向
        children: [
            {
                path: '/homepage',
                component: HomePage
            },
            {
                path: '/billmanage',
                component: resolve => require(['views/bill-manage/index'],resolve),
                children:[
                    {
                        path:"/billmanage/gatherimg",
                        component: resolve => require(['views/bill-manage/gathering-bill/c-end-user/index.vue'],resolve)
                    }
                ]
            }
        ]
    },
]
```

### 路由模式

>路由有两种模式：`hash`、`history`，默认会使用`hash`模式，但是如果`url`里不想出现丑陋`hash`值，在`new VueRouter`的时候配置`mode`值为`history`来改变路由模式，本质使用`H5`的`histroy.pushState`方法来更改`url`，不会引起刷新，但是需要后端进行路由的配置

### 命名路由

> 我们可以给路由对象配置name属性，这样的话，我们在跳转的时候直接写`name:main`就会快速的找到此name属性对应的路由，不需要写大量的`url path`路径了

### 动态路由

> 有的时候我们需要在路由跳转的时候跟上参数，路由传参的参数主要有两种：路径参数、`queryString`参数

```vue
{path:'/user/:id',component:User}
```

> 在组件中可以通过this.$route.params来使用
>
> `queryString`参数不需要在路由表设置接收，直接设置`?`后面的内容，在路由组件中通过`this.$route.query`接收

### 编程式导航

[一个小哥的博文](https://yuiter.com/2019/07/02/Vue-Chapter14/)

- router.push()
- router.replace()
- router.go()

### 路由钩子

> 在某些情况下，当路由跳转前或跳转后、进入、离开某一个路由前、后，需要做某些操作，就可以使用路由钩子来监听路由的变化

- 全局路由钩子

```vue
router.beforeEach((to, from, next) => {
    //会在任意路由跳转前执行，next一定要记着执行，不然路由不能跳转了
  console.log('beforeEach')
  console.log(to,from)
  //
  next()
})
//
router.afterEach((to, from) => {
    //会在任意路由跳转后执行
  console.log('afterEach')
})
```

- 单个路由钩子

```vue
routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
```

- 路由组件钩子

```vue
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }

```

### props路由解耦

> 在组件中接收路由参数需要`this.$route.params.id`,代码冗余，现在可以在路由表里配置`props：true`

> 在路由自己中可以通过props接收id参数去使用了

```
{path:'detail/:id',component:AppNewsDetail,name:'detail',props:true}
```

## Vue.use()

> `Vue.use`会查找插件对象里的install方法去执行,并且给install方法里传入`Vue`对象

## Vuex

- 放一个购物车吧，看懂照抄就差不多了
- [vuex官档，先看这个](https://vuex.vuejs.org/zh/)
- TAT  其实是不想写了。。。我还会再回来的。。。
- -[git地址](https://github.com/sailengsi/sls-vuex2-demo)
- 自学关键字
  - state
  - getters
  - mutations
  - actions
  - mapState
  - mapGetters
  - mapActions

> 1.生成`store`,设置`state`
> 2.在根实例中注入`store`
> 3.组件通过计算属性或者`mapState`来使用状态
> 4.用户产生操作，调用`actions`的方法，然后进行异步动作
> 5.异步动作之后，通过`commit`调用`mutations`的方法
> 6.`mutations`方法被调用后，更改`state`
> 7.`state`中的数据更新之后，计算属性重新执行来更改在页面中使用的状态
> 8.组件状态被更改...创建新的虚拟`dom......`
> 9.组件的模板更新之后重新渲染在`dom`中

## vue-cli

- 等`webpack`基本盘完再盘它