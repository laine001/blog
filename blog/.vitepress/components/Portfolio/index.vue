<script setup lang="ts">
interface Project {
  no: string
  name: string
  kind: string
  desc: string
  stack: string
  status: string
  pending?: boolean
  url?: string
  host: string
}

const domains = [
  { no: '[01]', label: '视觉系统' },
  { no: '[02]', label: '前端工程' },
  { no: '[03]', label: '内容产品' },
]

const dossier = [
  { key: 'NAME', value: 'LAINE' },
  { key: 'ROLE', value: '前端 · 创意开发' },
  { key: 'STACK', value: 'Vue3 · VitePress' },
  { key: 'UPDATED', value: '2026.11' },
]

const projects: Project[] = [
  {
    no: '01',
    name: 'ikunui',
    kind: 'COMPONENT LIBRARY',
    desc: '基于 Vue 3 与 monorepo 的前端 UI 组件库，GitHub 100+ star。从组件设计到仓库工程化一并自己搭。',
    stack: 'VUE 3 / MONOREPO / OPEN SOURCE',
    status: 'LIVE',
    url: 'https://laine001.github.io/ikun-ui/',
    host: 'laine001.github.io/ikun-ui',
  },
  {
    no: '02',
    name: 'ITPMP',
    kind: 'DOCUMENTATION / SEO',
    desc: '软考高项的系统化文档记录与总结，长期整理、持续更新，在 Google / Bing 相关检索中排在前列。',
    stack: 'CONTENT / SEO / KNOWLEDGE BASE',
    status: 'LIVE',
    url: 'https://itpmp.cc/',
    host: 'itpmp.cc',
  },
  {
    no: '03',
    name: 'emoji 博物馆',
    kind: 'CATALOG / UTILITY',
    desc: '完整收录 emoji，支持一键复制与本地收藏。把零散的符号整理成一份可检索、可带走的清单。',
    stack: 'CLIPBOARD / LOCAL STORAGE / CATALOG',
    status: 'LIVE',
    url: 'https://emoji.ikuncool.top/',
    host: 'emoji.ikuncool.top',
  },
  {
    no: '04',
    name: '资源分享小程序',
    kind: 'MINI PROGRAM',
    desc: '按品类收录多种资源，支持一键分享、免费获取。面向微信场景的轻量工具，扫码即可用。',
    stack: 'WECHAT / SHARING / RESOURCE HUB',
    status: 'NO LINK',
    pending: true,
    host: '小程序内访问 / 暂无外链',
  },
  {
    no: '05',
    name: '个人博客',
    kind: 'WRITING / VITEPRESS',
    desc: '长期记录前端、算法与生活的技术博客。基于 VitePress，自定义主题、组件与动效，也是这个页面所在的地方。',
    stack: 'VITEPRESS / MARKDOWN / STATIC SITE',
    status: 'LIVE',
    url: 'https://blog.ikuncool.top/',
    host: 'blog.ikuncool.top',
  },
  {
    no: '06',
    name: '原研药查询',
    kind: 'DATA / RETRIEVAL',
    desc: '名称已登记，项目简介与访问地址待补充。',
    stack: 'QUERY / DATA / —',
    status: 'TBD',
    pending: true,
    host: 'LINK PENDING',
  },
]
</script>

<template>
  <div class="portfolio-root">
    <div class="sheet">
      <span class="cross cross-tl" />
      <span class="cross cross-tr" />
      <span class="cross cross-bl" />
      <span class="cross cross-br" />

      <header class="sheet-head">
        <div class="tag">[ <em>PORTFOLIO</em> / 2026 ]</div>
        <div class="head-rule" />
        <div class="head-meta">DOC. NO. LN-001 · REV. C · SHEET 01/01</div>
      </header>

      <main>
        <section class="hero">
          <div class="hero-left">
            <div class="eyebrow"><span class="mark" /> FIG. 01 — PROFILE</div>
            <h1>Laine<span class="caret">_</span></h1>
            <p class="sub">视觉 / 前端 / 创意开发</p>
            <p class="lede">把界面当图纸画：结构先于装饰，细节决定成色。下面是做过的六个项目，从组件库到内容产品；能公开访问的都留了入口，可点开对照实物。</p>
            <ul class="domains">
              <li v-for="d in domains" :key="d.no"><span>{{ d.no }}</span> {{ d.label }}</li>
            </ul>
          </div>

          <aside class="dossier">
            <div class="dossier-title">DOSSIER / 档案卡</div>
            <dl>
              <div v-for="row in dossier" :key="row.key">
                <dt>{{ row.key }}</dt>
                <dd>{{ row.value }}</dd>
              </div>
            </dl>
            <div class="dossier-foot">
              <span class="arrow">↗</span>
              <a href="https://github.com/LAINE001" target="_blank" rel="noopener noreferrer">GITHUB / LAINE001</a>
            </div>
          </aside>
        </section>

        <div class="index-bar">
          <b>[ INDEX ]</b>
          <span>06 PROJECTS</span>
          <span>·</span>
          <span>SELECTED WORKS</span>
          <div class="leader"><span class="line" /><span>DETAIL</span></div>
        </div>

        <section class="grid">
          <article v-for="p in projects" :key="p.no" class="project">
            <div class="p-top">
              <span>{{ p.no }} / 06</span>
              <span class="p-status" :class="{ 'is-pending': p.pending }"><i /> {{ p.status }}</span>
            </div>
            <h2>{{ p.name }}</h2>
            <div class="p-kind">[ {{ p.kind }} ]</div>
            <p class="p-desc">{{ p.desc }}</p>
            <div class="p-stack">{{ p.stack }}</div>

            <a
              v-if="p.url"
              class="p-link"
              :href="p.url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="go"><span class="arrow">→</span><span class="host">{{ p.host }}</span></span>
              <span class="ext">OPEN ↗</span>
            </a>
            <div v-else class="p-link is-disabled">
              <span class="go"><span class="arrow">→</span><span class="host">{{ p.host }}</span></span>
              <span class="ext">—</span>
            </div>
          </article>
        </section>

        <div class="edge" aria-hidden="true" />
      </main>
    </div>
  </div>
</template>

<style scoped>
  .portfolio-root {
    --paper: #FBFCFD;
    --ink: #1F3A5F;
    --muted: #4C5E78;
    --line: #C9D6E4;
    --grid: #DDE4EC;
    --grid-fine: #E8EDF3;
    --accent: #FF6B35;
    --mono: ui-monospace, "SFMono-Regular", "JetBrains Mono", "Cascadia Mono", Consolas, "Microsoft YaHei", "PingFang SC", monospace;
    --sans: system-ui, -apple-system, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;

    box-sizing: border-box;
    width: 100%;
    min-height: 100vh;
    padding: clamp(16px, 4vw, 56px);
    background: #F4F7FA;
    color: var(--ink);
    font-family: var(--mono);
    font-size: 14px;
    line-height: 1.7;
  }

  .portfolio-root *, .portfolio-root *::before, .portfolio-root *::after { box-sizing: border-box; }

  a { color: inherit; }
  a:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }

  .sheet {
    position: relative;
    max-width: 1180px;
    margin: 0 auto;
    border: 1px solid var(--line);
    background: var(--paper);
  }

  .sheet::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image:
      linear-gradient(to right, var(--grid-fine) 1px, transparent 1px),
      linear-gradient(to bottom, var(--grid-fine) 1px, transparent 1px),
      linear-gradient(to right, var(--grid) 1px, transparent 1px),
      linear-gradient(to bottom, var(--grid) 1px, transparent 1px);
    background-size: 24px 24px, 24px 24px, 120px 120px, 120px 120px;
    opacity: .62;
  }

  .sheet > * { position: relative; z-index: 1; }

  .cross { position: absolute; width: 11px; height: 11px; z-index: 2; }
  .cross::before, .cross::after { content: ""; position: absolute; background: var(--ink); }
  .cross::before { left: 5px; top: 0; width: 1px; height: 11px; }
  .cross::after { top: 5px; left: 0; height: 1px; width: 11px; }
  .cross-tl { left: -6px; top: -6px; }
  .cross-tr { right: -6px; top: -6px; }
  .cross-bl { left: -6px; bottom: -6px; }
  .cross-br { right: -6px; bottom: -6px; }

  .sheet-head {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 14px 22px;
    border-bottom: 1px solid var(--line);
    background: rgba(251, 252, 253, .9);
    font-size: 11px;
    letter-spacing: .08em;
  }
  .tag { color: var(--ink); white-space: nowrap; }
  .tag em { font-style: normal; color: var(--accent); }
  .head-rule { flex: 1; height: 1px; background: var(--line); }
  .head-meta { color: var(--muted); white-space: nowrap; }

  .hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 264px;
    gap: clamp(24px, 5vw, 64px);
    padding: clamp(32px, 6vw, 68px) clamp(22px, 4vw, 52px) clamp(28px, 5vw, 52px);
  }

  .eyebrow {
    display: flex;
    align-items: center;
    gap: 9px;
    font-size: 11px;
    letter-spacing: .14em;
    color: var(--muted);
  }
  .mark { display: inline-block; width: 7px; height: 7px; background: var(--accent); flex: none; }

  h1 {
    margin: 18px 0 4px;
    font-family: var(--sans);
    font-size: clamp(44px, 7vw, 76px);
    font-weight: 600;
    line-height: 1.02;
    letter-spacing: -.045em;
    color: var(--ink);
  }
  h1 .caret { color: var(--accent); font-weight: 400; }

  .sub {
    margin: 0;
    font-family: var(--sans);
    font-size: clamp(14px, 1.6vw, 17px);
    color: var(--muted);
    letter-spacing: .04em;
  }

  .lede {
    max-width: 54ch;
    margin: 26px 0 0;
    font-size: 13px;
    line-height: 1.9;
    color: var(--muted);
  }

  .domains {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 28px 0 0;
    padding: 0;
    list-style: none;
  }
  .domains li {
    border: 1px solid var(--line);
    padding: 6px 12px;
    font-size: 11px;
    letter-spacing: .06em;
    background: rgba(251, 252, 253, .8);
  }
  .domains span { color: var(--accent); margin-right: 7px; }

  .dossier {
    align-self: start;
    border: 1px solid var(--ink);
    background: rgba(251, 252, 253, .94);
    font-size: 11px;
  }
  .dossier-title {
    padding: 8px 12px;
    border-bottom: 1px solid var(--ink);
    background: var(--ink);
    color: #FBFCFD;
    letter-spacing: .12em;
  }
  .dossier dl { margin: 0; }
  .dossier dl > div {
    display: flex;
    gap: 12px;
    padding: 9px 12px;
    border-bottom: 1px solid var(--grid);
  }
  .dossier dt { width: 58px; flex: none; color: var(--muted); letter-spacing: .08em; }
  .dossier dd { margin: 0; color: var(--ink); }
  .dossier-foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 44px;
    padding: 10px 12px;
    letter-spacing: .06em;
  }
  .dossier-foot a { text-decoration: none; border-bottom: 1px solid var(--line); }
  .dossier-foot a:hover { border-bottom-color: var(--accent); }
  .dossier-foot .arrow { color: var(--accent); }

  .index-bar {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px 16px;
    padding: 12px clamp(22px, 4vw, 52px);
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    background: rgba(232, 237, 243, .55);
    font-size: 11px;
    letter-spacing: .1em;
    color: var(--muted);
  }
  .index-bar b { font-weight: 500; color: var(--ink); }
  .leader { display: flex; align-items: center; gap: 8px; flex: 1; min-width: 120px; }
  .leader .line { position: relative; flex: 1; height: 1px; background: var(--line); }
  .leader .line::after {
    content: "";
    position: absolute; right: 0; top: -3px;
    border-left: 7px solid var(--ink);
    border-top: 3.5px solid transparent;
    border-bottom: 3.5px solid transparent;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1px;
    background: var(--line);
    border-bottom: 1px solid var(--line);
  }

  .project {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 252px;
    padding: 24px clamp(20px, 3vw, 30px) 20px;
    background: rgba(251, 252, 253, .95);
    border: 1px solid transparent;
    margin: -1px;
    transition: background-color .18s ease, border-color .18s ease;
    animation: reveal .45s ease both;
  }
  .project:nth-child(1) { animation-delay: .04s; }
  .project:nth-child(2) { animation-delay: .10s; }
  .project:nth-child(3) { animation-delay: .16s; }
  .project:nth-child(4) { animation-delay: .22s; }
  .project:nth-child(5) { animation-delay: .28s; }
  .project:nth-child(6) { animation-delay: .34s; }
  .project:hover { background: #FFFFFF; border-color: var(--ink); }
  .project::before {
    content: "";
    position: absolute; left: 0; top: 0;
    width: 6px; height: 6px;
    background: var(--accent);
  }

  .p-top {
    display: flex; align-items: center; justify-content: space-between;
    font-size: 11px; letter-spacing: .1em; color: var(--muted);
  }
  .p-status { display: inline-flex; align-items: center; gap: 7px; }
  .p-status i { display: inline-block; width: 5px; height: 5px; background: var(--ink); }
  .p-status.is-pending i { background: var(--accent); }

  .project h2 {
    margin: 16px 0 2px;
    font-size: clamp(20px, 2.4vw, 26px);
    font-weight: 600;
    letter-spacing: -.02em;
    line-height: 1.25;
    color: var(--ink);
  }
  .p-kind { font-size: 11px; letter-spacing: .1em; color: var(--accent); }
  .p-desc {
    margin: 14px 0 0;
    max-width: 46ch;
    font-size: 12.5px;
    line-height: 1.85;
    color: var(--muted);
  }
  .p-stack {
    margin-top: 14px;
    font-size: 10.5px;
    letter-spacing: .08em;
    color: var(--muted);
  }

  .p-link {
    display: flex; align-items: center; justify-content: space-between; gap: 12px;
    min-height: 44px;
    margin-top: auto;
    padding-top: 16px;
    border-top: 1px solid var(--grid);
    font-size: 11.5px;
    text-decoration: none;
    color: var(--ink);
  }
  .p-link .go { display: inline-flex; align-items: center; gap: 8px; min-width: 0; }
  .p-link .arrow { display: inline-block; color: var(--accent); transition: transform .18s ease; }
  .p-link:hover .arrow { transform: translateX(4px); }
  .p-link .host { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .p-link .ext { flex: none; color: var(--muted); letter-spacing: .08em; }
  .p-link:hover { border-top-color: var(--ink); }
  .p-link.is-disabled { color: var(--muted); cursor: default; border-top-style: dashed; }
  .p-link.is-disabled .arrow { color: var(--line); }

  .edge {
    height: 12px;
    background-image: repeating-linear-gradient(to right, var(--line) 0 1px, transparent 1px 24px);
    background-size: 24px 1px;
    background-repeat: repeat-x;
    background-position: 0 5px;
    opacity: .9;
  }

  @keyframes reveal {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: none; }
  }

  @media (max-width: 1024px) {
    .hero { gap: 32px; grid-template-columns: minmax(0, 1fr) 232px; }
  }
  @media (max-width: 768px) {
    .hero { grid-template-columns: 1fr; }
    .dossier { max-width: 400px; }
    .grid { grid-template-columns: 1fr; }
    .sheet-head { flex-wrap: wrap; gap: 8px 14px; }
    .head-rule { min-width: 40px; }
  }
  @media (max-width: 640px) {
    .project { min-height: 0; }
    .index-bar { gap: 8px 12px; }
  }
  @media (prefers-reduced-motion: reduce) {
    .portfolio-root *, .portfolio-root *::before, .portfolio-root *::after {
      animation: none !important;
      transition: none !important;
    }
  }
</style>
