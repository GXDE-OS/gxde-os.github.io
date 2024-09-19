# FAQ

::: tip
页面施工中，条目仍在增加，欢迎提 Issue
:::

Q1: 我正在使用古老的电脑/虚拟机，需要使用 Legacy BIOS 启动，而使用 GXDE 安装盘进行安装时报错grub安装失败

A1: Legacy BIOS 暂时只支持用Debian安装器进行安装，在引导界面选择Advanced options后选择Install进行安装

---

Q2: 我已经安装了Debian 12/我在使用Arm/i386/mips64的 Debian 12/loong64架构的debian port,想要安装 GXDE ，我该怎么做？

A2: 加源安装GXDE

加源安装方法

下载deb并安装 https://pan.huang1111.cn/s/k2nRvuB

安装之后

```bash
sudo apt update

sudo apt install spark-store -y

sudo aptss install gxde-testing-source -y

sudo aptss install gxde-desktop gxde-desktop-extra -y

```

---

Q3: 如何制作启动盘？

A3: Legacy启动推荐rufus用dd模式写入，EFI则使用深度启动盘制作工具即可


---

Q4: nvidia-driver安装失败

A4: 请手动安装闭源驱动，或者安装 `linux-kernel-oldstable-gxde-amd64 
linux-kernel-oldstable-gxde-amd64` 这个包后用此内核启动重新安装


---

Q5: 因特尔/螃蟹网卡 安装后无法打开无线网络

A5: `sudo aptss install firmware-iwlwifi firmware-realtek -y`  此问题将在 15.14 解决
