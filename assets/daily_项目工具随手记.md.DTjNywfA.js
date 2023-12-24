import{_ as a,D as n,o as i,c as p,I as l,R as e}from"./chunks/framework.ZRhsjope.js";const F=JSON.parse('{"title":"项目工具随手记","description":"","frontmatter":{},"headers":[],"relativePath":"daily/项目工具随手记.md","filePath":"daily/项目工具随手记.md"}'),t={name:"daily/项目工具随手记.md"},h=e(`<h1 id="项目工具随手记" tabindex="-1">项目工具随手记 <a class="header-anchor" href="#项目工具随手记" aria-label="Permalink to &quot;项目工具随手记&quot;">​</a></h1><h2 id="eggjs-中使用-mock" tabindex="-1">eggjs 中使用 mock <a class="header-anchor" href="#eggjs-中使用-mock" aria-label="Permalink to &quot;eggjs 中使用 mock&quot;">​</a></h2><blockquote><p>在项目中新建 mock 文件夹，里面专门存放各个 mock 数据 json 文件</p></blockquote><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> glob</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;glob&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> path</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;path&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mockRoutes</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 读取mock文件夹下的所有文件路径</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mockFiles</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> glob.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;../mock/**/*.json&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mockFiles.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> route </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> file.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">split</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/mock&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.json&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取真实api路径</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (route.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;_/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    route </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">route</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">split</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;_/&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}*\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  mockRoutes.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(route)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">router</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">controller</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> app</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  mockRoutes.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    router.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(path, controller.proxy.proxyToMock)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="获取路径中的参数" tabindex="-1">获取路径中的参数 <a class="header-anchor" href="#获取路径中的参数" aria-label="Permalink to &quot;获取路径中的参数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function getQuery(k) {</span></span>
<span class="line"><span>  let searchStr = window &amp;&amp; window.location.search &amp;&amp; location.search.slice(1);</span></span>
<span class="line"><span>  if (searchStr) {</span></span>
<span class="line"><span>    const searchArr = searchStr.split(&#39;&amp;&#39;) || [];</span></span>
<span class="line"><span>    const result = searchArr.reduce((obj, item) =&gt; {</span></span>
<span class="line"><span>      let [key, ...value] = item.split(&#39;=&#39;);</span></span>
<span class="line"><span>      let ans = decodeURIComponent(value.join(&#39;&#39;));</span></span>
<span class="line"><span>      obj[key] = ans;</span></span>
<span class="line"><span>      return obj;</span></span>
<span class="line"><span>    }, {});</span></span>
<span class="line"><span>    return k ? result[k] : result;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="生成指定范围的随机整数" tabindex="-1">生成指定范围的随机整数 <a class="header-anchor" href="#生成指定范围的随机整数" aria-label="Permalink to &quot;生成指定范围的随机整数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// @param {Number} start 区间起点</span></span>
<span class="line"><span> // @param {Number} end  区间终点</span></span>
<span class="line"><span>function rand(start, end) {</span></span>
<span class="line"><span>  return Math.round(Math.random() * (end - start) + start);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="防抖" tabindex="-1">防抖 <a class="header-anchor" href="#防抖" aria-label="Permalink to &quot;防抖&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @param {Function} fn  函数</span></span>
<span class="line"><span> * @param {Number} delay 时延</span></span>
<span class="line"><span> * @param {Object} context 上下文</span></span>
<span class="line"><span> * @return {Function}</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export function debounce(fn, delay = 100, context = null) {</span></span>
<span class="line"><span>  let timer = null;</span></span>
<span class="line"><span>  return (...params) =&gt; {</span></span>
<span class="line"><span>    clearTimeout(timer);</span></span>
<span class="line"><span>    timer = setTimeout(() =&gt; {</span></span>
<span class="line"><span>      fn.call(context, ...params);</span></span>
<span class="line"><span>    }, delay);</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="节流" tabindex="-1">节流 <a class="header-anchor" href="#节流" aria-label="Permalink to &quot;节流&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @param {Function} fn  函数</span></span>
<span class="line"><span> * @param {Number} threshold 时延</span></span>
<span class="line"><span> * @param {Object} context 上下文</span></span>
<span class="line"><span> * @return {Function}</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>function throttle(fn, threshold = 50, context = null) {</span></span>
<span class="line"><span>  let last;</span></span>
<span class="line"><span>  let timer = null;</span></span>
<span class="line"><span>  return (...params) =&gt; {</span></span>
<span class="line"><span>    const now = +new Date();</span></span>
<span class="line"><span>    if (last &amp;&amp; now &lt; last + threshold) {</span></span>
<span class="line"><span>      clearTimeout(timer);</span></span>
<span class="line"><span>      timer = setTimeout(() =&gt; {</span></span>
<span class="line"><span>        last = now;</span></span>
<span class="line"><span>        fn.call(context, ...params);</span></span>
<span class="line"><span>      }, threshold);</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      last = now;</span></span>
<span class="line"><span>      fn.call(context, ...params);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="复制" tabindex="-1">复制 <a class="header-anchor" href="#复制" aria-label="Permalink to &quot;复制&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import ***</span></span>
<span class="line"><span>function copyText(text) {</span></span>
<span class="line"><span>  return new Promise(function (resolve, reject) {</span></span>
<span class="line"><span>    var fakeElement = document.createElement(&#39;button&#39;);</span></span>
<span class="line"><span>    var clipboard = new Clipboard(fakeElement, {</span></span>
<span class="line"><span>      text: function () {</span></span>
<span class="line"><span>        return text;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      action: function () {</span></span>
<span class="line"><span>        return &#39;copy&#39;;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      container: document.body</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    clipboard.on(&#39;success&#39;, function (e) {</span></span>
<span class="line"><span>      clipboard.destroy();</span></span>
<span class="line"><span>      resolve(e);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    clipboard.on(&#39;error&#39;, function (e) {</span></span>
<span class="line"><span>      clipboard.destroy();</span></span>
<span class="line"><span>      reject(e);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    document.body.appendChild(fakeElement);</span></span>
<span class="line"><span>    fakeElement.click();</span></span>
<span class="line"><span>    document.body.removeChild(fakeElement);</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="获取字符的长度-包括中英文符号等" tabindex="-1">获取字符的长度（包括中英文符号等） <a class="header-anchor" href="#获取字符的长度-包括中英文符号等" aria-label="Permalink to &quot;获取字符的长度（包括中英文符号等）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const getStringWidth = (val) =&gt; {</span></span>
<span class="line"><span>    let len = 0</span></span>
<span class="line"><span>    for (let i = 0; i &lt; val.length; i++) {</span></span>
<span class="line"><span>      const length = val.charCodeAt(i)</span></span>
<span class="line"><span>      if (length &gt;= 0 &amp;&amp; length &lt;= 128) {</span></span>
<span class="line"><span>        len += 1</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        len += 2</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return len</span></span>
<span class="line"><span>  }</span></span></code></pre></div><h2 id="等待执行" tabindex="-1">等待执行 <a class="header-anchor" href="#等待执行" aria-label="Permalink to &quot;等待执行&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export const sleep = (delay) =&gt; new Promise((resolve) =&gt; setTimeout(() =&gt; resolve(null), delay));</span></span></code></pre></div><h2 id="是否为闰年" tabindex="-1">是否为闰年 <a class="header-anchor" href="#是否为闰年" aria-label="Permalink to &quot;是否为闰年&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export function isLeapYear(y) {</span></span>
<span class="line"><span>  return y % 100 ? !(y % 4) : !(y % 400);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="获取路径中所有的-query" tabindex="-1">获取路径中所有的 query <a class="header-anchor" href="#获取路径中所有的-query" aria-label="Permalink to &quot;获取路径中所有的 query&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export const getUrlParam = () =&gt; {</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    // 获取url中&quot;?&quot;符后的字串</span></span>
<span class="line"><span>    const url = location.search;</span></span>
<span class="line"><span>    const theRequest: any = {};</span></span>
<span class="line"><span>    if (url.indexOf(&#39;?&#39;) !== -1) {</span></span>
<span class="line"><span>      const str = url.substr(1);</span></span>
<span class="line"><span>      const strs = str.split(&#39;&amp;&#39;);</span></span>
<span class="line"><span>      for (let i = 0; i &lt; strs.length; i++) {</span></span>
<span class="line"><span>        const [k = &#39;&#39;, v = &#39;&#39;] = strs[i].split(&#39;=&#39;);</span></span>
<span class="line"><span>        theRequest[k] = decodeURIComponent(v);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return theRequest;</span></span>
<span class="line"><span>  } catch (e) {</span></span>
<span class="line"><span>    return {};</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span></code></pre></div><h2 id="将-object-拼接成-query-格式的-string" tabindex="-1">将 object 拼接成 query 格式的 string <a class="header-anchor" href="#将-object-拼接成-query-格式的-string" aria-label="Permalink to &quot;将 object 拼接成 query 格式的 string&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 将object拼接成query格式的string</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> object</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> string param1=xxx&amp;param2=xxx</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setUrlSearch</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">objs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> _rt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">keys</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(objs).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> _val</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> objs[key]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (_val) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      _rt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}=\${</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _val</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;object&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> JSON</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">_val</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _val</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _rt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,24);function k(r,c,d,o,E,g){const s=n("git-talk");return i(),p("div",null,[h,l(s)])}const u=a(t,[["render",k]]);export{F as __pageData,u as default};
