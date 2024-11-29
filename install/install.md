# 如何安装 GXDE？

## 镜像安装



镜像站下载: https://mirrors.sdu.edu.cn/spark-store/GXDE-OS/ISO/

huang1111: https://pan.huang1111.cn/s/laonjFL

Sourceforge：https://sourceforge.net/projects/gxde-os/files

mips64 架构的安装方法可以参考：[APT 源安装](install.md)

GXDE 仍不完美，请在安装前确认 [FAQ](faq.md) 中的事项，包括了 Nvidia 显卡驱动安装指南等

---

小白安装：若不会分区，可空出一块磁盘，在安装时选择整块磁盘安装即可。

EFI 安装：必须分一块格式为 vfat/fat32 的分区，挂载点选择 /boot/efi，剩余可按需求分区


## APT 源安装
> amd64、arm64 等已经有 ISO 安装镜像的，建议使用 ISO 安装  
> 目前支持 amd64、arm64、mips64、loong64 和 riscv64（riscv64 下未测试）   
> amd64、arm64、mips64 支持在 Debian 12 下安装使用，loong64 支持在 Debian Port 下安装使用，riscv64 支持在 Debian Sid 下使用，loong64 和 riscv64 架构用户**一定要加内测源**    
> （loong64 Debian Port 系统安装镜像：https://cdimage.debian.org/cdimage/ports/tests/  ）  


下载deb并安装 https://repo.gxde.org/gxde-os/bixie/g/gxde-source/

安装之后

```bash
sudo apt update

sudo apt install aptss

sudo apt install gxde-testing-source -y  # 添加内测源，loong64 和 riscv64 架构用户一定要用，amd64 和 arm64 用户可忽略

sudo aptss update

sudo aptss install gxde-desktop gxde-desktop-extra -y

sudo aptss install spark-store -y  # 此命令不支持 i386、mips64 架构用户

```

重启即可

> `aptss` 可以加速在 GXDE 系统源的下载速度，但如果您的性能低下导致`aptss`运行缓慢到无法接受，可换成`apt`

## 在小小电脑上使用 GXDE（在 Android 上使用 GXDE）
小小电脑 1.0.19 开始支持 GXDE，这个是和小小电脑团队合作的版本，目前还在测试：https://github.com/Cateners/tiny_computer/issues/129  

下载链接：  
镜像站下载（推荐）https://mirrors.sdu.edu.cn/spark-store-repository/GXDE-OS/APK/   
Github下载：https://github.com/Cateners/tiny_computer/releases   （选择带 gxde 后缀的 APK）

> 注：如果界面操作卡顿可以在控制中心=》个性化 关闭特效模式，假若控制中心无法开启则到 GXDE 自带的系统助手的工具箱内升级到最新版即可  

小小电脑项目地址：https://github.com/Cateners/tiny_computer  

![](/tiny-computer.jpg)

## 在Termux PRoot或其他安卓设备上安装

请查看 https://bbs.deepin.org.cn/post/279414
