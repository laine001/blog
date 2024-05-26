import{_ as s,c as n,o as a,a3 as l}from"./chunks/framework.Bzw1DWgs.js";const _=JSON.parse('{"title":"队列数据结构","description":"","frontmatter":{"layout":"js","title":"队列数据结构","date":"2020-02-21T18:02:05.000Z","tags":"数据结构"},"headers":[],"relativePath":"fe/数据结构与算法笔记Ⅱ.md","filePath":"fe/数据结构与算法笔记Ⅱ.md","lastUpdated":1716730059000}'),p={name:"fe/数据结构与算法笔记Ⅱ.md"},o=l(`<blockquote><p>栈数据结构是遵循先进先出原则的一组有序的项。最新添加的元素必须排在队列的末尾,例：排队</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * enqueue: 向队列尾部添加一个或多个item  --- push</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * dequeue: 移出队列的第一(队列最前面的)item，并返回被移除的元素  </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * front: 返回队列中的第一个元素(会最先被添加，也会最先被移除),队列不变动</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> *        [不移除元素,只返回元素信息]</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 创建一个队列</span></span>
<span class="line"><span style="color:#C678DD;">function</span><span style="color:#61AFEF;"> Queue</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#C678DD;">    let</span><span style="color:#E06C75;"> items</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> []</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // 属性和方法</span></span>
<span class="line"><span style="color:#E5C07B;">    console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;同步执行&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E06C75;">    enqueue</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">ele</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#E5C07B;">        items</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">ele</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#E06C75;">    dequeue</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#C678DD;">        return</span><span style="color:#E5C07B;"> items</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">shift</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#E06C75;">    front</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#C678DD;">        return</span><span style="color:#E06C75;"> items</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#E06C75;">    print</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#E5C07B;">        console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">items</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">toString</span><span style="color:#ABB2BF;">())</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre></div>`,2),e=[o];function t(c,B,r,y,i,F){return a(),n("div",null,e)}const u=s(p,[["render",t]]);export{_ as __pageData,u as default};
