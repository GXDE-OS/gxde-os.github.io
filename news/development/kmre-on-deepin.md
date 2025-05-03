# 移植成功！Kmre 可以在 deepin 23 正常使用（附安装教程）

## 前言

KMRE是麒麟软件研发的Linux桌面操作系统产品的高效的Android运行环境解决方案，而当前 UEngine 的 Android 版本过老（现在的 deepin 23 也无法安装就是了），故做了此移植
当前移植的 Kmre Android 版本是 11,在原版 Kmre 的基础上做出了以下修改：

- 新增支持获取 DDE/KDE 缩放比例，不再仅 UKUI 可用
- 生成的 .desktop文件添加X-GXDE-KMREAPP=true、X-GXDE-KMRE-PKGNAME标签以支持一键卸载安卓应用
- 生成的 .desktop 添加 gxme 前缀 ，避免出现与 UOS 标准包名撞车
- 支持通过 CLI 安装或卸载 apk 应用，并定义相应的返回值方便 deb 打包
- 支持双击 apk 一键安装应用
- 将 Arm 翻译层更换为 libhoudini，提升应用兼容性
- 接入 GXDE 构建系统

详细可见：https://gitee.com/GXDE-OS/kmre

![image.png](/news/development/kmre-on-deepin/kmre-on-deepin0.jpg)

![image.png](/news/development/kmre-on-deepin/kmre-on-deepin1.jpg)

![image.png](/news/development/kmre-on-deepin/kmre-on-deepin2.jpg)

## 前期准备

目前 Kmre 只能在 deepin23 编译，只支持 amd64 和 arm64

在安装 Kmre 前，需要做好以下准备：

1. 安装并使用导出 Android Binder 函数的系统内核
2. deepin 23 用户需要安装源里没有的依赖包（如果后面使用加源安装的方法安装 Kmre 则无法下载该依赖包）

具体操作如下：

### 安装受支持的内核

因为 Kmre 的内核模块需要使用 `can_nice`、`close_fd_get_file`/`file_close_fd` 等原版内核没有导出的函数，所以需要使用有导出如上函数的内核
目前 deepin 的 6.6 稳定内核和 Debian、GXDE OS 的内核均已导出如上函数，可直接安装使用
源里的 6.9、6.12 滚动内核暂不支持
如需自行编译内核，则可以合并以下 patch 来添加用于添加用于导出的代码
内核版本大于 6.11：https://gitee.com/GXDE-OS/gxde-kernel/blob/master/patch/export-symbols-needed-by-android-drivers.patch
内核版本小于 6.11 但大于 6.1：https://gitee.com/GXDE-OS/gxde-kernel/blob/master/patch-6.1/export-symbols-needed-by-android-drivers.patch
在导入 patch 后需要重新编译并安装才能正常使用

### 安装源里没有的依赖包

> 当前已向 deepin pr 了缺失的依赖包，需等 deepin 合并推源，合并推源成功后就无需安装该依赖包

目前只给 deepin23 amd64 编译了依赖包，下载以下链接的 deb 包并安装即可：

https://gfdgdxi.lanzouw.com/b0pmhuani
密码:anh4

## 安装 Kmre

做好前期准备，终于可以开始安装 Kmre 了，你可以选择任意一种方式进行安装：

- 加源安装 Kmre
- 编译安装

### 加源安装

输入以下命令即可加源安装：

```bash
echo "deb [trusted=true] https://repo.gxde.top/gxde-os/hetao/ ./" | sudo tee /etc/apt/sources.list.d/gxde-kmre.list
sudo apt update
sudo apt install kmre
```

安装完重启即可

### 编译安装

我写了一个自动编译安装 Kmre 的脚本，会自动检测当前系统是否符合运行条件
使用方法如下：

```bash
sudo apt update
sudo apt install git
git clone https://gitee.com/GXDE-OS/kmre
cd kmre
sudo bash build-kmre-deb.sh
```

若编译、安装成功，重启后即可正常使用

## 测试效果

重启后可以在启动器找到 Android 系统设置的图标，点击它然后等待一段时间（第一次运行需要进行初始化），看到系统设置即为成功
如果不想在启动器点击图标，也可在终端输入以下命令：

```bash
startapp com.android.settings
```

![image.png](/news/development/kmre-on-deepin/launcher-desktop.jpg)

![image.png](/news/development/kmre-on-deepin/kmre-settings.jpg)

然后即可使用 APK 安装工具安装 APK 了：

![image.png](/news/development/kmre-on-deepin/kmre-apk-installer.jpg)
