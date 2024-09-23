---
# translate to English
layout: home

hero:
  name: "GXDE OS: Continues"
  text: "With the updated kernel GXDE, DDE 15 returns to focus"
  tagline: GXDE, Gorgeous eXtended Deepin Environment
  actions:
    - theme: brand
      text: Install now
      link: ./install
    - theme: alt
      text: Compile it yourself?
      link: https://gitee.com/GXDE-OS
  image:
    src: /logo.png
    alt: GXDE OS Logo

features:
  - title: 🌈Classic Design
    details: Adopting the classic DDE 15 UI, the first generation classic is worth remembering
  - title: 🏡Brand New Kernel
    details: Outdated deepin 15 kernel limits software compatibility. This system revives the classic design with a new Debian kernel
  - title: 📌Wonderful Applications
    details: In order to use the system easily, some wonderful applications have been installed such as Wine Runner, Spark Store and so on
  - title: 🌏More Architectures
    details: Supporting diverse CPU architectures (amd64, arm64, loong64) to enable wider use of this classic desktop
---

## Image Display

<el-carousel type="card" height="24vw" indicator-position="none">
  <el-carousel-item v-for="item, k in previewSrcList" :key="item">
    <el-image preview-teleported :preview-src-list="previewSrcList" :src="item" :initial-index="k" />
  </el-carousel-item>
</el-carousel>

## Have any questions? Contact us!

Contact information can be found in the website navigation bar.

## Excellent communication environment

You can go to our QQ group chat for feedback. Our group chat environment is excellent.

## Go to the project homepage to submit an issue

Our system is open source, you can go to the open source homepage to provide suggestions or bugs.

::: info Open Source License: Free
Our system is open source and completely free, but please abide by the open source agreement.
:::

::: tip Support us: Sponsor
Sponsorship is our source of continuation! Thank you for your support!

[Sponsor us](https://gitee.com/GXDE-OS#%E8%AF%B7%E4%BD%9C%E8%80%85%E5%96%9D%E6%9D%AF%E8%8C%B6)
:::

<script setup>
import { ElCarousel, ElCarouselItem, ElImage, ElImageViewer } from 'element-plus';
// import 'element-plus/es/components/carousel/style/css';
// import 'element-plus/es/components/carousel-item/style/css';
// import 'element-plus/es/components/image/style/css';
// import 'element-plus/es/components/image-viewer/style/css';

const previewSrcList = [
  '/1.png',
  '/2.png',
  '/3.png',
  '/4.png',
  '/5.png',
  '/6.png',
];
</script>
