<script setup lang="ts">
import {
  projects as sourceProjects,
  type ProjectType,
  type ProjectStatus,
} from '../../data/portfolio'
import { nextTick, ref } from 'vue'
import { withBase } from 'vitepress'

/** 技术蓝图皮肤：分类文案与技术栈串，按语义类型映射（技术名保留原文） */
const typeText: Record<ProjectType, { kind: string; stack: string }> = {
  'component-library': { kind: '组件库', stack: 'Vue 3 · Monorepo · 开源' },
  documentation: { kind: '文档 / 检索优化', stack: '内容 · SEO · 知识库' },
  catalog: { kind: '名录 / 工具', stack: '剪贴板 · 本地收藏 · 名录' },
  'mini-program': { kind: '小程序', stack: '微信 · 分享 · 资源库' },
  writing: { kind: '写作 / 博客', stack: 'VitePress · Markdown · 静态站点' },
  data: { kind: '数据 / 检索', stack: '检索 · 数据 · —' },
}

const statusText: Record<ProjectStatus, string> = {
  live: '已上线',
  'no-link': '暂无外链',
  tbd: '待定',
}

const projects = sourceProjects.map((p) => ({
  ...p,
  ...typeText[p.type],
  status: statusText[p.status],
  shots: p.shots?.map((s) => ({ ...s, src: withBase(s.src) })),
}))

/* 详情层用原生 <dialog>：Esc、焦点陷阱、背景遮罩交给浏览器处理 */
const detailOpen = ref(false)
const detailDialog = ref<HTMLDialogElement | null>(null)
const detailProject = ref<(typeof projects)[number] | null>(null)
let lastTrigger: HTMLElement | null = null
let closing = false

async function openDetail(p: (typeof projects)[number], e: MouseEvent) {
  lastTrigger = e.currentTarget as HTMLElement
  detailProject.value = p
  detailOpen.value = true
  await nextTick()
  const dlg = detailDialog.value
  if (!dlg) return
  dlg.classList.remove('is-closing')
  closing = false
  if (typeof dlg.showModal === 'function') dlg.showModal()
  else dlg.setAttribute('open', '')
}

/* 原生 close() 会立刻移除 open 使元素 display:none，退场动画必须先播完再关闭 */
function prefersReducedMotion() {
  return typeof window !== 'undefined'
    && typeof window.matchMedia === 'function'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** 压缩后 CSS 变量可能是 `.16s` / `0.16s` / `160ms`，统一换算成毫秒 */
function readOutMs(dlg: HTMLDialogElement) {
  const raw = getComputedStyle(dlg).getPropertyValue('--dlg-out').trim()
  const n = Number.parseFloat(raw)
  if (!Number.isFinite(n) || n <= 0) return 160
  return raw.endsWith('ms') ? n : n * 1000
}

function actuallyClose(dlg: HTMLDialogElement) {
  if (typeof dlg.close === 'function') dlg.close()
  else {
    dlg.removeAttribute('open')
    onDialogClose()
  }
}

function closeDetail() {
  const dlg = detailDialog.value
  if (!dlg || closing || !dlg.open) return
  if (prefersReducedMotion()) {
    actuallyClose(dlg)
    return
  }
  closing = true
  dlg.classList.add('is-closing')
  // 时长由样式里的 --dlg-out 单一提供，避免 JS 与 CSS 各写一份而不同步
  const ms = readOutMs(dlg)
  window.setTimeout(() => {
    actuallyClose(dlg)
    dlg.classList.remove('is-closing')
    closing = false
  }, ms)
}

/* Esc 会触发 cancel 并直接关闭，拦下来让退场动画也生效 */
function onDialogCancel(e: Event) {
  e.preventDefault()
  closeDetail()
}

function onDialogClose() {
  detailOpen.value = false
  detailProject.value = null
  lastTrigger?.focus()
}

function onBackdropClick(e: MouseEvent) {
  if (e.target === detailDialog.value) closeDetail()
}

const domains = [
  { no: '[01]', label: '视觉系统' },
  { no: '[02]', label: '前端工程' },
  { no: '[03]', label: '内容产品' },
]

const dossier = [
  { key: '署名', value: 'LAINE' },
  { key: '方向', value: '前端 · 创意开发' },
  { key: '技术栈', value: 'Vue3 · VitePress' },
  { key: '更新于', value: '2026.11' },
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
        <div class="tag">[ <em>作品集</em> / 2026 ]</div>
        <div class="head-rule" />
        <div class="head-meta">编号 LN-001 · 修订 C · 图纸 01/01</div>
      </header>

      <main>
        <section class="hero">
          <div class="hero-left">
            <div class="eyebrow"><span class="mark" /> 图 01 — 简介</div>
            <h1>Laine<span class="caret">_</span></h1>
            <p class="sub">视觉 / 前端 / 创意开发</p>
            <p class="lede">把界面当图纸画：结构先于装饰，细节决定成色。下面是做过的六个项目，从组件库到内容产品；能公开访问的都留了入口，可点开对照实物。</p>
            <ul class="domains">
              <li v-for="d in domains" :key="d.no"><span>{{ d.no }}</span> {{ d.label }}</li>
            </ul>
          </div>

          <aside class="dossier">
            <div class="dossier-title">档案卡 / 概览</div>
            <dl>
              <div v-for="row in dossier" :key="row.key">
                <dt>{{ row.key }}</dt>
                <dd>{{ row.value }}</dd>
              </div>
            </dl>
            <div class="dossier-foot">
              <span class="arrow">↗</span>
              <a href="https://github.com/LAINE001" target="_blank" rel="noopener noreferrer">GitHub 主页 / LAINE001</a>
            </div>
          </aside>
        </section>

        <div class="index-bar">
          <b>[ 索引 ]</b>
          <span>共 06 个项目</span>
          <span>·</span>
          <span>精选作品</span>
          <div class="leader"><span class="line" /><span>详情</span></div>
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
              <span class="ext">访问 ↗</span>
            </a>
            <button
              v-else-if="p.shots?.length"
              type="button"
              class="p-link is-detail"
              @click="openDetail(p, $event)"
            >
              <span class="go"><span class="arrow">→</span><span class="host">{{ p.host }}</span></span>
              <span class="ext">详情 ↗</span>
            </button>
            <div v-else class="p-link is-disabled">
              <span class="go"><span class="arrow">→</span><span class="host">{{ p.host }}</span></span>
              <span class="ext">—</span>
            </div>
          </article>
        </section>

        <div class="edge" aria-hidden="true" />
      </main>
    </div>

    <dialog
      ref="detailDialog"
      class="detail"
      aria-labelledby="detail-title"
      @close="onDialogClose"
      @cancel="onDialogCancel"
      @click="onBackdropClick"
    >
      <div v-if="detailOpen && detailProject" class="detail-inner">
        <div class="detail-head">
          <div>
            <span class="detail-tag">[ 图 {{ detailProject.no }} / 详情 ]</span>
            <h2 id="detail-title">{{ detailProject.name }}</h2>
          </div>
          <button type="button" class="detail-close" aria-label="关闭详情" @click="closeDetail">
            <span aria-hidden="true">×</span> 关闭
          </button>
        </div>
        <div class="detail-body">
          <p class="detail-desc">{{ detailProject.desc }}</p>
          <p class="detail-note">[ 占位图 ] 以下为界面示意，正式截图待替换。</p>
          <ul class="shots">
            <li v-for="(s, i) in detailProject.shots ?? []" :key="s.src" class="shot">
              <figure>
                <img :src="s.src" :alt="s.alt" width="260" height="520" loading="lazy" decoding="async" />
                <figcaption><span>[ {{ String(i + 1).padStart(2, '0') }} ]</span> {{ s.caption }}</figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </dialog>
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
  a:focus-visible, button:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }

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

  /* ---------- 详情层（原生 dialog） ---------- */
  .p-link.is-detail {
    width: 100%;
    padding: 16px 0 0;
    border: 0;
    border-top: 1px solid var(--grid);
    background: none;
    font: inherit;
    color: var(--ink);
    text-align: left;
    cursor: pointer;
  }
  .p-link.is-detail:hover { border-top-color: var(--ink); }
  .p-link.is-detail:hover .arrow { transform: translateX(4px); }

  .detail {
    --dlg-out: 160ms;
    width: min(92vw, 780px);
    max-height: min(88vh, 860px);
    padding: 0;
    border: 1px solid var(--ink);
    border-radius: 0;
    background: var(--paper);
    color: var(--ink);
    font-family: var(--mono);
    overflow: auto;
    animation: dialog-in-blueprint 200ms cubic-bezier(.2, .8, .2, 1) both;
  }
  .detail::backdrop { background: rgba(31, 58, 95, .42); animation: backdrop-in 200ms ease-out both; }
  .detail.is-closing { animation: dialog-out-blueprint var(--dlg-out) ease-in both; }
  .detail.is-closing::backdrop { animation: backdrop-out var(--dlg-out) ease-in both; }
  /* 内容只淡入：translateY 会被 overflow:auto 计入可滚动范围，入场时闪出滚动条 */
  .detail-inner { animation: detail-fade 220ms 60ms both; }
  .detail-head {
    position: sticky;
    top: 0;
    z-index: 1;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    padding: 20px 24px 16px;
    background: var(--paper);
    border-bottom: 1px solid var(--line);
  }
  .detail-tag { font-size: 10.5px; letter-spacing: .12em; color: var(--accent); }
  .detail-head h2 {
    margin: 8px 0 0;
    font-family: var(--sans);
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -.02em;
  }
  .detail-close {
    flex: none;
    min-height: 44px;
    padding: 0 12px;
    border: 1px solid var(--line);
    border-radius: 0;
    background: transparent;
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: .1em;
    color: var(--ink);
    cursor: pointer;
  }
  .detail-close:hover { border-color: var(--ink); background: #FFFFFF; }
  .detail-close span { margin-right: 6px; font-size: 16px; }
  .detail-body { padding: 20px 24px 28px; }
  .detail-desc { margin: 0; max-width: 60ch; font-size: 12.5px; line-height: 1.85; color: var(--muted); }
  .detail-note { margin: 12px 0 0; font-size: 10.5px; letter-spacing: .06em; color: var(--accent); }
  .shots {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
    margin: 24px 0 0;
    padding: 0;
    list-style: none;
  }
  .shot { min-width: 0; }
  .shot figure { margin: 0; border: 1px solid var(--line); background: #FFFFFF; }
  .shot img { display: block; width: 100%; height: auto; aspect-ratio: 260 / 520; object-fit: cover; }
  .shot figcaption {
    padding: 10px 12px;
    border-top: 1px solid var(--line);
    font-size: 10.5px;
    letter-spacing: .04em;
    color: var(--muted);
  }
  .shot figcaption span { margin-right: 6px; color: var(--accent); }

  /* 图纸落定：只动 opacity / transform，走合成层，不触发重排 */
  @keyframes dialog-in-blueprint {
    from { opacity: 0; transform: translateY(-10px) scale(.985); }
    to { opacity: 1; transform: none; }
  }
  @keyframes dialog-out-blueprint {
    from { opacity: 1; transform: none; }
    to { opacity: 0; transform: translateY(-6px) scale(.99); }
  }
  @keyframes backdrop-in { from { opacity: 0; } to { opacity: 1; } }
  @keyframes backdrop-out { from { opacity: 1; } to { opacity: 0; } }

  @keyframes detail-fade { from { opacity: 0; } to { opacity: 1; } }

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
    .shots { grid-template-columns: 1fr; }
    .detail-head, .detail-body { padding-left: 16px; padding-right: 16px; }
  }
  @media (prefers-reduced-motion: reduce) {
    .portfolio-root *, .portfolio-root *::before, .portfolio-root *::after {
      animation: none !important;
      transition: none !important;
    }
    /* ::backdrop 不是元素后代，通配选择器覆盖不到，需单独关掉 */
    .detail::backdrop { animation: none !important; }
  }
</style>
