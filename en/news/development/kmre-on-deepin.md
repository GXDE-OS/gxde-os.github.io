# Port Successful! Kmre Works on Deepin 23 (with Installation Tutorial)

## Preface

KMRE is an efficient Android runtime environment solution for Linux desktop operating system products developed by Kylin Software. Since the current Android version of UEngine is outdated (and cannot be installed on Deepin 23), this port was created.  
The current ported Kmre uses Android 11 and includes the following modifications based on the original Kmre:

- Added support for retrieving DDE/KDE scaling ratios (no longer limited to UKUI)
- Added `X-GXDE-KMREAPP=true` and `X-GXDE-KMRE-PKGNAME` tags to generated `.desktop` files to support one-click uninstallation of Android apps
- Added `gxme` prefix to generated `.desktop` files to avoid conflicts with UOS standard package names
- Added CLI support for installing/uninstalling APK apps, with defined return values for easier deb packaging
- Enabled one-click APK installation via double-click
- Replaced the Arm translation layer with **libhoudini** for better app compatibility
- Integrated with GXDE build system

For details, visit:  
https://gitee.com/GXDE-OS/kmre  

![image.png](/news/development/kmre-on-deepin/kmre-on-deepin0.jpg)  

![image.png](/news/development/kmre-on-deepin/kmre-on-deepin1.jpg)  

![image.png](/news/development/kmre-on-deepin/kmre-on-deepin2.jpg)  

## Preparations

Kmre currently only compiles on Deepin 23 and supports **amd64** and **arm64** architectures.  
Before installing Kmre, ensure the following prerequisites:  

1. Install a kernel that exports Android Binder functions.  
2. Deepin 23 users must install dependency packages not available in the official repository (required even if installing Kmre via third-party repositories).  

### Step 1: Install a Supported Kernel

Kmre’s kernel modules require functions like `can_nice`, `close_fd_get_file`/`file_close_fd`, which are not exported in the stock kernel.  
Supported kernels include:  
- Deepin’s **6.6 stable kernel**  
- Debian and GXDE OS kernels (already export these functions).  
**Unsupported**: The **6.9** and **6.12** rolling kernels in the repository.  

**To compile a custom kernel**:  
Apply the following patches to export required functions:  
- For kernels > **6.11**:  
  https://gitee.com/GXDE-OS/gxde-kernel/blob/master/patch/export-symbols-needed-by-android-drivers.patch  
- For kernels **6.1–6.11**:  
  https://gitee.com/GXDE-OS/gxde-kernel/blob/master/patch-6.1/export-symbols-needed-by-android-drivers.patch  

Rebuild and install the kernel after patching.  

### Step 2: Install Missing Dependencies

> *A PR has been submitted to Deepin for the missing dependencies. This step can be skipped once merged.*  

Download and install the deb packages for **Deepin 23 amd64** from:  
https://gfdgdxi.lanzouw.com/b0pmhuani  
Password: `anh4`  

---

## Installing Kmre

After completing the preparations, choose one of the following methods:  

### Method 1: Repository Installation

Run these commands:  
```bash
echo "deb [trusted=true] https://repo.gxde.top/gxde-os/hetao/ ./" | sudo tee /etc/apt/sources.list.d/gxde-kmre.list
sudo apt update
sudo apt install kmre
```  
**Reboot** after installation.  

### Method 2: Compile from Source

Use the automated build script (checks system compatibility):  
```bash
sudo apt update
sudo apt install git
git clone https://gitee.com/GXDE-OS/kmre
cd kmre
sudo bash build-kmre-deb.sh
```  
**Reboot** if the installation succeeds.  

---

## Testing

After rebooting:  
- Find the **Android Settings** icon in the launcher (initialization occurs on first run).  
- Alternatively, run in terminal:  
  ```bash
  startapp com.android.settings
  ```  

![image.png](/news/development/kmre-on-deepin/launcher-desktop.jpg)  

![image.png](/news/development/kmre-on-deepin/kmre-settings.jpg)  

**Install APKs**: Use the APK installer tool:  

![image.png](/news/development/kmre-on-deepin/kmre-apk-installer.jpg)