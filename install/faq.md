# FAQ

::: tip
页面施工中，条目仍在增加，欢迎提 Issue
:::

::: info
欢迎点右上角 Star，您的肯定是我们的最大动力
:::

请在 https://gitee.com/GXDE-OS/GXDE/board 看板处追踪我们的开发进度

---

Q0: 使用 `apt` 下载好慢，能不能改善下服务器？

A0: 我们使用多线下载来解决此问题，使用 `aptss` 命令替换 `apt` 即可畅享极速下载


---

Q1: 在控制中心-->蓝牙只能刷新蓝牙列表，无法操作连接

A1: 这是已知问题，暂时未能修复，请执行以下指令

```
sudo aptss install blueman -y
```

随后在启动器中找到`蓝牙管理器`并启动即可

给您带来的不便深感抱歉


---

Q2: 如何制作启动盘？

A2: Legacy启动推荐rufus用dd模式写入，EFI则使用[深度启动盘制作工具](https://www.deepin.org/zh/original/deepin-boot-maker/)即可


---

Q3: 我需要安装N卡驱动/xDroid安卓模拟器，我需要较旧的内核

A3: 安装 `linux-kernel-oldstable-gxde-amd64` 这个包后用此内核启动安装 xdroid / nvidia-driver 包即可

A3: 对于N卡驱动，若您不想降级内核，您也可[手动安装驱动](https://bbs.deepin.org/post/232923)以避免此问题

---

Q4: 什么是内测？ 我想要加入内测该怎么做？

A4: 最新的开发进度会加入内测中，想要体验最新的内容可加入内测，但是内测同样不稳定，建议有一定基础的用户加入

A4: 15.14 开始，可在控制中心一键加入内测， 详见： https://www.bilibili.com/video/BV1FgsvenEjq

A4: 请加入我们的QQ群来反馈: 881201853

---

Q5：我使用KVM虚拟机启动GXDE OS，色彩有问题，粉粉的

A5： kvm -vga virtio 

---

Q6: 我想开发 GXDE 风格的应用，我该怎么做

A6: 使用bash/python脚本的应用可以使用 [Garma](https://gitee.com/GXDE-OS/garma),使用方法详见： https://help.gnome.org/users/zenity/stable/ 

A6: 原生开发请使用 Qt/Dtk2 相关代码如下： 

可用功能列表： https://gitee.com/GXDE-OS/dtk5core/tree/master/src

可用控件列表： https://gitee.com/GXDE-OS/dtk2widget/tree/master/src/widgets