# 如何安装 GXDE？

## 镜像安装

123盘：https://www.123pan.com/s/pDSKVv-4XIWv.html

huang111：https://pan.huang1111.cn/s/laonjFL

Sourceforge：https://sourceforge.net/projects/gxde-os/files

**对于 15.13 及以下版本的ISO, Legacy BIOS 暂时只支持用 Debian 安装器进行安装，在引导界面选择 Advanced options 后选择 Install 进行安装，此问题将会在 15.14 解决**

---

小白安装：若不会分区，可空出一块磁盘，在安装时选择整块磁盘安装即可。

EFI 安装：必须分一块格式为 vfat/fat32 的分区，挂载点选择 /boot/efi，剩余可按需求分区


## APT 源安装
> amd64、arm64 等已经有 ISO 安装镜像的，建议使用 ISO 安装  
> 目前支持 amd64、arm64、mips64 和 loong64，但 loong64 并未测试
下载deb并安装 https://pan.huang1111.cn/s/k2nRvuB

安装之后

```bash
sudo apt update

sudo apt install spark-store -y

sudo aptss install gxde-testing-source -y

sudo aptss install gxde-desktop gxde-desktop-extra -y

```

重启即可