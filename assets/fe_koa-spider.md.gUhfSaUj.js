import{_ as n,c as l,ad as p,G as o,B as e,o as t}from"./chunks/framework.CUQRbRGK.js";const E=JSON.parse('{"title":"koa 实现基础爬虫","description":"","frontmatter":{},"headers":[],"relativePath":"fe/koa-spider.md","filePath":"fe/koa-spider.md","lastUpdated":1729666057000}'),c={name:"fe/koa-spider.md"};function r(B,s,y,F,i,A){const a=e("git-talk");return t(),l("div",null,[s[0]||(s[0]=p(`<h1 id="koa-实现基础爬虫" tabindex="-1">koa 实现基础爬虫 <a class="header-anchor" href="#koa-实现基础爬虫" aria-label="Permalink to &quot;koa 实现基础爬虫&quot;">​</a></h1><h2 id="koa-基础初步使用" tabindex="-1">koa 基础初步使用 <a class="header-anchor" href="#koa-基础初步使用" aria-label="Permalink to &quot;koa 基础初步使用&quot;">​</a></h2><blockquote><p>Koa 由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 没有捆绑任何中间件， 而是提供了一套优雅的方法去编写服务端应用程序</p></blockquote><h3 id="安装、启动服务" tabindex="-1">安装、启动服务 <a class="header-anchor" href="#安装、启动服务" aria-label="Permalink to &quot;安装、启动服务&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#98C379;"> init</span></span>
<span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#98C379;"> install</span><span style="color:#98C379;"> koa</span></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> koa</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;koa&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> app</span><span style="color:#56B6C2;"> =</span><span style="color:#C678DD;"> new</span><span style="color:#61AFEF;"> koa</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 启动服务 端口为3000</span></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">listen</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">3000</span><span style="color:#ABB2BF;">)</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这样每次修改文件都需要重新启动服务，可以使用 nodemon 监听文件变化自动重启 <code>npm install nodemon -g</code> 然后启动服务时，使用<code>nodemon app.js</code></p></div><h3 id="响应返回" tabindex="-1">响应返回 <a class="header-anchor" href="#响应返回" aria-label="Permalink to &quot;响应返回&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> koa</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;koa&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> app</span><span style="color:#56B6C2;"> =</span><span style="color:#C678DD;"> new</span><span style="color:#61AFEF;"> koa</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">use</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">async</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;">  ctx</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">body</span><span style="color:#56B6C2;"> =</span><span style="color:#98C379;"> &#39;Hello World&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 启动服务 端口为3000</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 浏览器访问locahost:3000 返回hello world</span></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">listen</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">3000</span><span style="color:#ABB2BF;">)</span></span></code></pre></div><h3 id="使用-koa-router-插件管理路由" tabindex="-1">使用 koa-router 插件管理路由 <a class="header-anchor" href="#使用-koa-router-插件管理路由" aria-label="Permalink to &quot;使用 koa-router 插件管理路由&quot;">​</a></h3><blockquote><p>为 koa 设计的路由中间件，路由由 url 生成</p></blockquote><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> koa</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;koa&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> app</span><span style="color:#56B6C2;"> =</span><span style="color:#C678DD;"> new</span><span style="color:#61AFEF;"> koa</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 引入路由、实例化</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> router</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;koa-router&#39;</span><span style="color:#ABB2BF;">)()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;/api/testapi&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">async</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  // const data = await fetchData()</span></span>
<span class="line"><span style="color:#C678DD;">  const</span><span style="color:#E5C07B;"> data</span><span style="color:#56B6C2;"> =</span><span style="color:#98C379;"> &#39;这是从testapi返回出去的数据&#39;</span></span>
<span class="line"><span style="color:#E5C07B;">  ctx</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">body</span><span style="color:#56B6C2;"> =</span><span style="color:#E06C75;"> data</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">use</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">routes</span><span style="color:#ABB2BF;">())</span></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">use</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">allowedMethods</span><span style="color:#ABB2BF;">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 浏览器访问locahost:3000/api/testapi</span></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">listen</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">3000</span><span style="color:#ABB2BF;">)</span></span></code></pre></div><h2 id="爬取数据" tabindex="-1">爬取数据 <a class="header-anchor" href="#爬取数据" aria-label="Permalink to &quot;爬取数据&quot;">​</a></h2><h3 id="安装插件、首次完整抓取" tabindex="-1">安装插件、首次完整抓取 <a class="header-anchor" href="#安装插件、首次完整抓取" aria-label="Permalink to &quot;安装插件、首次完整抓取&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 安装所需插件</span></span>
<span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#98C379;"> install</span><span style="color:#98C379;"> superagent</span><span style="color:#98C379;"> cheerio</span><span style="color:#98C379;"> superagent-charset</span></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> koa</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;koa&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> app</span><span style="color:#56B6C2;"> =</span><span style="color:#C678DD;"> new</span><span style="color:#61AFEF;"> koa</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> router</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;koa-router&#39;</span><span style="color:#ABB2BF;">)()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 引入插件</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> charset</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;superagent-charset&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> superagent</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;superagent&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#61AFEF;">charset</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">superagent</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> cheerio</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;cheerio&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">superagent</span></span>
<span class="line"><span style="color:#ABB2BF;">  .</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;https://s.weibo.com/top/summary?cate=realtimehot&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  .</span><span style="color:#61AFEF;">charset</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">  .</span><span style="color:#61AFEF;">end</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">err</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">sres</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">    const</span><span style="color:#E5C07B;"> html</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> sres</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">text</span></span>
<span class="line"><span style="color:#E5C07B;">    console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">html</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;/api/testapi&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">async</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">  const</span><span style="color:#E5C07B;"> data</span><span style="color:#56B6C2;"> =</span><span style="color:#98C379;"> &#39;这是从testapi返回出去的数据&#39;</span></span>
<span class="line"><span style="color:#E5C07B;">  ctx</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">body</span><span style="color:#56B6C2;"> =</span><span style="color:#E06C75;"> data</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">use</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">routes</span><span style="color:#ABB2BF;">())</span></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">use</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">allowedMethods</span><span style="color:#ABB2BF;">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">listen</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">3000</span><span style="color:#ABB2BF;">)</span></span></code></pre></div><blockquote><p>此时启动服务，就会去访问微博热搜页面，命令行中打印页面源码说明爬取成功</p></blockquote><h3 id="分析节点源码-处理数据" tabindex="-1">分析节点源码，处理数据 <a class="header-anchor" href="#分析节点源码-处理数据" aria-label="Permalink to &quot;分析节点源码，处理数据&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> $</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> cheerio</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">load</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">html</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">let</span><span style="color:#E06C75;"> hotList</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> []</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;#pl_top_realtimehot table tbody tr&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">each</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">index</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#C678DD;">  if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">index</span><span style="color:#56B6C2;"> !==</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#C678DD;">    const</span><span style="color:#E5C07B;"> $td</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> $</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">children</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">eq</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">    const</span><span style="color:#E5C07B;"> link</span><span style="color:#56B6C2;"> =</span><span style="color:#98C379;"> &#39;https://s.weibo.com&#39;</span><span style="color:#56B6C2;"> +</span><span style="color:#61AFEF;"> decodeURI</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">$td</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">find</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;a&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">attr</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;href&#39;</span><span style="color:#ABB2BF;">))</span></span>
<span class="line"><span style="color:#C678DD;">    const</span><span style="color:#E5C07B;"> text</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> $td</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">find</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;a&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">text</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#C678DD;">    const</span><span style="color:#E5C07B;"> hotValue</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> $td</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">find</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;span&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">text</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#C678DD;">    const</span><span style="color:#E5C07B;"> icon</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> $td</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">find</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;img&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">attr</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;src&#39;</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">?</span><span style="color:#98C379;"> &#39;https:&#39;</span><span style="color:#56B6C2;"> +</span><span style="color:#E5C07B;"> $td</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">find</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;img&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">attr</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;src&#39;</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">:</span><span style="color:#98C379;"> &#39;&#39;</span></span>
<span class="line"><span style="color:#E5C07B;">    hotList</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#E06C75;">      sort</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">index</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">      link</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">      text</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">      hotValue</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">      icon</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    })</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span></code></pre></div><h3 id="前端请求数据、查看接口返回" tabindex="-1">前端请求数据、查看接口返回 <a class="header-anchor" href="#前端请求数据、查看接口返回" aria-label="Permalink to &quot;前端请求数据、查看接口返回&quot;">​</a></h3><blockquote><p>本地环境中，koa 服务需要设置 cors 以允许跨域访问 使用 koa-router 管理请求</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#98C379;"> install</span><span style="color:#98C379;"> koa2-cors</span><span style="color:#98C379;"> koa-router</span><span style="color:#D19A66;"> --save</span></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> Koa</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;koa&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> app</span><span style="color:#56B6C2;"> =</span><span style="color:#C678DD;"> new</span><span style="color:#61AFEF;"> Koa</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> router</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;koa-router&#39;</span><span style="color:#ABB2BF;">)();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 设置允许跨域访问服务</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> cors</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;koa2-cors&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">use</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">cors</span><span style="color:#ABB2BF;">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;">-</span><span style="color:#E5C07B;"> app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">use</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">async</span><span style="color:#E06C75;font-style:italic;"> ctx</span><span style="color:#C678DD;"> =&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#56B6C2;">-</span><span style="color:#C678DD;"> 	const</span><span style="color:#E5C07B;"> data</span><span style="color:#56B6C2;"> =</span><span style="color:#C678DD;"> await</span><span style="color:#61AFEF;"> getSinaData</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#56B6C2;">-</span><span style="color:#E5C07B;"> 	ctx</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">body</span><span style="color:#56B6C2;"> =</span><span style="color:#E06C75;"> data</span></span>
<span class="line"><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;">+</span><span style="color:#E5C07B;"> router</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;/api/getSinaHotSearchList&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">async</span><span style="color:#E06C75;font-style:italic;"> ctx</span><span style="color:#C678DD;"> =&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#56B6C2;">+</span><span style="color:#C678DD;"> 	const</span><span style="color:#E5C07B;"> data</span><span style="color:#56B6C2;"> =</span><span style="color:#C678DD;"> await</span><span style="color:#61AFEF;"> getSinaData</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#56B6C2;">+</span><span style="color:#E5C07B;"> 	ctx</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">body</span><span style="color:#56B6C2;"> =</span><span style="color:#E06C75;"> data</span></span>
<span class="line"><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">listen</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">3000</span><span style="color:#ABB2BF;">, () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;">  console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">\`success and it is listening at port 3000\`</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span></code></pre></div><blockquote><p>页面接口请求、查看返回数据</p></blockquote><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#E06C75;">fetch</span></span>
<span class="line"><span style="color:#ABB2BF;">  .</span><span style="color:#61AFEF;">get</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;http://localhost:3000/api/getSinaHotSearchList&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  .</span><span style="color:#61AFEF;">then</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">response</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#E5C07B;"> response</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">json</span><span style="color:#ABB2BF;">())</span></span>
<span class="line"><span style="color:#ABB2BF;">  .</span><span style="color:#61AFEF;">then</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">res</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;">    console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span></code></pre></div>`,25)),o(a)])}const d=n(c,[["render",r]]);export{E as __pageData,d as default};