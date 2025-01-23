import{_ as a,c as n,ad as s,o}from"./chunks/framework.CEo_wfVX.js";const u=JSON.parse('{"title":"package.json文件中各字段","description":"","frontmatter":{},"headers":[],"relativePath":"pkg-file.md","filePath":"pkg-file.md","lastUpdated":1737625728000}'),p={name:"pkg-file.md"};function c(l,e,d,t,i,r){return o(),n("div",null,e[0]||(e[0]=[s(`<h1 id="package-json文件中各字段" tabindex="-1">package.json文件中各字段 <a class="header-anchor" href="#package-json文件中各字段" aria-label="Permalink to &quot;package.json文件中各字段&quot;">​</a></h1><h2 id="dependencies-相关" tabindex="-1">dependencies 相关 <a class="header-anchor" href="#dependencies-相关" aria-label="Permalink to &quot;dependencies 相关&quot;">​</a></h2><p>管理项目中的各种依赖项</p><h3 id="dependencies" tabindex="-1"><code>dependencies</code> <a class="header-anchor" href="#dependencies" aria-label="Permalink to &quot;\`dependencies\`&quot;">​</a></h3><p>项目运行所需要的依赖，在执行<code>npm install</code>的时候会根据此项安装对应依赖。一股脑放置在此字段内的各种依赖可能会出现<code>幽灵依赖</code>问题</p><h3 id="devdependencies" tabindex="-1"><code>devDependencies</code> <a class="header-anchor" href="#devdependencies" aria-label="Permalink to &quot;\`devDependencies\`&quot;">​</a></h3><p>仅在开发时用到的依赖包</p><h3 id="peerdependencies" tabindex="-1"><code>peerDependencies</code> <a class="header-anchor" href="#peerdependencies" aria-label="Permalink to &quot;\`peerDependencies\`&quot;">​</a></h3><p>用于依赖包中，在项目中不起作用。开发时一般会配合 devDependencies 来实现开发和发包时的版本解耦。</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#E06C75;">    &quot;peerDependencies&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;">        &quot;react&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;16 || 17 || 18&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#E06C75;">    &quot;devDependencies&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;">        &quot;react&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;16&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre></div><h3 id="optionaldependencies" tabindex="-1">optionalDependencies <a class="header-anchor" href="#optionaldependencies" aria-label="Permalink to &quot;optionalDependencies&quot;">​</a></h3><p>定义可选依赖项，和 dependencies 非常类似，主要的差别：在 optionalDependencies 中的依赖包安装报错甚至找不到时不会影响到包管理器的安装行为。</p>`,12)]))}const B=a(p,[["render",c]]);export{u as __pageData,B as default};
