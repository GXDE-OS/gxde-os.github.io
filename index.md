---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "GXDE OS：经典延续"
  text: "美观、轻量、开箱即用的 Linux 发行版"
  tagline: 基于更新底层的 GXDE，让 DDE 15 重回人们的视野
  actions:
    - theme: brand
      text: 下载 GXDE OS
      link: ./install
    - theme: alt
      text: 源码仓库
      link: https://gitee.com/GXDE-OS
  image:
    src: /logo.png
    alt: GXDE OS Logo

features:
  - title: 🌈经典设计
    details: 采用经典 DDE 15 设计语言，一代经典，值得回忆
  - title: 🏡全新内核
    details: 采用全新 Debian 内核，在经典设计的基础上获得全新现代化体验
  - title: 📌精品应用
    details: 内置 Wine 运行器、星火应用商店等精品应用，获得开箱即用的体验
  - title: 🌏多架构适配
    details: 兼容 i386、amd64、arm64、mips64el、loong64 等 CPU 架构，为更多机器带回经典
  - title: 🤖安卓应用支持
    details: 只需点击几下，即可轻松安装 Android 应用
---

## 图片展示

<el-carousel type="card" height="24vw" indicator-position="none">
  <el-carousel-item v-for="item, k in previewSrcList" :key="item">
    <el-image preview-teleported :preview-src-list="previewSrcList" :src="item" :initial-index="k" />
  </el-carousel-item>
</el-carousel>

## 遇到问题？联系我们！

联系方式见网站导航栏（

### 优秀的交流环境

你可以前往我们的 QQ 群聊以反馈。我们的群聊环境非常优秀。

### 前往项目首页提 Issue

我们的系统是开源的，你可以前往开源首页提建议或者 bug。

::: info 开源许可：免费
我们的系统是开源的，完全免费，不过请遵守开源协议。
:::

::: tip 支持我们：赞助
赞助是我们继续的源泉！感谢您的支持！

[赞助我们](https://gitee.com/GXDE-OS#%E8%AF%B7%E4%BD%9C%E8%80%85%E5%96%9D%E6%9D%AF%E8%8C%B6)
:::

<script setup>
import { ElCarousel, ElCarouselItem, ElImage, ElImageViewer } from 'element-plus';

const previewSrcList = [
  '/1.png',
  '/2.png',
  '/3.png',
  '/4.png',
  '/5.png',
  '/6.png',
];
</script>
