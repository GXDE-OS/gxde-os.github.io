# 如何安装 GXDE？

## 镜像安装

### ⚠️注：海思、盘古镜像比较特殊，只推荐有折腾经验的用户安装，小白请勿安装，以及海思、盘古芯片用户请将GXDE安装到移动硬盘，不要修改调整机器硬盘里的任何分区，否则会导致电脑无法启动且无法重装系统

**注：飞腾、鲲鹏用户请下载 arm64 文件夹内的镜像，盘古m900用户（擎云 w525）请下载 arm64-pangu-m900 文件夹内的镜像，海思 9000c 用户（擎云w515x / w585）请下载 arm64-hisi9000c 文件夹内的镜像，其它海思芯片暂不支持**  

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

gxde Loongarch 现在有两个版本,分别为

1. lizhi 主线(基于第三方的 Debian13 制作,从25.4.1开始启用)

2. hetao (基于 deepin 25 构建,未启用磐石)

安装镜像锁屏密码：`live`    

因 riscv64 架构设备没有较为统一的标准，故 GXDE 提供的 riscv ISO 安装镜像只支持在 qemu 下运行，输入命令 `sudo apt install qemu-system qemu-efi-riscv64` 安装 qemu  

输入以下命令启动 Qemu：  
```bash
qemu-system-riscv64 \
    -smp 16 -m 8G -cpu rv64 \  # -smp 为虚拟的 CPU 数量，-m 为分配的内存大小
    -machine virt,acpi=off \
    -device virtio-scsi-pci,id=scsi \
    -drive if=pflash,format=raw,unit=0,file=/usr/share/qemu-efi-riscv64/RISCV_VIRT_CODE.fd,readonly=on \   # 指定 riscv64 UEFI
    -device virtio-sound-pci,audiodev=deepinaudio -audiodev alsa,id=deepinaudio \
    -device qemu-xhci,id=xhci -device usb-tablet,bus=xhci.0 -device usb-kbd,bus=xhci.0 \
    -device virtio-vga-gl -display gtk,gl=on --cdrom iso路径

```


## APT 源安装
> amd64、arm64、mips64el、loong64 等已经有 ISO 安装镜像的，建议使用 ISO 安装  
> 目前支持 i386、amd64、arm64、mips64、loong64 和 riscv64 架构（riscv64 下未测试）   
> amd64、arm64 支持在 Debian 13/12 下安装使用，i386、mips64 支持在 Debian 12 下安装使用，loong64 支持在 deepin25/debian13 下安装使用，riscv64 支持在 Debian 13/deepin25 下使用

使用 deb 包安装 APT 源：

| 目标系统代号 | 支持发行版 | deb 包下载地址 |
| --- | --- | --- |
| lizhi | Debian 13 | https://repo.gxde.top/gxde-os/lizhi/g/gxde-source/ |
| bixie(不推荐使用) | Debian 12 | https://repo.gxde.top/gxde-os/bixie/g/gxde-source/ |
| hetao | deepin 25 | https://repo.gxde.top/gxde-os/hetao/g/gxde-source/ |

::: warning
**请根据自己的系统版本下载对应的包，否则安装时会出现依赖错误**
:::

:::warning
**从 GXDE 25 开始直接基于 Debian backports 构建，在您安装 `gxde-source` 包后将会自动添加 Debian Backports 源**
:::

安装之后，执行以下命令安装 GXDE 桌面环境：

```bash
sudo apt update

sudo apt install aptss

sudo apt install gxde-testing-source -y  # 添加内测源,可不添加

sudo aptss update

sudo aptss install gxde-desktop gxde-desktop-extra -y

sudo aptss install spark-store -y  # 此命令只支持 amd64, arm64, loong64 架构用户

```

执行完毕后，重启电脑即可。

> `aptss` 可以加速在 GXDE 系统源的下载速度，但如果您的性能低下导致 `aptss` 运行缓慢到无法接受，请卸载 apt-is-aptss 这个软件包

**GXDE与KDE有冲突，请不要同时安装它们，这会直接把gxde桌面干掉**

## 在其它 Linux 发行版使用 GXDE
GXDE LSG（Linux subsystem for GXDE）是一个允许用户在其它 Linux 发行版以不破坏原系统的情况下运行 Debian13 + GXDE 桌面环境的工具，基于 systemd-nspawn 制作，可运行星火应用商店等常见应用  
第一次运行会解压资源包，请耐心等待  
用户默认密码：`gxde`  

**注意：**

1、该容器不保证能运行所有的应用，尤其是需要与硬件和系统内核进行交互的应用或驱动

2、UOS/麒麟用户需关闭安全中心的系统保护，否则该容器无法正常运行

3、系统内核版本需至少 5.4 以上

![演示图](/gxde-lsg.jpg)  
![Kylin 演示图](/gxde-lsg-kylin.jpg)  

### 下载链接

源站：https://repo.gxde.top/TGZ/LSG/  
镜像站：https://mirrors.cernet.edu.cn/GXDE/TGZ/LSG/  
现已上架 deepin 应用商店和星火应用商店，可一键下载安装  

![星火应用商店](/news/development/gxde-lsg/spark-store.jpg)

![deepin 应用商店](/news/development/gxde-lsg/deepin-appstore.jpg)

## 在 Archlinux 上使用GXDE
### 添加GXDE源
> 当前，GXDE的打包由@CharOfString维护，更新周期对齐GXDE内测源，所有新软件包随壮壮一起构建；当前GXDE on Arch处于早期移植阶段，所以可能没有那么稳定。

GXDE提供了预编译好的Arch Linux二进制源，地址如下：
- **x86_64**: https://repo.gxde.top/gxde-arch/x86_64/
- **aarch64**: https://repo.gxde.top/gxde-arch/aarch64/

要添加该源，您需要首先下载GXDE的签名公钥并导入到`pacman`的密钥环中：
```bash
curl -fsSL https://repo.gxde.top/gxde-arch/gxde.asc -o /tmp/gxde.asc
sudo pacman-key --add /tmp/gxde.asc
```

您可以使用以下指令核对指纹：
```bash
sudo pacman-key --finger BCC6D7F07130C0FA32669066FD6EEA1F20CD4B27
```

您应该看到如下输出：
```bash
pub   rsa3072 2022-11-12 [SC]
      BCC6 D7F0 7130 C0FA 3266  9066 FD6E EA1F 20CD 4B27
```

您需要对该密钥进行本地签名，使pacman信任它：
```bash
sudo pacman-key --lsign-key BCC6D7F07130C0FA32669066FD6EEA1F20CD4B27
```

然后，使用任意编辑器打开`/etc/pacman.conf`，在末尾添加：
```ini
[gxde]
SigLevel = Required
Server = https://repo.gxde.top/gxde-arch/$arch
```

`$arch`会被pacman自动替换为当前系统的架构（`x86_64`或`aarch64`），无需手动修改。

然后，使用如下命令更新数据库：
```
sudo pacman -Syu
```

### 安装GXDE
首先，您需要安装合成器：
```bash
pacman -S flake-wm-git
```

GXDE提供几个元包，您可以按需安装：
- **gxde-core-git**: 仅安装GXDE桌面的必需组件。
- **gxde-desktop-extras**: GXDE的附加软件包，包含GXDE音乐等可选软件（这些组件亦可单独安装）。
- **gxde-desktop-full**: 完整环境，含上述两个元包所有内容。

### (可选) 安装显示管理器
> **⚠️ 注意**: GXDE Wayland会话的锁屏由显示管理器提供。如果您要使用自己的显示管理器，请确保它们提供锁屏。

```bash
pacman -S gxde-display-manager
```

下次登录账户前请在TTY下执行：
```bash
sudo systemctl stop <正在使用的显示管理器服务名称>.service
sudo systemctl disable <正在使用的显示管理器服务名称>.service
sudo systemctl enable gxdm.service
sudo systemctl start gxdm.service
```


## 在 Docker 使用 GXDE
> RDPDocker是一个带有X11个和桌面环境的Docker镜像构建和容器创建工具，支持创建Ubuntu、Debian、ArchLinux、Fedora系统，支持Lingmo、GNOME、Xfce4、X11、SSH等环境。同时，允许用户通过NoMachine、RDP、VNC、SSH等方式远程访问容器。本工具以非虚拟化和极低开销的情况下，实现了多用户共享一台主机的办法，同时创建极快，随用随开，并且只占用内存、磁盘极少的空间，只需要主机安装Docker即可，支持无桌面的Linux服务器、WSL2、LXC、安卓手机运行。

具体可见：https://github.com/PIKACHUIM/RDDocker  

![RDPDocker 图1](/RDDocker/Manager.jpg)
![RDPDocker 图2](/RDDocker/Remote.jpg)

## 在 Windows 上使用 GXDE
### 使用 WSL2 运行

GXDE OS 提供了适用于 WSL2 的安装包，可以快速的在 WSL2 上安装并运行 GXDE OS  

第一次使用需运行 install.bat 以便将 GXDE OS WSL2 安装到 Windows（安装过程中会需要设置用户名和密码，后续运行需要使用）  
后续运行 run.bat 即可进入 GXDE 命令行页面  
运行 run-gui.bat 即可打开 GXDE 桌面（启动需要输入您在安装过程中输入的用户密码）  
（注：带 en_US.UTF8 后缀的代表是英语界面，带 zh_CN.UTF8 后缀的代表是中文界面）  
运行 uninstall.bat 即卸载 GXDE OS WSL，运行完后删除该文件夹即可  

::: info
注：目前 GXDE OS WSL 只支持 WSL2，不支持 WSL1，若未启用 WSL2（系统默认是 WSL1），输入以下命令并重启电脑后即可启用 WSL2：  
```bash
wsl --update
wsl --set-default-version 2
```
:::

#### 下载链接
源站：https://repo.gxde.top/TGZ/WSL/   
镜像站下载（推荐）：https://mirrors.cernet.edu.cn/GXDE/TGZ/WSL/   

![GXDE OS WSL 安装页面](/install/wsl-installer.jpg)  
![GXDE OS WSL fastfetch 页面](/install/wsl-fastfetch.jpg)  
![GXDE OS WSL 桌面](/install/wsl-desktop.jpg)  

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

> 注：如果界面操作卡顿可以在控制中心 -> 个性化 关闭特效模式，假若控制中心无法开启可尝试在 GXDE 自带的系统助手的工具箱内升级到最新版本

小小电脑项目地址：https://github.com/Cateners/tiny_computer  

![](/tiny-computer.jpg)  

#### 下载链接
源站：https://repo.gxde.top/APK/  
镜像站下载（推荐）：https://mirrors.cernet.edu.cn/GXDE/APK/   
Github 下载（选择带 gxde 后缀的 APK）：https://github.com/Cateners/tiny_computer/releases



### 在 Neo Desktop 使用 GXDE
> 一个超级启动器，支持搭配 AR 眼镜，或者物理显示器，让设备实现多屏异显。

具体可参见：https://nightmare.press/  
![Neo Desktop](/neodesktop/0.jpg)


### 在 Termux PRoot 或其他安卓设备上安装

请查看 https://bbs.deepin.org.cn/post/279414
