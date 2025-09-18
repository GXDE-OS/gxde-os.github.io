# 如何安装 GXDE？

## 镜像安装



镜像站下载（教育网联合镜像站）：https://mirrors.cernet.edu.cn/GXDE/ISO/

官方下载： https://repo.gxde.top/ISO/

镜像源列表：[点击这里查看](mirrors.md)

旧版/不常用架构版本存档：https://pan.baidu.com/s/1dsJSUhHiMg4tPHTq9IDpJw?pwd=GXDE 提取码: GXDE

Sourceforge：https://sourceforge.net/projects/gxde-os/files


未提供安装镜像的架构安装方法可以参考：[APT 源安装](#apt-源安装)

GXDE 仍不完美，请在安装前确认 [FAQ](faq.md) 中的事项，包括了 Nvidia 显卡驱动安装指南等

---

小白安装：若不会分区，可空出一块磁盘，在安装时选择整块磁盘安装即可。

EFI 安装：必须分一块格式为 vfat/fat32 的分区，挂载点选择 /boot/efi，剩余可按需求分区  

因为 Loongarch Debian 上游尚不稳定，故 GXDE loong64 是基于 deepin 25 构建的，代号为`核桃`，未启用磐石  

安装镜像锁屏密码：`live`  


### Mips
**因为一些原因，mips64el 架构只提供了 Qemu 镜像，只支持在 mips64 架构的 UOS20、Loongnix20、银河麒麟使用，暂不支持 uos25 以及非 mips64 架构机器**  
使用前需手动给予 run.sh 运行权限，并安装 qemu-system  
qemu-system 安装命令：  
```bash
sudo apt install qemu-system qemu-system-gui -y
```
虚拟机默认密码为：`gxde`  
下载链接：https://repo.gxde.top/TGZ/mips64el-qemu/  
![虚拟机截图](/install/mips-qemu.jpg)  

### 核桃支线镜像下载链接
GXDE 核桃支线是基于 deepin25 的（具体代号定义可见： https://www.gxde.top/install/#%E7%B3%BB%E7%BB%9F%E4%BB%A3%E5%8F%B7 ），当前处于demo阶段，请勿用于生产环境 
 
**⚠️注意：该 ISO 并未开启磐石，且与源内的 DDE 冲突**  
  
目前提供了 amd64、arm64、loong64 的 ISO，使用的不是 deepin 默认的安装器  

> 因为服务器空间有限，amd64、arm64 的 ISO 只提供了网盘下载链接

123盘：https://www.123865.com/s/pDSKVv-B4PWv  
百度网盘：链接:https://pan.baidu.com/s/1L9A6q-xrkgKfZ_LIyfbDMQ?pwd=c7ps  
城通网盘: https://ctfile.gfdgdxi.top#/d/31540479-61968823-1bd7af?p=2061 (访问密码: 2061)  

loong64 架构的 ISO 可以从上面的镜像站里下载，亦可从网盘下载  


## APT 源安装
> amd64、arm64、loong64 等已经有 ISO 安装镜像的，建议使用 ISO 安装  
> 目前支持 i386、amd64、arm64、mips64、loong64 和 riscv64 架构（riscv64 下未测试）   
> amd64、arm64 支持在 Debian 13/12 下安装使用，i386、mips64 支持在 Debian 12 下安装使用，loong64 支持在 deepin25 下安装使用，riscv64 支持在 Debian 13/deepin25 下使用

使用 deb 包安装 APT 源：

| 目标系统代号 | 支持发行版 | deb 包下载地址 |
| --- | --- | --- |
| lizhi | Debian 13 | https://repo.gxde.top/gxde-os/lizhi/g/gxde-source/ |
| bixie | Debian 12 | https://repo.gxde.top/gxde-os/bixie/g/gxde-source/ |
| hetao | deepin 25 | https://repo.gxde.top/gxde-os/hetao/g/gxde-source/ |

::: warning
**请根据自己的系统版本下载对应的包，否则安装时会出现依赖错误**
:::

:::warning
**从 GXDE 2025 开始直接基于 Debian backports 构建，在您安装 `gxde-source` 包后将会自动添加 Debian Backports 源**
:::

安装之后，执行以下命令安装 GXDE 桌面环境：

```bash
sudo apt update

sudo apt install aptss

sudo apt install gxde-testing-source -y  # 添加内测源

sudo aptss update

sudo aptss install gxde-desktop gxde-desktop-extra -y

sudo aptss install spark-store -y  # 此命令只支持 amd64, arm64, loong64 架构用户

```

执行完毕后，重启电脑即可。

> `aptss` 可以加速在 GXDE 系统源的下载速度，但如果您的性能低下导致 `aptss` 运行缓慢到无法接受，可换成 `apt`

**GXDE与KDE有可能的冲突，请不要同时安装它们，这可能会带来错误**

## 在 Docker 使用 GXDE
> RDPDocker是一个带有X11个和桌面环境的Docker镜像构建和容器创建工具，支持创建Ubuntu、Debian、ArchLinux、Fedora系统，支持Lingmo、GNOME、Xfce4、X11、SSH等环境。同时，允许用户通过NoMachine、RDP、VNC、SSH等方式远程访问容器。本工具以非虚拟化和极低开销的情况下，实现了多用户共享一台主机的办法，同时创建极快，随用随开，并且只占用内存、磁盘极少的空间，只需要主机安装Docker即可，支持无桌面的Linux服务器、WSL2、LXC、安卓手机运行。

具体可见：https://github.com/PIKACHUIM/RDDocker  

![RDPDocker 图1](/RDDocker/Manager.jpg)
![RDPDocker 图2](/RDDocker/Remote.jpg)

## 在 Android 上使用 GXDE
### 在小小电脑上使用 GXDE
> 给所有安卓 arm64 设备的“PC 应用引擎”平替。

小小电脑 `1.0.19` 开始支持 GXDE，该版本与小小电脑团队合作开发，仍处于测试阶段  
如需反馈 bug，可至 https://github.com/Cateners/tiny_computer/issues/129  

::: warning
从 1.0.99 起，软件已改用发布密钥进行构建，不再使用之前的调试密钥。**因此，无法从旧版本升级到当前版本。**  

如需将软件内的文件导出，请参考[此教程](/tiny-computer/fileaccess.md)。
:::

::: warning
如果你想从v1.0.10及以后的版本升级，请务必在启动后进行重置启动命令(在高级设置)和重新安装引导包(在全局设置)操作，否则新功能可能无法使用。  

默认情况下，即使更新了本软件，引导包、快捷指令、容器系统也并不会被更新。  

软件只支持arm64设备，默认用户tiny密码tiny，vnc端口5904密码12345678，novnc端口36082，pulseaudio端口4718，Termux X11占用端口7897；本软件不会和termux冲突。  
:::

::: info
1.0.100 及以上版本包括一个带有 targetSdk 35 的变体，它可以在安装过程中避免 Google Play 警告，例如“此应用程序是为旧版本的 Android 构建的”或“不安全的应用程序被阻止”——但代价是失去 Wine 兼容性。因此，我禁用了“Windows 应用程序支持”选项。
:::

下载链接：  
镜像站下载（推荐）：https://mirrors.cernet.edu.cn/GXDE/APK/   
Github 下载（选择带 gxde 后缀的 APK）：https://github.com/Cateners/tiny_computer/releases

> 注：如果界面操作卡顿可以在控制中心 -> 个性化 关闭特效模式，假若控制中心无法开启可尝试在 GXDE 自带的系统助手的工具箱内升级到最新版本

小小电脑项目地址：https://github.com/Cateners/tiny_computer  

![](/tiny-computer.jpg)

### 在 Neo Desktop 使用 GXDE
> 一个超级启动器，支持搭配 AR 眼镜，或者物理显示器，让设备实现多屏异显。

具体可参见：https://nightmare.press/  
![Neo Desktop](/neodesktop/0.jpg)


### 在 Termux PRoot 或其他安卓设备上安装

请查看 https://bbs.deepin.org.cn/post/279414
