---
# translate to English
layout: home

hero:
  name: "GXDE OS: Continues"
  text: "A Linux distro that is beautiful, light weight and out-of-the-box"
  tagline: We bring back DDE 15 with an updated basis on GXDE
  actions:
    - theme: brand
      text: Install GXDE OS
      link: ./install
    - theme: alt
      text: Open Source Repo
      link: https://gitee.com/GXDE-OS
    - theme: alt
      text: DistroWatch排名
      link: https://distrowatch.com/table.php?distribution=GXDE
  image:
    src: /logo.png
    alt: GXDE OS Logo

features:
  - title: 🌈Classic Design
    details: Continue with the DDE 15 UI, which is regarded as classic and worth remembering
  - title: 🏡Brand New Kernel
    details: Provide with newer Debian kernel, giving a modern experience with claasic design 
  - title: 📌Wonderful Applications
    details: Pre-installed applications like Wine Runner, Spark Store and so on makes the system out-of-the-box
  - title: 🌏More Architectures
    details: Support multiple CPU architectures (i386, amd64, arm64, mips64el, loong64, riscv64) to enable wider support
  - title: 🤖Android App Support
    details: You can install Android apps easily with a few clicks
---

## Picture Gallery

<el-carousel type="card" height="24vw" indicator-position="none">
  <el-carousel-item v-for="item, k in previewSrcList" :key="item">
    <el-image preview-teleported :preview-src-list="previewSrcList" :src="item" :initial-index="k" />
  </el-carousel-item>
</el-carousel>

## Any questions? Contact us!

You can join our Discord server at https://discord.gg/t5Uf2xYpvA. Other contact information can be found on the website navigation bar.

## Excellent communication environment

Our group chat environment is excellent.

## Go to the project homepage to submit an issue

Our system is open source. You can go to the project website to provide suggestions or report bugs.

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
  '/1.jpg',
  '/2.jpg',
  '/3.jpg',
  '/4.jpg',
  '/5.jpg',
  '/6.jpg',
];
</script>
