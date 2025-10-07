# How to Install GXDE?
## Image Installation


Official download: https://repo.gxde.top/ISO/

Legacy versions: https://pan.baidu.com/s/1dsJSUhHiMg4tPHTq9IDpJw?pwd=GXDE Passwd: GXDE

Sourceforge: https://sourceforge.net/projects/gxde-os/files

ISO Mirror（CERNET Mirror）：https://mirrors.cernet.edu.cn/GXDE/ISO/

Mirrors list: [Available Here](mirrors.md)

123 Pan (Including old archive): [https://www.123865.com/s/pDSKVv-gVPWv](https://www.123865.com/s/pDSKVv-gVPWv)  

Ctfile Cloud Disk (Including old archive): [https://ctfile.gfdgdxi.top/#/d/31540479-66220399-11ab95?p=2061](https://ctfile.gfdgdxi.top/#/d/31540479-66220399-11ab95?p=2061) Password: 2061  

![GXDE OS ISO Baidu Cloud Disk](/install/baidu.jpg)


GXDE is not perfect, please confirm [FAQ](faq.md) before installation, containing Nvidia Graphic Card driver installation help. 

---

For Beginners: If you don't know how to partition, leave some space on a disk and select to install on the whole disk during installation.

EFI Installation: You must create a partition formatted as vfat/fat32 with the mount point set to /boot/efi. The remaining space can be partitioned as needed.  

Because the LoongArch Debian upstream is not yet stable, GXDE loong64 is built upon deepin 25. Its codename is `hetao`, and the 'Rock Solid' feature is not enabled.

Install image lock screen password: `live`  

### Hetao Branch ISO Download Links

GXDE Hetao Branch is based on deepin 25 (for codename definitions, see: [https://www.gxde.top/en/install/#system-code-names](https://www.gxde.top/en/install/#system-code-names)). It is currently in the **demo phase** and **should not be used in production environments**.  

**⚠️ Note: This ISO does not have the 'Rock Solid' feature enabled and conflicts with DDE in the repositories.**  

Currently, ISOs for **amd64**, **arm64**, and **loong64** architectures are provided. **Note:** These ISOs do *not* use deepin's default installer.  

> Due to limited server space, **amd64 and arm64 ISOs are only available via cloud storage download links**:  

123 Pan: [https://www.123865.com/s/pDSKVv-B4PWv](https://www.123865.com/s/pDSKVv-B4PWv)  
Baidu Netdisk: Link: [https://pan.baidu.com/s/1L9A6q-xrkgKfZ_LIyfbDMQ?pwd=c7ps](https://pan.baidu.com/s/1L9A6q-xrkgKfZ_LIyfbDMQ?pwd=c7ps) (Extraction code: c7ps)  
ChengTong (CTFile):[https://ctfile.gfdgdxi.top#/d/31540479-61968823-1bd7af?p=2061](https://ctfile.gfdgdxi.top#/d/31540479-61968823-1bd7af?p=2061) (Access password: 2061)  

The **loong64 architecture ISO** can be downloaded from the mirror sites listed above, or also from the cloud storage links.


## APT Repository Installation
> For those with ISO installation images available, such as amd64, arm64, mips64el and loong64, it is recommended to use the ISO for installation.
> 
> Currently supported architectures include i386, amd64, arm64, mips64, loong64, and riscv64 (riscv64 has not been tested).
> 
> amd64, arm64 are supported for installation and use under Debian 13/12. i386, mips64 are supported for installation and use under Debian 12. loong64 is supported for installation and use under deepin25. riscv64 is supported for use under deepin25/Debian13.

First, you need download the deb file:  

| Target System Code | Supported Distribution | deb Package Download URL |
| --- | --- | --- |
| lizhi | Debian 13 | https://repo.gxde.top/gxde-os/lizhi/g/gxde-source/ |
| bixie | Debian 12 | https://repo.gxde.top/gxde-os/bixie/g/gxde-source/ |
| hetao | deepin 25 | https://repo.gxde.top/gxde-os/hetao/g/gxde-source/ |

::: warning
**Please download the corresponding package according to your system version, otherwise dependency errors may occur during installation**
:::

::: warning
**Starting from GXDE 2025, we are directly built on Debian Backports. After installing the `gxde-source` package, the Debian Backports repository will be automatically added**
:::

After installation, run:  

```bash
sudo apt update

sudo apt install aptss

sudo apt install gxde-testing-source -y  # Add the internal testing source. Debian Sid/Port users must use it, amd64, mips64, i386, arm64 and Loongnix 25 users can ignore it

sudo aptss update

sudo aptss install gxde-desktop gxde-desktop-extra -y

sudo aptss install spark-store -y  # Not available for mips64, i386 and riscv64 users

```

Then restart.

> `aptss` can accelerate download speed from GXDE source. But, if your performance is so poor that running `aptss` cost centuries, just use apt.

**There are potential conflict between GXDE and KDE. Don't install them both or maybe something will crash**

## Install GXDE on Android Phone/Pads (With Vectras VM)

Please check: https://github.com/xoureldeen/Vectras-VM-Android

## Install GXDE on Docker
> RDPDocker is a Docker image building and container creation tool with X11 and desktop environments, supporting the creation of Ubuntu, Debian, Arch Linux, Fedora systems, Lingmo, GNOME, Xfce4, X11, SSH and other environments. Meanwhile, users are allowed to remotely access the container through methods such as NoMachine, RDP, VNC, SSH, etc. This tool enables multiple users to share a host without virtualization and at extremely low cost. It is also very fast to create, can be used and opened at any time, and only occupies minimal memory and disk space. Docker only needs to be installed on the host. Supports running on headless Linux servers desktop, WSL2, LXC, and Android phones.

You can learn more from https://github.com/PIKACHUIM/RDDocker  

![RDPDocker 图1](/RDDocker/Manager.jpg)  
![RDPDocker 图2](/RDDocker/Remote.jpg)

## Using GXDE on Windows
### Running with WSL2

GXDE OS provides installation packages for WSL2, allowing you to quickly install and run GXDE OS on WSL2.  
Download links:  
First-time use requires running `install.bat` to install GXDE OS WSL2 onto Windows (during installation, you will need to set a username and password, which will be required for subsequent runs).  
For subsequent runs, use `run.bat` to enter the GXDE command line interface.  
Run `run-gui.bat` to launch the GXDE desktop (you will need to enter the username and password set during installation to start).  
(Note: Versions with the `en_US.UTF8` suffix represent the English interface, while those with the `zh_CN.UTF8` suffix represent the Chinese interface.)  
Run `uninstall.bat` to uninstall GXDE OS WSL. After running, delete the folder to complete the uninstallation.  

::: info
Note: Currently, GXDE OS WSL only supports WSL2 and does not support WSL1. If WSL2 is not enabled (the system defaults to WSL1), run the following commands and restart your computer to enable WSL2:  
```bash
wsl --update
wsl --set-default-version 2
```
:::

Download links:  
Source: https://repo.gxde.top/TGZ/WSL/   
Mirror (recommended): https://mirrors.cernet.edu.cn/GXDE/TGZ/WSL/   

![GXDE OS WSL Installation Page](/install/wsl-installer.jpg)  
![GXDE OS WSL fastfetch Page](/install/wsl-fastfetch.jpg)  
![GXDE OS WSL Desktop](/install/wsl-desktop.jpg)

## Install GXDE on Android Phone/Pads

### Install GXDE With Tiny-Computer
> Run Debian with XFCE/LXQt/GXDE/... on Android with just one click - optimized for Chinese users.   

The Tiny Computer `1.0.19` now supports GXDE. This version was developed in collaboration with the Tiny Computer team and is still in beta testing phase.  
To report bugs, please visit: https://github.com/Cateners/tiny_computer/issues/129  

::: warning
Since version 1.0.99, the application has been built using a release signing key instead of the previous debug key. **Therefore, upgrading directly from older versions to the current version is NOT possible.**

If you need to export files from the application, please refer to [this guide](/tiny-computer/fileaccess.md).
:::

::: warning  
If upgrading from v1.0.10 or later versions, you **must** perform a startup command reset (in Advanced Settings) and reinstall the boot package (in Global Settings) after launch. Otherwise, new features may not work properly.  

By default, the boot package, quick commands, and container system will **not** be updated even when the software is upgraded.  

The software only supports arm64 devices. Default credentials: user `tiny`/password `tiny`.  
Connection ports:  
- VNC port 5904 (password: 12345678)  
- noVNC port 36082  
- PulseAudio port 4718  
- Termux X11 uses port 7897  
This software does not conflict with Termux.  
:::  

::: info
1.0.100 or higher version includes a variant with targetSdk 35, which avoids Google Play warnings such as "This app was built for an older version of Android" or "Unsafe app blocked" during installation — at the cost of losing Wine compatibility. As a result, I have disabled the "Windows App Support" option.
:::

**Download Links**:

- Mirror Site Download (Recommended): https://mirrors.cernet.edu.cn/GXDE/APK/   
- Github Download: [https://github.com/Cateners/tiny_computer/releases](https://github.com/Cateners/tiny_computer/releases) (Select the APK with the "gxde" suffix)

> **Note**: If the interface operation is laggy, you can disable the special effects mode in the Control Center => Personalization. If the Control Center cannot be opened, you can upgrade to the latest version using the Toolbox in the GXDE-provided System Assistant.

Tiny Computer Project Address: [https://github.com/Cateners/tiny_computer](https://github.com/Cateners/tiny_computer)

![](/tiny-computer.jpg)  

### Install GXDE with Neo Desktop
> A powerful launcher that supports connection to either AR glasses or physical displays, enabling the device to achieve independent multi-display output.


You can learn more from https://nightmare.press/  
![Neo Desktop](/neodesktop/0.jpg)

### Install on Termux PRoot or other Android devices

Check: https://bbs.deepin.org.cn/post/279414
