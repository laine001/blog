import{_ as s,o as a,c as i,R as n}from"./chunks/framework.ZRhsjope.js";const g=JSON.parse('{"title":"EventLoop","description":"","frontmatter":{"title":"EventLoop","date":"2019-09-10T22:04:35.000Z","categories":"javascript","type":"categories"},"headers":[],"relativePath":"daily/EventLoop.md","filePath":"daily/EventLoop.md"}'),p={name:"daily/EventLoop.md"},t=n(`<blockquote><p>javascript 事件循环机制</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // javascript 事件循环机制分为浏览器和node事件循环机制</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 浏览器Event Loop是HTML中定义的规范</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // Node Event Loop 是由libuv 库实现。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  JavaScript有一个main thread 主线程和call</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">stack调用栈（执行栈），所有的任务都会放到调用栈中等待主线程执行。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  1.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> JS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 调用栈</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    是一种先进后出的数据结构。当函数被调用时，会被添加到栈中的顶部。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    执行完成之后就从栈顶部移出该函数，直到栈内被清空。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 同步任务、异步任务</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    JavaScript单线程中的任务分为同步任务和异步任务。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    同步任务会在调用栈中按照顺寻排队等待主线程执行。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    异步任务则会在异步有了结果之后将注册的回调函数添加到任务队列（消息队列）中等待主线程空闲的时候，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    也就是栈内被清空的时候，被读取到栈中等待主线程执行。任务队列是先进先出的数据结构。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Event Loop</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    调用栈中的同步任务都型执行完毕，栈内被清空了，就代表主线程空闲了，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    这个时候就会去任务队列中按照顺序读取一个任务放入到栈中执行。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    每次栈内被清空，都会去读取任务队列，有就读取执行，一直循环</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">执行操作，就形成了事件循环。</span></span></code></pre></div>`,2),l=[t];function e(h,k,E,o,c,r){return a(),i("div",null,l)}const y=s(p,[["render",e]]);export{g as __pageData,y as default};
