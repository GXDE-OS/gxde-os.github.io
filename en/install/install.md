# How to Install GXDE?
## Image Installation

### ⚠️ Note: The Hisilicon and Pangu images are special and are only recommended for users with tinkering experience. Beginners should not install them. Furthermore, users with Hisilicon or Pangu chips must install GXDE on an external hard drive and must not modify or adjust any partitions on the machine's internal hard drive; otherwise, the computer may fail to boot and you may be unable to reinstall the system.

**Note: Users with Phytium or Kunpeng chips should download the image inside the `arm64` folder; Pangu M900 users(w525) should download the image inside the `arm64-pangu-m900` folder; Hisilicon 9000c users(w515x / w585) should download the image inside the `arm64-hisi9000c` folder. Other Hisilicon chips are not currently supported.**  

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

GXDE LoongArch now has two versions:

1. lizhi (mainline) – based on a third‑party Debian 13 build, enabled from version 25.4.1 onward.

2. hetao – built on Deepin 25, without the Panshi security framework enabled.

Installation image lock screen password: live

Due to the lack of standardized specifications for RISC-V64 architecture devices, the RISC-V ISO installation images provided by GXDE are only supported to run under QEMU. Install QEMU by running the command:  
`sudo apt install qemu-system qemu-efi-riscv64`  

Start QEMU with the following command:  
```bash
qemu-system-riscv64 \
    -smp 16 -m 8G -cpu rv64 \  # -smp specifies number of virtual CPUs, -m allocates memory size
    -machine virt,acpi=off \
    -device virtio-scsi-pci,id=scsi \
    -drive if=pflash,format=raw,unit=0,file=/usr/share/qemu-efi-riscv64/RISCV_VIRT_CODE.fd,readonly=on \   # Specify RISC-V64 UEFI
    -device virtio-sound-pci,audiodev=deepinaudio -audiodev alsa,id=deepinaudio \
    -device qemu-xhci,id=xhci -device usb-tablet,bus=xhci.0 -device usb-kbd,bus=xhci.0 \
    -device virtio-vga-gl -display gtk,gl=on --cdrom /path/to/iso
```


## APT Repository Installation
> For those with ISO installation images available, such as amd64, arm64, mips64el and loong64, it is recommended to use the ISO for installation.
> 
> Currently supported architectures include i386, amd64, arm64, mips64, loong64, and riscv64 (riscv64 has not been tested).
> 
> The amd64 and arm64 architectures are supported on Debian 12 and 13. i386 and mips64 are supported on Debian 12. loong64 and riscv64 are supported on deepin 25 and Debian 13.

First, you need download the deb file:  

| Target System Code | Supported Distribution | deb Package Download URL |
| --- | --- | --- |
| lizhi | Debian 13 | https://repo.gxde.top/gxde-os/lizhi/g/gxde-source/ |
| bixie (not recommended) | Debian 12 | https://repo.gxde.top/gxde-os/bixie/g/gxde-source/ |
| hetao | deepin 25 | https://repo.gxde.top/gxde-os/hetao/g/gxde-source/ |

::: warning
**Please download the corresponding package according to your system version, otherwise dependency errors may occur during installation**
:::

::: warning
**Starting with GXDE 25, GXDE is built directly from Debian Backports. Installing the `gxde-source` package automatically adds the Debian Backports repository.**
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

**GXDE conflicts with KDE. Do not install them together, as doing so will break the GXDE desktop.**

## Using GXDE on Other Linux Distributions

GXDE LSG (Linux subsystem for GXDE) is a tool that allows users to run Debian 13 + GXDE desktop environment on other Linux distributions without disrupting the host system. Built on systemd-nspawn, it supports running common applications like Spark App Store.  
The initial run will extract resource packages—please wait patiently.  
Default user password: `gxde`

**Notes:**

1. This container cannot install all applications, particularly those requiring interaction with hardware or the system kernel.

2. UOS/Kylin users must disable System Protection in Security Center; otherwise, the container will not function properly.

3. System kernel version must be 5.4 or higher.

![Demo Image](/gxde-lsg.jpg)  
![Kylin Demo Image](/gxde-lsg-kylin.jpg)  

### Download Links

Primary Mirror: https://repo.gxde.top/TGZ/LSG/  
Mirror Site: https://mirrors.cernet.edu.cn/GXDE/TGZ/LSG/  
Now available in deepin App Store and Spark Store for one-click download and installation.

![Spark Store](/news/development/gxde-lsg/spark-store.jpg)

![deepin App Store](/news/development/gxde-lsg/deepin-appstore.jpg)

## Install GXDE on Archlinux
### Adding GXDE Pacman Source
> Currently, GXDE on Arch is maintained by @CharOfString; all the packages are updated together with GXDE's internal testing source.
>
> Currently GXDE on Arch is on "EXPERIMENTAL" stage so it might not be that stable.

GXDE provides pacman source for both x86_64 and aarch64:
- **x86_64**: https://repo.gxde.top/gxde-arch/x86_64/
- **aarch64**: https://repo.gxde.top/gxde-arch/aarch64/

To add the source to your system, you need to first download GXDE's public signing key and import it to your pacman keyring:
```bash
curl -fsSL https://repo.gxde.top/gxde-arch/gxde.asc -o /tmp/gxde.asc
sudo pacman-key --add /tmp/gxde.asc
```

You may verify the fingerprint by executing the following command:
```bash
sudo pacman-key --finger BCC6D7F07130C0FA32669066FD6EEA1F20CD4B27
```

The output should contain:
```bash
pub   rsa3072 2022-11-12 [SC]
      BCC6 D7F0 7130 C0FA 3266  9066 FD6E EA1F 20CD 4B27
```

You need to sign the key locally so pacman can trust it:
```bash
sudo pacman-key --lsign-key BCC6D7F07130C0FA32669066FD6EEA1F20CD4B27
```

Open `/etc/pacman.conf` and append these content to the file end:
```ini
[gxde]
SigLevel = Required
Server = https://repo.gxde.top/gxde-arch/$arch
```

`$arch` will be replaced with your system architecture (`x86_64` or `aarch64`) automatically by pacman. Then, you may update your data base by running:
```bash
sudo pacman -Syu
```

### Installing GXDE
First of all, you need to install our Wayland compositor:
```bash
pacman -S flake-wm-git
```

GXDE provided several meta packages to make the installation easier:
- **gxde-core-git**: Only includes the core session components.
- **gxde-desktop-extras**: Extra GUI application package containing optional softwares like GXDE Music Player (these packages may also be installed individually).
- **gxde-desktop-full**: The full desktop environment with all contents from `core` and `extras`.

### (OPTIONAL) Installing the Display Manager
> **⚠️ NOTE**: GXDE Wayland session's lockscreen is provided by display manager. If you're bringing in your own display manager, please make sure they also provide lockscreen.

```bash
pacman -S gxde-display-manager
```

... and please execute these command next time before you log in under TTY:
```bash
sudo systemctl stop <the name of display manager that you are using>.service
sudo systemctl disable <the name of display manager that you are using>.service
sudo systemctl enable gxdm.service
sudo systemctl start gxdm.service
```

## Install GXDE on Docker
> RDPDocker is a Docker image building and container creation tool with X11 and desktop environments, supporting the creation of Ubuntu, Debian, Arch Linux, Fedora systems, Lingmo, GNOME, Xfce4, X11, SSH and other environments. Meanwhile, users are allowed to remotely access the container through methods such as NoMachine, RDP, VNC, SSH, etc. This tool enables multiple users to share a host without virtualization and at extremely low cost. It is also very fast to create, can be used and opened at any time, and only occupies minimal memory and disk space. Docker only needs to be installed on the host. Supports running on headless Linux servers desktop, WSL2, LXC, and Android phones.

You can learn more from https://github.com/PIKACHUIM/RDDocker  

![RDPDocker 图1](/RDDocker/Manager.jpg)  
![RDPDocker 图2](/RDDocker/Remote.jpg)

## Using GXDE on Windows
### Running with WSL2

GXDE OS provides installation packages for WSL2, allowing you to quickly install and run GXDE OS on WSL2.  
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

#### Download links
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

> **Note**: If the interface operation is laggy, you can disable the special effects mode in the Control Center => Personalization. If the Control Center cannot be opened, you can upgrade to the latest version using the Toolbox in the GXDE-provided System Assistant.

Tiny Computer Project Address: [https://github.com/Cateners/tiny_computer](https://github.com/Cateners/tiny_computer)

![](/tiny-computer.jpg)  

#### Download Links

- Mirror Site Download (Recommended): https://mirrors.cernet.edu.cn/GXDE/APK/   
- Github Download: [https://github.com/Cateners/tiny_computer/releases](https://github.com/Cateners/tiny_computer/releases) (Select the APK with the "gxde" suffix)



### Install GXDE with Neo Desktop
> A powerful launcher that supports connection to either AR glasses or physical displays, enabling the device to achieve independent multi-display output.


You can learn more from https://nightmare.press/  
![Neo Desktop](/neodesktop/0.jpg)

### Install on Termux PRoot or other Android devices

Check: https://bbs.deepin.org.cn/post/279414

### Install GXDE on Android Phone/Pads (With Vectras VM)

Please check: https://github.com/xoureldeen/Vectras-VM-Android
