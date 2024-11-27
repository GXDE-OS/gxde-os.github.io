# How to Install GXDE?
## Image Installation


Sourceforge: https://sourceforge.net/projects/gxde-os/files

huang1111 pan: https://pan.huang1111.cn/s/laonjFL

ISO Mirror (China Mainlaind Mirror): https://mirrors.sdu.edu.cn/spark-store/GXDE-OS/ISO/


GXDE is not perfect，please confirm [FAQ](faq.md) before installation，containing Nvidia Graphic Card driver installation help. 

---

For Beginners: If you don't know how to partition, leave some space on a disk and select to install on the whole disk during installation.

EFI Installation: You must create a partition formatted as vfat/fat32 with the mount point set to /boot/efi. The remaining space can be partitioned as needed.

## APT Repository Installation
> For amd64, arm64, etc., where ISO installation images are available, it is recommended to use ISO installation.  
> Currently supports amd64, arm64, mips64, and loong64, but loong64 has not been tested.

Download the deb file and install it from https://repo.gxde.org/gxde-os/bixie/g/gxde-source/
After installation, run:

```bash
sudo apt update

sudo apt install aptss

sudo apt install gxde-testing-source -y  # Recommended for loong64 and riscv64 users,

sudo aptss update

sudo aptss install gxde-desktop gxde-desktop-extra -y

sudo aptss install spark-store -y  # Not available for mips64 and i386 users

```

Then restart.

> `aptss` can accelerate download speed from GXDE source. But, if your performance is so poor that running `aptss` cost centuries, just use apt.

## Install GXDE on Android Phone/Pads (With Tiny-Computer)
Since version 1.0.19, tiny computer started to support GXDE：

China Mainland Mirror: https://mirrors.sdu.edu.cn/spark-store-repository/GXDE-OS/APK/   

Github：https://github.com/Cateners/tiny_computer/releases  (Choose the APK file with gxde)

> Please upgrade to the newest version via GXDE System Assistant

Tiny Computer：https://github.com/Cateners/tiny_computer  

## Install on Termux PRoot or other Android devices

Check: https://bbs.deepin.org.cn/post/279414
