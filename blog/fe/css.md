# 纯 css 动画

## 1

<div class="box1">
  <span class="text">自由早晚乱余生</span>
</div>

## 🐥

<div class="box2">
  <div class="bounce-top">🏀</div>
</div>

## 3

<div class="box3">
  <span class="heart">❤️</span>
</div>

## 4

<div class="box5">
  <div class="bird">🐥</div>
</div>

## 5

<div class="box4">
  <div class="loader"></div>
</div>

<!-- 下面真实代码 -->
<style lang="scss">
  .box1 {
    padding-top: 14px;
    .text {
      display: inline-block;
      background: orange;
      color: white;
      margin: auto;
      padding: .3em 1em .5em;
      border-radius: 3px;
      box-shadow: 0 0 .5em orange;
      animation: shake-baidu 2s ease 0s infinite;
      /* animation-play-state: paused; */
      /* animation-play-state: running; */
      cursor: pointer;
      user-select: none;
    }
    @keyframes shake-baidu {
      from    { transform: rotate(0deg); }
      4%      { transform: rotate(5deg); }
      12.5%   { transform: rotate(-5deg); }
      21%     { transform: rotate(5deg); }
      29%     { transform: rotate(-5deg); }
      37.5%   { transform: rotate(5deg); }
      46%     { transform: rotate(-5deg); }
      50%,to  { transform: rotate(0deg); }
    }
  }
  
  .box2 {
    .bounce-top {
      display: inline-block;
      margin-top: 38px;
      height: 42px;
      border-radius: 4px;
      animation: bounce-top .9s both infinite;
      /* animation-delay: 5s; */
      font-size: 60px;
      text-align: center;
      line-height: 42px;
      @keyframes bounce-top {
        0%{transform:translateY(-45px);animation-timing-function:ease-in;opacity:1}
        24%{opacity:1}
        40%{transform:translateY(-24px);animation-timing-function:ease-in}
        65%{transform:translateY(-12px);animation-timing-function:ease-in}
        82%{transform:translateY(-6px);animation-timing-function:ease-in}
        93%{transform:translateY(-4px);animation-timing-function:ease-in}
        25%,55%,75%,87%{transform:translateY(0);animation-timing-function:ease-out}
        100%{transform:translateY(0);animation-timing-function:ease-out;opacity:1}
      }
    }
  }
  .box3 {
    padding-top: 14px;

    .heart {
      display: inline-block;
      font-size: 52px;
      animation: heartbeat 1.5s ease-in-out infinite both;
    }
    @keyframes heartbeat {
      from{transform:scale(1);transform-origin:center center;animation-timing-function:ease-out}
      10%{transform:scale(.88);animation-timing-function:ease-in}
      17%{transform:scale(.95);animation-timing-function:ease-out}
      33%{transform:scale(.84);animation-timing-function:ease-in}
      45%{transform:scale(1);animation-timing-function:ease-out}
    }
  }
  .box4 {
    padding-top: 14px;

    .loader {
      width: 48px;
      height: 48px;
      margin: auto;
      position: relative;
    }

    .loader::before {
      content: '';
      width: 48px;
      height: 5px;
      background: #a4abd650;
      position: absolute;
      top: 60px;
      left: 0%;
      border-radius: 50%;
      animation: shadow01 0.5s linear infinite;
    }

    .loader::after {
      content: '';
      width: 100%;
      height: 100%;
      background: #a4abd6;
      position: absolute;
      top: 0;
      left: 0%;
      border-radius: 4px;
      animation: jump01 0.5s linear infinite;
    }

    @keyframes jump01 {
      15% {
        border-bottom-right-radius: 3px;
      }

      25% {
        transform: translateY(9px) rotate(22.5deg);
      }

      50% {
        transform: translateY(18px) scale(1, 0.9) rotate(45deg);
        border-bottom-right-radius: 40px;
      }
      75% {
        transform: translateY(9px) rotate(67.5deg);
      }
      100% {
        transform: translateY(0) rotate(90deg);
      }
    }

    @keyframes shadow01 {
      0%,
      100% {
        transform: scale(1, 1);
      }
      50% {
        transform: scale(1.2, 1);
      }
    }
  }
  .box5 {
    font-size: 60px;
    .bird {
      animation: slide-in-elliptic-top-fwd 1.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both infinite;
    }
    @keyframes slide-in-elliptic-top-fwd {
      0% {
        transform: translateY(-600px) rotateX(-30deg) scale(0);
        transform-origin: 50% 100%;
        opacity: 0;
      }
      100% {
        transform: translateY(0) rotateX(0) scale(1);
        transform-origin: 50% 1400px;
        opacity: 1;
      }
    }
    @keyframes slide-in-elliptic-top-fwd {
      0% {
        transform: translateY(-600px) rotateX(-30deg) scale(0);
        transform-origin: 50% 100%;
        opacity: 0;
      }
      100% {
        transform: translateY(0) rotateX(0) scale(1);
        transform-origin: 50% 1400px;
        opacity: 1;
      }
    }
  }
</style>
