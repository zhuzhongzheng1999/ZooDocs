---
title: 快速开始
order: 3
---
#

## 原生JS使用

使用npm或yarn安装


::: code-tabs
@tab:active npm
```bash
npm i zooplayer
```

@tab yarn
```bash
yarn add zooplayer
```
:::

然后引入到项目中即可
```javascript
import ZPlayer from 'zooplayer'

const player = new ZPlayer({
    el: "", // 指定挂载的选择器
    video: {
        src: "" // 视频播放地址
    }
})

player.mount()
```

## Vue中使用

使用npm或yarn安装

::: code-tabs
@tab:active npm
```bash
npm i zooplayer @zooplayer/vue
```

@tab yarn
```bash
yarn add zooplayer @zooplayer/vue
```
:::

全局注册
```javascript
import ZPlayer from "./player"

Vue.use(ZPlayer);
```

> 可参考提供原生JS和Vue版的[Example](https://github.com/zhuzhongzheng1999/ZooPlayer/tree/master/example)