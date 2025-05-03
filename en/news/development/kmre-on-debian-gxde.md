# Modified KMRE  

## Modifications  

* **Support for GXDE OS and other Debian 12-based Linux distributions** (default kernel or GXDE kernel; custom kernel builds require enabling binder-related options and applying this patch: [https://gitee.com/GXDE-OS/gxde-kernel/blob/master/patch/export-symbols-needed-by-android-drivers.patch](https://gitee.com/GXDE-OS/gxde-kernel/blob/master/patch/export-symbols-needed-by-android-drivers.patch))  
* **Added support for retrieving DDE/KDE scaling ratios**, no longer limited to UKUI.  
* **Added `X-GXDE-KMREAPP=true` and `X-GXDE-KMRE-PKGNAME` tags to generated `.desktop` files** to enable one-click uninstallation of Android apps.  
* **Added `gxme` prefix to generated `.desktop` files** to avoid conflicts with UOS standard package names.  
* **Added CLI support for installing/uninstalling APK apps**, with defined return values for easier deb packaging.  
* **Enabled one-click APK installation via double-click**.  

## How to Use  

0. **Add Repository**  
   - For **GXDE OS**: No action required.  
   - For **other Debian 12-based distributions**: Add the GXDE OS repository (no need to install the desktop environment).  
     Refer to: [https://www.gxde.top/install/install#apt-源安装](https://www.gxde.top/install/install#apt-%E6%BA%90%E5%AE%89%E8%A3%85)  

1. **Installation**  
   - Search for **KMRE** in the **Spark App Store** and install it with one click:  
     ![图片.png](/news/development/kmre-on-debian-gxde/202501261534476872_图片.jpg)  
   - Or use the command:  
     ```bash  
     sudo aptss install kmre -y  
     ```  
   - After installation, KMRE will appear in the launcher:  
     ![图片.png](/news/development/kmre-on-debian-gxde/202501261536273237_图片.jpg)  
     ![图片.png](/news/development/kmre-on-debian-gxde/202501261538027913_图片.jpg)  

2. **Install Apps**  
   - Right-click a deb package and use the **KMRE Installer** for one-click installation:  
     ![图片.png](/news/development/kmre-on-debian-gxde/202501261538259106_图片.jpg)  
     ![图片.png](/news/development/kmre-on-debian-gxde/202501261539045466_图片.jpg)  
     ![图片.png](/news/development/kmre-on-debian-gxde/202501261539195214_图片.jpg)  
   - Apps will then appear in the launcher:  
     ![图片.png](/news/development/kmre-on-debian-gxde/202501261546298081_图片.jpg)  

## Uninstallation  

- **For GXDE OS** (update to `gxde-app-uninstaller >= 1.4.0`): Right-click the app icon in the launcher to uninstall.  
- **For other desktop environments**: Run `kmre-app-installer uninstall [package-name]`.  

## Deepin Porting Plan  

Like previous GXDE ecosystem apps, porting KMRE to Deepin upstream has been discussed, but:  
- Deepin 20 is EOL and already has UEngine.  
- Deepin 23 is nearing its lifecycle end, making adaptation less meaningful.  
- Deepin 25 is still in Preview; early adaptations may break post-updates, and the "Panshi" system complicates porting.  
- Subsystems or ACE compatibility environments cannot support nested containers (required for KMRE).  

Thus, the team has postponed Deepin adaptation until official announcements regarding Deepin 23’s maintenance or Deepin 25’s "Panshi" documentation are released.  

**UOS users** are advised to use the official UEngine or xDroid for stability.  

## Source Code  

- KMRE: [https://gitee.com/GXDE-OS/kmre](https://gitee.com/GXDE-OS/kmre)  
- Kylin-KMRE-Window: [https://gitee.com/GXDE-OS/kylin-kmre-window](https://gitee.com/GXDE-OS/kylin-kmre-window)  
- Kylin-KMRE-Manager: [https://gitee.com/GXDE-OS/kylin-kmre-manager](https://gitee.com/GXDE-OS/kylin-kmre-manager)  
- Kylin-KMRE-Emugl: [https://gitee.com/GXDE-OS/kylin-kmre-emugl](https://gitee.com/GXDE-OS/kylin-kmre-emugl)  
- Kylin-KMRE-APK-Installer: [https://gitee.com/GXDE-OS/kylin-kmre-apk-installer](https://gitee.com/GXDE-OS/kylin-kmre-apk-installer)  
- Kylin-KMRE-Display-Control: [https://gitee.com/GXDE-OS/kylin-kmre-display-control](https://gitee.com/GXDE-OS/kylin-kmre-display-control)  
- Kylin-KMRE-Daemon: [https://gitee.com/GXDE-OS/kylin-kmre-daemon](https://gitee.com/GXDE-OS/kylin-kmre-daemon)  
- Kylin-KMRE-Modules-DKMS: [https://gitee.com/GXDE-OS/kylin-kmre-modules-dkms](https://gitee.com/GXDE-OS/kylin-kmre-modules-dkms)  
- Libkylin-KMRE: [https://gitee.com/GXDE-OS/libkylin-kmre](https://gitee.com/GXDE-OS/libkylin-kmre)