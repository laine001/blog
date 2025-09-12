# 观察者模式和发布订阅模式

## 观察者模式

::: tip
当对象之间存在一对多的依赖关系时，其中一个对象的状态发生改变，所有依赖它的对象都会收到通知，这就是观察者模式。
:::

> 以游戏为例：任务大厅和玩家

> 任务大厅推出任务订阅功能，玩家通过购买获得订阅权限；大厅发布任务后，通知拥有订阅权限的玩家

### 主体

- 任务大厅
  1. 维护有订阅权限的玩家列表
  2. 提供任务订阅功能
  3. 发布任务后通知有订阅权限的玩家
- 接受任务通知的玩家们

```javascript
// 观察者模式中：目标对象subject（任务大厅） 和 观察者observer（玩家们）
// 任务大厅 --- 被观察者
class Subject {
  constructor() {
    // 维护有订阅权限的玩家列表 --- 观察者列表
    this.observerList = []
  }
  add(ob) {
    // 给玩家提供能拥有订阅权限的功能  --- 定义添加观察者的方法
    this.observerList.push(ob)
  }
  notify(task) {
    // 推出新任务时，通知每个有订阅权限的玩家 --- 当自身变化后，通过调用自己的notify方法通知每个观察者执行update方法
    console.log('notify:我推出任务了')
    this.observerList.forEach((ob) => ob.update(task))
  }
}
// 玩家 --- 观察者
class Observer {
  constructor(name) {
    this.name = name
  }
  update(task) {
    // 收到任务发布通知，自己做操作
    // or 拒绝 or 接受任务
    console.log('收到任务发布通知， 等待自己操作')
    if (task.type === 'war') {
      this.receiveTask()
    } else {
      this.refuseTask()
    }
  }
  refuseTask() {}
  receiveTask() {}
}

// 任务大厅
const subject = new Subject()
// 玩家
const player1 = new Observer('玩家1')
const player2 = new Observer('玩家2')

// 玩家订阅 推出新任务的权限
subject.add(player1)
subject.add(player2)

// 发布任务1
const task1 = {
  type: 'war',
  info: '对战得装备',
}
subject.notify(task1)
const task2 = {
  type: 'online',
  info: '在线得金币',
}
subject.notify(task2)
```

## 发布订阅模式

> 基于一个事件（主题）通道，希望接收通知的对象 Subscriber 通过自定义事件订阅主题，被激活事件的对象 Publisher 通过发布主题事件的方式通知各个订阅该主题的 Subscriber 对象。

> 以观看电视剧为例：电视剧制作方就是发布者 Publisher，观众就是订阅者 Subscribe，而类似优酷的平台则承担了事件通道 Event Channel 功能。

```javascript
// 发布-订阅模式
class PubSub {
  constructor() {
    // 每种事件下存放订阅者的回调
    this.events = {}
  }
  subscribe(type, cb) {
    if (!this.events[type]) {
      this.events[type] = [] // this.events.war = []
    }
    this.events[type].push(cb) // this.events.war = [cb]
  }
  publish(type, ...args) {
    if (this.events[type]) {
      this.events[type].forEach((cb) => cb(...args))
    }
  }
  unSubscribe(type, cb) {
    if (this.events[type]) {
      // this.events
      // ...
    }
  }
}

const ps = new PubSub()

// 订阅对战任务
ps.subscribe('war', (info) => {
  console.log(info, '订阅回调得到任务信息')
  if (info.type === 'war') {
    console.log('接受任务')
  }
})
// 发布了对战任务, 因为已订阅，收到通知
ps.publish('war', task1)
// 发布在线任务，没有订阅，无通知
ps.publish('online', task1)
```
