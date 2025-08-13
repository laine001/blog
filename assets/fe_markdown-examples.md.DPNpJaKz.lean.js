import{_ as a,c as n,o as l,ad as e}from"./chunks/framework.CMzpCLzZ.js";const h=JSON.parse('{"title":"Markdown Extension Examples","description":"","frontmatter":{},"headers":[],"relativePath":"fe/markdown-examples.md","filePath":"fe/markdown-examples.md","lastUpdated":1755075416000}'),p={name:"fe/markdown-examples.md"};function o(t,s,i,r,c,d){return l(),n("div",null,s[0]||(s[0]=[e(`<h1 id="markdown-extension-examples" tabindex="-1">Markdown Extension Examples <a class="header-anchor" href="#markdown-extension-examples" aria-label="Permalink to &quot;Markdown Extension Examples&quot;">​</a></h1><p>This page demonstrates some of the built-in markdown extensions provided by VitePress.</p><h2 id="syntax-highlighting" tabindex="-1">Syntax Highlighting <a class="header-anchor" href="#syntax-highlighting" aria-label="Permalink to &quot;Syntax Highlighting&quot;">​</a></h2><p>VitePress provides Syntax Highlighting powered by <a href="https://github.com/antfu/shikiji" target="_blank" rel="noreferrer">Shikiji</a>, with additional features like line-highlighting:</p><p><strong>Input</strong></p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">\`\`\`js{4}</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#C678DD;"> default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#61AFEF;">  data</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#C678DD;">    return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;">      msg</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;Highlighted!&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">\`\`\`</span></span></code></pre></div><p><strong>Output</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">export</span><span style="color:#C678DD;"> default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#61AFEF;">  data</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#C678DD;">    return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line highlighted"><span style="color:#E06C75;">      msg</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;Highlighted!&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre></div><h2 id="custom-containers" tabindex="-1">Custom Containers <a class="header-anchor" href="#custom-containers" aria-label="Permalink to &quot;Custom Containers&quot;">​</a></h2><p><strong>Input</strong></p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">::: info</span></span>
<span class="line"><span style="color:#ABB2BF;">This is an info box.</span></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: tip</span></span>
<span class="line"><span style="color:#ABB2BF;">This is a tip.</span></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: warning</span></span>
<span class="line"><span style="color:#ABB2BF;">This is a warning.</span></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: danger</span></span>
<span class="line"><span style="color:#ABB2BF;">This is a dangerous warning.</span></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: details</span></span>
<span class="line"><span style="color:#ABB2BF;">This is a details block.</span></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span></code></pre></div><p><strong>Output</strong></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>This is a dangerous warning.</p></div><details class="details custom-block"><summary>Details</summary><p>This is a details block.</p></details><h2 id="more" tabindex="-1">More <a class="header-anchor" href="#more" aria-label="Permalink to &quot;More&quot;">​</a></h2><p>Check out the documentation for the <a href="https://vitepress.dev/guide/markdown" target="_blank" rel="noreferrer">full list of markdown extensions</a>.</p>`,19)]))}const m=a(p,[["render",o]]);export{h as __pageData,m as default};
