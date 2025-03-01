# KMRE 修改版

## 修改内容

* 支持 GXDE OS 以及其他基于 Debian 12 的 Linux 发行版（默认内核或 GXDE 内核，自行编译内核需开启 binder 相关选项并合并此 patch：https://gitee.com/GXDE-OS/gxde-kernel/blob/master/patch/export-symbols-needed-by-android-drivers.patch）
* 新增支持获取 DDE/KDE 缩放比例，不再仅 UKUI 可用
* 生成的 .desktop文件添加X-GXDE-KMREAPP=true、X-GXDE-KMRE-PKGNAME标签以支持一键卸载安卓应用
* 生成的 .desktop 添加 gxme 前缀 ，避免出现与 UOS 标准包名撞车
* 支持通过 CLI 安装或卸载 apk 应用，并定义相应的返回值方便 deb 打包
* 支持双击 apk 一键安装应用

## 体验方法

0. 加源
   
   对于 GXDE OS，您无需在此步做任何操作
   
   对于其他基于 Debian 12 的 Linux 发行，请参考下方链接添加 GXDE OS 源。您不必安装桌面，仅添加源即可
   
   https://www.gxde.top/install/install#apt-%E6%BA%90%E5%AE%89%E8%A3%85
1. 安装

前往 星火应用商店 搜索 KMRE 并一键安装 即可

![图片.png](/news/development/kmre-on-debian-gxde/202501261534476872_图片.png)

或使用命令

`sudo aptss install kmre -y`

稍等片刻即可在启动器中看到 KMRE

![图片.png](/news/development/kmre-on-debian-gxde/202501261536273237_图片.png)

![图片.png](/news/development/kmre-on-debian-gxde/202501261538027913_图片.png)

2. 安装应用

对 deb 包点击右键 即可使用 KMRE 安装器进行一键安装

![图片.png](/news/development/kmre-on-debian-gxde/202501261538259106_图片.png)

![图片.png](/news/development/kmre-on-debian-gxde/202501261539045466_图片.png)

![图片.png](/news/development/kmre-on-debian-gxde/202501261539195214_图片.png)

随后即可在启动器中找到入口

![图片.png](/news/development/kmre-on-debian-gxde/202501261546298081_图片.png)

## 应用卸载

* 对于 GXDE OS ，您在更新系统到最新（gxde-app-uninstaller >= 1.4.0) 后可直接对启动器图标右键卸载
* 对于其他桌面环境，请执行 `kmre-app-installer uninstall 软件包名` 来卸载应用

## deepin 移植计划

像先前的所有 GXDE 生态应用一样，KMRE 也被讨论移植到 deepin 上游，但：

* deepin 20 已经失去支持，且有 UEngine 可用
* deepin 23 预期接近生命周期终点，适配可能不再有意义
* deepin 25 仍在 Preview 阶段，前期适配可能会在更新后被破坏，且磐石系统非常阻碍移植
* 子系统或ACE兼容环境无法支持嵌套容器，因此无法支持 KMRE

因此，团队暂缓进行 deepin 适配，计划在深度官方宣布 23 的维护计划或 25 磐石系统相关文档后再重新开展

UOS 建议使用官方提供的 UEngine 或 xDroid 以避免不稳定的情况

## 源码地址

https://gitee.com/GXDE-OS/kmre

https://gitee.com/GXDE-OS/kylin-kmre-window

https://gitee.com/GXDE-OS/kylin-kmre-manager

https://gitee.com/GXDE-OS/kylin-kmre-emugl

https://gitee.com/GXDE-OS/kylin-kmre-apk-installer

https://gitee.com/GXDE-OS/kylin-kmre-display-control

https://gitee.com/GXDE-OS/kylin-kmre-daemon

https://gitee.com/GXDE-OS/kylin-kmre-modules-dkms

https://gitee.com/GXDE-OS/libkylin-kmre
