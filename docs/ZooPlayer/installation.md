---
title: 安装
order: 2
---
# 

## 原生JS使用

## Packges

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

### CDN
引入
```shell
<script src="https://unpkg.com/zooplayer@lastest/dist/zooplayer.js"></script>
```
使用
```html
<script>
const player = new ZPlayer({
    el: "#app",
    video: {
        src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
    }
})

player.mount()
</script>
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

## React中使用
开发中....