<script setup lang="ts">
interface Project {
  no: string
  name: string
  kind: string
  desc: string
  tags: string[]
  status: string
  pending?: boolean
  url?: string
  host: string
  tone: { bg: string; a: string; b: string; leaf: string }
}

const about = [
  { key: '方向', value: '前端 · 视觉' },
  { key: '常用', value: 'Vue 3 · VitePress' },
  { key: '更新', value: '2026.11' },
]

const projects: Project[] = [
  {
    no: '01',
    name: 'ikunui',
    kind: '组件库',
    desc: '基于 Vue 3 与 monorepo 的前端 UI 组件库，GitHub 100+ star。从组件设计到仓库工程化一并自己搭。',
    tags: ['Vue 3', 'Monorepo', '开源'],
    status: '已上线',
    url: 'https://laine001.github.io/ikun-ui/',
    host: 'laine001.github.io/ikun-ui',
    tone: { bg: '#F6E7D8', a: '#E9B993', b: '#7C8B6B', leaf: '#A34E2E' },
  },
  {
    no: '02',
    name: 'ITPMP',
    kind: '文档 / 内容',
    desc: '软考高项的系统化文档记录与总结，长期整理、持续更新，在 Google / Bing 相关检索中排在前列。',
    tags: ['内容', 'SEO', '知识库'],
    status: '已上线',
    url: 'https://itpmp.cc/',
    host: 'itpmp.cc',
    tone: { bg: '#E7ECDF', a: '#B7C4A6', b: '#C4633F', leaf: '#4F6142' },
  },
  {
    no: '03',
    name: 'emoji 博物馆',
    kind: '实用工具',
    desc: '完整收录 emoji，支持一键复制与本地收藏。把零散的符号整理成一份可检索、可带走的清单。',
    tags: ['剪贴板', '本地收藏', '目录'],
    status: '已上线',
    url: 'https://emoji.ikuncool.top/',
    host: 'emoji.ikuncool.top',
    tone: { bg: '#F8E9D9', a: '#EFD0A8', b: '#C4633F', leaf: '#3A2E28' },
  },
  {
    no: '04',
    name: '资源分享小程序',
    kind: '小程序',
    desc: '按品类收录多种资源，支持一键分享、免费获取。面向微信场景的轻量工具，扫码即可用。',
    tags: ['微信', '分享', '资源'],
    status: '暂无外链',
    pending: true,
    host: '小程序内访问 / 暂无外链',
    tone: { bg: '#E3EDE9', a: '#A9C6BC', b: '#E0A87C', leaf: '#4F6142' },
  },
  {
    no: '05',
    name: '个人博客',
    kind: '写作 / VitePress',
    desc: '长期记录前端、算法与生活的技术博客。基于 VitePress，自定义主题、组件与动效，也是这个页面所在的地方。',
    tags: ['VitePress', 'Markdown', '静态站点'],
    status: '已上线',
    url: 'https://blog.ikuncool.top/',
    host: 'blog.ikuncool.top',
    tone: { bg: '#EFE6D6', a: '#CBBBA0', b: '#7C8B6B', leaf: '#A34E2E' },
  },
  {
    no: '06',
    name: '原研药查询',
    kind: '数据 / 检索',
    desc: '名称已登记，项目简介与访问地址待补充。',
    tags: ['查询', '数据'],
    status: '待补充',
    pending: true,
    host: 'LINK PENDING',
    tone: { bg: '#EDE8E2', a: '#CFC4B8', b: '#C4633F', leaf: '#6F5D50' },
  },
]
</script>

<template>
  <div class="portfolio2-root">
    <div class="wrap">
      <header class="topline">
        <div class="brand"><span class="brand-mark" />Laine<span class="brand-dot">.</span></div>
        <div class="topline-right">
          <span class="sticker">作品集 · 2026</span>
          <span class="count">06 件作品</span>
        </div>
      </header>

      <main>
        <section class="hero">
          <div class="hero-copy">
            <p class="eyebrow">你好，我是 Laine</p>
            <h1>把想法，做成<br /><em>看得见</em>的东西。</h1>
            <p class="lede">六个项目，从组件库到内容产品。能公开访问的都留了入口，点开就能看到实物；还没有地址的，就先留个位置。</p>
            <div class="cta-row">
              <a class="pill pill-solid" href="#works">看看作品 <span aria-hidden="true">↓</span></a>
              <a class="pill pill-ghost" href="https://github.com/LAINE001" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <div class="hero-art" aria-hidden="true">
            <span class="halo" />
            <span class="orb" />
            <span class="leaf leaf-a" />
            <span class="leaf leaf-b" />
            <span class="pebble pebble-a" />
            <span class="pebble pebble-b" />
            <svg class="squiggle" viewBox="0 0 260 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 84C40 84 42 26 78 26C114 26 116 96 152 96C188 96 190 40 226 40C242 40 250 52 256 62" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </div>
        </section>

        <section class="about">
          <div class="about-copy">
            <p class="section-kicker">关于 / ABOUT</p>
            <p>喜欢把结构理清楚，也喜欢留一点温度。做的东西大多围绕界面、内容和一点点手作感——不追求炫技，更在意用起来是不是舒服。</p>
          </div>
          <dl class="about-list">
            <div v-for="row in about" :key="row.key">
              <dt><span class="dot" />{{ row.key }}</dt>
              <dd>{{ row.value }}</dd>
            </div>
          </dl>
        </section>

        <section id="works" class="works">
          <div class="works-head">
            <div>
              <p class="section-kicker">作品 / SELECTED WORKS</p>
              <h2>做过的东西</h2>
            </div>
            <span class="works-count">01 — 06</span>
          </div>

          <div class="cards">
            <article
              v-for="p in projects"
              :key="p.no"
              class="card"
              :style="{
                '--tone-bg': p.tone.bg,
                '--tone-a': p.tone.a,
                '--tone-b': p.tone.b,
                '--tone-leaf': p.tone.leaf,
              }"
            >
              <div class="card-art" aria-hidden="true">
                <span class="blob blob-a" />
                <span class="blob blob-b" />
                <span class="leaf" />
                <span class="ring" />
                <span class="speck" />
              </div>

              <div class="card-body">
                <div class="card-top">
                  <span class="no">{{ p.no }}</span>
                  <span class="status" :class="{ 'is-pending': p.pending }">{{ p.status }}</span>
                </div>

                <h3>{{ p.name }}</h3>
                <p class="kind">{{ p.kind }}</p>
                <p class="desc">{{ p.desc }}</p>

                <ul class="tags">
                  <li v-for="t in p.tags" :key="t">{{ t }}</li>
                </ul>

                <a
                  v-if="p.url"
                  class="card-link"
                  :href="p.url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="host">{{ p.host }}</span>
                  <span class="go">访问 <span aria-hidden="true">↗</span></span>
                </a>
                <div v-else class="card-link is-disabled">
                  <span class="host">{{ p.host }}</span>
                  <span class="go" aria-hidden="true">—</span>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer class="foot">
        <div class="foot-line" aria-hidden="true" />
        <div class="foot-row">
          <p>慢慢做，认真收尾。<span>© 2026 Laine</span></p>
          <a href="https://github.com/LAINE001" target="_blank" rel="noopener noreferrer">GITHUB / LAINE001 <span aria-hidden="true">↗</span></a>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
  .portfolio2-root {
    --cream: #FAF4EA;
    --card: #FFFDF8;
    --ink: #3A2E28;
    --ink-soft: #6F5D50;
    --terra: #C4633F;
    --terra-deep: #A34E2E;
    --sage: #7C8B6B;
    --line: #E6DCC9;
    --serif: Georgia, "Songti SC", "Noto Serif SC", "STSong", "SimSun", serif;
    --sans: system-ui, -apple-system, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;

    box-sizing: border-box;
    width: 100%;
    min-height: 100vh;
    padding: clamp(20px, 4vw, 48px);
    background:
      radial-gradient(560px 440px at 88% 4%, rgba(196, 99, 63, .10), transparent 70%),
      radial-gradient(500px 400px at 2% 58%, rgba(124, 139, 107, .13), transparent 72%),
      var(--cream);
    color: var(--ink);
    color-scheme: light;
    font-family: var(--serif);
    font-size: 15px;
    line-height: 1.7;
  }

  .portfolio2-root *, .portfolio2-root *::before, .portfolio2-root *::after { box-sizing: border-box; }

  a { color: inherit; }
  a:focus-visible { outline: 2px solid var(--terra-deep); outline-offset: 2px; border-radius: 999px; }

  .wrap { max-width: 1120px; margin: 0 auto; }

  /* ---------- 顶部 ---------- */
  .topline {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
  }
  .brand {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 21px;
    letter-spacing: .01em;
  }
  .brand-mark {
    width: 13px;
    height: 13px;
    border-radius: 60% 40% 55% 45%;
    background: var(--terra);
    transform: rotate(-18deg);
  }
  .brand-dot { color: var(--terra); }
  .topline-right { display: inline-flex; align-items: center; gap: 14px; }
  .sticker {
    padding: 7px 16px;
    border: .5px solid var(--terra);
    border-radius: 999px;
    background: rgba(196, 99, 63, .10);
    color: var(--terra-deep);
    font-family: var(--sans);
    font-size: 12px;
    letter-spacing: .04em;
  }
  .count { font-family: var(--sans); font-size: 12px; color: var(--ink-soft); letter-spacing: .06em; }

  /* ---------- Hero ---------- */
  .hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(280px, 400px);
    align-items: center;
    gap: clamp(24px, 5vw, 56px);
    padding: clamp(48px, 8vw, 88px) 0 clamp(40px, 6vw, 64px);
  }
  .eyebrow {
    margin: 0 0 18px;
    font-family: var(--sans);
    font-size: 12px;
    letter-spacing: .18em;
    color: var(--terra-deep);
  }
  h1 {
    margin: 0;
    font-size: clamp(36px, 5.4vw, 56px);
    font-weight: 400;
    line-height: 1.32;
    letter-spacing: .01em;
  }
  h1 em {
    position: relative;
    font-style: normal;
    color: var(--terra-deep);
  }
  h1 em::after {
    content: "";
    position: absolute;
    left: 0; right: 0; bottom: -4px;
    height: 7px;
    border-radius: 999px;
    background: rgba(196, 99, 63, .22);
    transform: rotate(-1deg);
  }
  .lede {
    max-width: 46ch;
    margin: 28px 0 0;
    font-size: 14px;
    line-height: 1.9;
    color: var(--ink-soft);
  }
  .cta-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
  .pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-height: 44px;
    padding: 10px 22px;
    border-radius: 999px;
    font-family: var(--sans);
    font-size: 13px;
    text-decoration: none;
    transition: transform .2s ease, opacity .2s ease;
  }
  .pill:hover { transform: translateY(-2px); opacity: .88; }
  .pill-solid { background: var(--terra); color: #FFFDF8; border: .5px solid var(--terra); }
  .pill-ghost { border: .5px solid var(--line); background: var(--card); color: var(--ink); }

  /* Hero 装饰：纯 CSS 有机形状，零外部请求 */
  .hero-art {
    position: relative;
    aspect-ratio: 1 / 1;
    max-width: 400px;
    width: 100%;
    margin-left: auto;
    color: var(--sage);
  }
  .halo {
    position: absolute;
    inset: 8%;
    border-radius: 54% 46% 48% 52% / 50% 54% 46% 50%;
    background: rgba(124, 139, 107, .13);
  }
  .orb {
    position: absolute;
    left: 16%; top: 14%;
    width: 62%; height: 62%;
    border-radius: 52% 48% 45% 55% / 48% 55% 45% 52%;
    background: #E8D8BE;
  }
  .orb::after {
    content: "";
    position: absolute;
    left: 22%; top: 20%;
    width: 38%; height: 38%;
    border-radius: 50%;
    background: rgba(196, 99, 63, .42);
  }
  .leaf {
    position: absolute;
    width: 88px; height: 132px;
    border-radius: 0 100% 0 100%;
    background: var(--sage);
    opacity: .85;
  }
  .leaf-a { right: 4%; top: 6%; transform: rotate(28deg); }
  .leaf-b { left: 2%; bottom: 4%; width: 62px; height: 96px; background: var(--terra); opacity: .72; transform: rotate(-42deg); }
  .pebble { position: absolute; border-radius: 50%; }
  .pebble-a { right: 10%; bottom: 14%; width: 34px; height: 34px; background: var(--terra); opacity: .65; }
  .pebble-b { left: 8%; top: 8%; width: 16px; height: 16px; background: var(--sage); }
  .squiggle { position: absolute; left: -6%; bottom: 2%; width: 74%; color: var(--terra-deep); opacity: .55; }

  /* ---------- 关于 ---------- */
  .about {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 300px;
    gap: clamp(24px, 5vw, 56px);
    align-items: center;
    padding: 32px;
    border: .5px solid var(--line);
    border-radius: 24px;
    background: var(--card);
  }
  .section-kicker {
    margin: 0 0 12px;
    font-family: var(--sans);
    font-size: 11px;
    letter-spacing: .18em;
    color: var(--terra-deep);
  }
  .about-copy > p:last-child { margin: 0; max-width: 58ch; font-size: 14px; line-height: 1.9; color: var(--ink-soft); }
  .about-list { margin: 0; padding: 0; border-top: .5px solid var(--line); }
  .about-list > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 12px 4px;
    border-bottom: .5px solid var(--line);
    font-size: 13px;
  }
  .about-list dt { display: inline-flex; align-items: center; gap: 9px; color: var(--ink-soft); }
  .dot { width: 7px; height: 7px; border-radius: 50%; background: var(--sage); }
  .about-list > div:nth-child(2) .dot { background: var(--terra); }
  .about-list > div:nth-child(3) .dot { background: #C9B48C; }
  .about-list dd { margin: 0; font-family: var(--sans); font-size: 12px; }

  /* ---------- 作品 ---------- */
  .works { padding-top: clamp(56px, 9vw, 96px); }
  .works-head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 32px;
  }
  .works-head h2 { margin: 0; font-size: clamp(26px, 3.4vw, 36px); font-weight: 400; }
  .works-count { font-family: var(--sans); font-size: 12px; letter-spacing: .12em; color: var(--ink-soft); }

  .cards { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
  .card {
    display: flex;
    flex-direction: column;
    padding: 16px;
    border: .5px solid var(--line);
    border-radius: 24px;
    background: var(--card);
    transition: transform .22s ease, opacity .22s ease;
    animation: rise .5s ease both;
  }
  .card:nth-child(1) { animation-delay: .04s; }
  .card:nth-child(2) { animation-delay: .10s; }
  .card:nth-child(3) { animation-delay: .16s; }
  .card:nth-child(4) { animation-delay: .22s; }
  .card:nth-child(5) { animation-delay: .28s; }
  .card:nth-child(6) { animation-delay: .34s; }
  .card:hover { transform: translateY(-4px); }
  .card:hover .blob-a { opacity: .78; }
  .card:focus-within { outline: 2px solid var(--terra-deep); outline-offset: 2px; }

  .card-art {
    position: relative;
    height: 140px;
    overflow: hidden;
    border-radius: 18px;
    background: var(--tone-bg);
  }
  .blob { position: absolute; border-radius: 52% 48% 45% 55% / 48% 55% 45% 52%; transition: opacity .22s ease; }
  .blob-a { left: -32px; top: -46px; width: 190px; height: 190px; background: var(--tone-a); }
  .blob-b { right: 16%; bottom: -64px; width: 150px; height: 150px; background: var(--tone-b); opacity: .75; border-radius: 46% 54% 58% 42% / 55% 46% 54% 45%; }
  .card-art .leaf {
    position: absolute;
    right: 12%; top: 18%;
    width: 34px; height: 62px;
    border-radius: 0 100% 0 100%;
    background: var(--tone-leaf);
    opacity: .8;
    transform: rotate(32deg);
  }
  .ring {
    position: absolute;
    left: 46%; top: 44%;
    width: 58px; height: 58px;
    border: 2px solid var(--tone-leaf);
    border-radius: 50%;
    opacity: .45;
  }
  .speck { position: absolute; right: 30%; top: 20%; width: 9px; height: 9px; border-radius: 50%; background: var(--tone-leaf); opacity: .7; }
  .cards .card:nth-child(even) .blob-a { left: auto; right: -38px; }
  .cards .card:nth-child(even) .card-art .leaf { right: auto; left: 14%; transform: rotate(-38deg); }
  .cards .card:nth-child(3n) .blob-b { right: auto; left: 18%; }
  .cards .card:nth-child(3n) .ring { left: 62%; }

  .card-body { display: flex; flex-direction: column; flex: 1; padding: 16px 4px 4px; }
  .card-top { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
  .no { font-family: var(--sans); font-size: 12px; letter-spacing: .14em; color: var(--ink-soft); }
  .status {
    padding: 5px 13px;
    border-radius: 999px;
    background: rgba(124, 139, 107, .16);
    color: #4F6142;
    font-family: var(--sans);
    font-size: 11px;
  }
  .status.is-pending { background: rgba(196, 99, 63, .13); color: var(--terra-deep); }
  .card h3 { margin: 16px 0 2px; font-size: 22px; font-weight: 400; line-height: 1.35; }
  .kind { margin: 0; font-family: var(--sans); font-size: 11.5px; letter-spacing: .06em; color: var(--terra-deep); }
  .desc { margin: 14px 0 0; font-size: 13px; line-height: 1.85; color: var(--ink-soft); }
  .tags { display: flex; flex-wrap: wrap; gap: 8px; margin: 16px 0 0; padding: 0; list-style: none; }
  .tags li {
    padding: 4px 11px;
    border: .5px solid var(--line);
    border-radius: 999px;
    font-family: var(--sans);
    font-size: 10.5px;
    color: var(--ink-soft);
  }
  .card-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    min-height: 44px;
    margin-top: auto;
    padding: 16px 4px 0;
    border-top: .5px solid var(--line);
    font-family: var(--sans);
    font-size: 11.5px;
    text-decoration: none;
  }
  .card-link .host { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: var(--ink-soft); }
  .card-link .go { flex: none; display: inline-flex; align-items: center; gap: 6px; color: var(--terra-deep); transition: transform .2s ease; }
  .card-link:hover .go { transform: translate(3px, -2px); }
  .card-link.is-disabled { border-top-style: dashed; cursor: default; }
  .card-link.is-disabled .go { color: var(--line); }

  /* ---------- 页脚 ---------- */
  .foot { padding-top: clamp(56px, 8vw, 88px); }
  .foot-line {
    height: 10px;
    border-top: .5px solid var(--line);
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    opacity: .8;
  }
  .foot-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
    padding-top: 24px;
    font-family: var(--sans);
    font-size: 12px;
    color: var(--ink-soft);
  }
  .foot-row p { margin: 0; }
  .foot-row p span { margin-left: 14px; opacity: .8; }
  .foot-row a { text-decoration: none; letter-spacing: .06em; color: var(--terra-deep); }

  @keyframes rise {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: none; }
  }

  @media (max-width: 1024px) {
    .hero { grid-template-columns: minmax(0, 1fr) minmax(240px, 340px); }
    .about { grid-template-columns: minmax(0, 1fr) 260px; }
  }
  @media (max-width: 768px) {
    .hero { grid-template-columns: 1fr; }
    .hero-art { max-width: 280px; margin: 0 auto; }
    .about { grid-template-columns: 1fr; padding: 24px; }
    .cards { grid-template-columns: 1fr; }
  }
  @media (max-width: 640px) {
    .topline-right { gap: 10px; }
    .about { padding: 20px; }
    .card-art { height: 120px; }
    .foot-row p span { display: block; margin: 4px 0 0; }
  }
  @media (prefers-reduced-motion: reduce) {
    .portfolio2-root *, .portfolio2-root *::before, .portfolio2-root *::after {
      animation: none !important;
      transition: none !important;
    }
  }
</style>
