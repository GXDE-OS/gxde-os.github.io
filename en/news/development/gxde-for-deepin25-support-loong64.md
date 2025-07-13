# [GXDE For deepin 25] Now Supports LoongArch! ISO Release (2025.06.29) 

## **Introduction**  
GXDE is a desktop environment featuring the classic deepin desktop from the deepin 15 era, continuously optimized to deliver an elegant, stable, and lightweight out-of-the-box experience. It aims to reduce the learning curve for newcomers and save time for experienced users.  

GXDE has now been successfully ported to deepin 25, supporting **amd64**, **arm64**, **loong64**, and **riscv64** (untested).  
*Loongson Old World is currently untested.*  
**Note:** KMRE is not yet supported.  

⚠️ **Important:**  
- GXDE is **incompatible with Panshi**. To use GXDE, you must fully disable Panshi. We recommend installing via the provided ISO.  
- GXDE **conflicts with DDE**. They cannot coexist. To install GXDE, you must completely uninstall DDE. We recommend using the provided ISO.  

**⚠️ This is currently a TEST release, not a stable version.**  

Official Website: [https://www.gxde.top/](https://www.gxde.top/)  
Open Source Repositories:  
- [https://gitee.com/GXDE-OS/](https://gitee.com/GXDE-OS/)  
- [https://github.com/GXDE-OS/](https://github.com/GXDE-OS/)  

**LoongArch Screenshots:**  
![LoongArch](/news/development/gxde-for-deepin25-support-loong64/fastfetch-loong64.jpg)  
*Pre-installed Spark Store and liblol (Old World compatibility layer)*  
![Spark Store with liblol](/news/development/gxde-for-deepin25-support-loong64/spark-store-loong64.jpg)  

**Other Architectures:**  
![Spark Store](/news/development/gxde-for-deepin25/spark-store.jpg)  
![fastfetch](/news/development/gxde-for-deepin25/fastfetch.jpg)  

---

## **Download Links**  
> Due to limited storage on the server, only the **loong64 ISO** is offered. Other architectures are available via cloud drives.  

**⚠️ Note:** This ISO **does not enable Panshi** and conflicts with the repository's DDE.  

ISOs are provided for **amd64**, **arm64**, and **loong64**, using a non-default deepin installer.  
**If prompted for a password during installation, use:** `live`  

- **123 Cloud:** https://www.123865.com/s/pDSKVv-B4PWv  
- **Baidu Netdisk:** [Link](https://pan.baidu.com/s/1L9A6q-xrkgKfZ_LIyfbDMQ?pwd=c7ps) (Extraction code: `c7ps`)  
- **CTfile:** [Link](https://ctfile.gfdgdxi.top#/d/31540479-61968823-1bd7af?p=2061) (Password: `2061`)  
- **SourceForge:** https://sourceforge.net/projects/gxde-os/files/  
- **Loong64 ISO (direct):** https://repo.gxde.top/ISO/ *(sync in progress if unavailable)*  

![Calamares Installer](/news/development/gxde-for-deepin25/calamares.jpg)  

---

## **Upstream Contributions**  
During the porting process, we submitted several pull requests to deepin upstream. Partial list:  
- https://github.com/deepin-community/pydbus/pull/1  
- https://github.com/linuxdeepin/deepin-anything/pull/174  
- https://github.com/deepin-community/android-platform-frameworks-base/pull/2  
- https://github.com/deepin-community/translate-shell/pull/1  
- https://github.com/deepin-community/crudini/pull/1  

