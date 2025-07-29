# FAQ

::: tip
页面施工中，条目仍在增加，欢迎提 Issue
:::

::: info
欢迎点右上角 Star，您的肯定是我们的最大动力
:::


---

Q0: 自带的输入法不太好用啊，能不能换/使用搜狗/讯飞/其他输入法？

A0: 请看 https://bbs.spark-app.store/d/2051

---



Q1: 使用 `apt` 下载好慢，能不能改善下服务器？

A1: 我们使用多线下载来解决此问题，使用 `aptss` 命令替换 `apt` 即可畅享极速下载。可通过安装软件包  `apt-is-aptss` 来让 aptss 直接接管 apt 

A1: **建议安装后进行一次升级，执行 `yes | sudo aptss full-upgrade -y`**



---

Q2: 如何制作启动盘？

A2: Legacy 启动推荐 rufus 用 dd 模式写入，EFI 则使用[深度启动盘制作工具](https://www.deepin.org/zh/original/deepin-boot-maker/)即可


---

Q3: 我需要安装 xDroid 安卓模拟器，我需要较旧的内核

A3: 安装 `linux-kernel-oldstable-gxde-amd64` 这个包后用此内核启动安装 xdroid 包即可

A3: 对于N卡驱动，nvidia-driver 包已经更新

---

Q4: 什么是内测？ 我想要加入内测该怎么做？

A4: 最新的开发进度会加入内测中，想要体验最新的内容可加入内测，但是内测同样不稳定，建议有一定基础的用户加入

A4: `15.14` 开始，可在控制中心一键加入内测， 详见： https://www.bilibili.com/video/BV1FgsvenEjq

A4: 请加入我们的 QQ 群来反馈: 881201853

---

Q5：我使用 KVM 虚拟机启动 GXDE OS，色彩有问题，粉粉的

A5：`kvm -vga virtio`

---

Q6: 我想开发 GXDE 风格的应用，我该怎么做

A6: 使用 bash/python 脚本的应用推荐使用 [Garma](https://gitee.com/GXDE-OS/garma)，使用方法详见： https://help.gnome.org/users/zenity/stable/

A6: 原生开发请使用 QT/DTK2 相关代码如下： 

可用功能列表：https://gitee.com/GXDE-OS/dtk5core/tree/master/src

可用控件列表：https://gitee.com/GXDE-OS/dtk2widget/tree/master/src/widgets

---

Q7：我想使用 Android 应用，我该怎么做

A7：当前只支持 amd64、arm64 架构且必须使用 GXDE OS ISO 安装镜像安装的机器，如果您的机器符合上述条件，只需在星火应用商店搜索以下应用一键安装即可  
spk 链接：[spk://store/tools/kmre](spk://store/tools/kmre)
安装完后需要重启电脑才能正常启动 Android 环境哦  
![Installing KMRE from the Spark App Store](/news/15.14.3/kmre-on-spark-store.jpg)  

---

Q8：我在 Loongnix25 上无法使用星火应用商店/一些旧世界软件，我该怎么做  
A8：因为 liblol 和 loongnix 25 的 abi-compat 冲突，所以你需要删除 abi-compat  
在终端输入以下命令然后重启即可正常使用星火应用商店/旧世界应用：  
```bash
sudo apt purge abi-compat
```

---

Q9：我的电脑在安装/运行 GXDE 时显示异常，如下图，我该怎么办才能恢复正常  
![特效模式异常](/install/display-error.jpg)  
A9：因 7a1000、N 卡以及部分老显卡暂不支持启用特效模式，故您只需在控制中心手动关闭特效模式或按下键盘快捷键 `Windows` + `Shift` + `Tab` 关闭特效模式即可  