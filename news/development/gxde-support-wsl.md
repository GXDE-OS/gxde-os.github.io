# GXDE OS 支持在 WSL 上使用了（带桌面环境）（2025.10.07）    
  
> 适用于 Linux 的 Windows 子系统（WSL）是 Windows 的一项功能，可用于在 Windows 计算机上运行 Linux 环境，而无需单独的虚拟机或双重启动。 WSL 旨在为想要同时使用 Windows 和 Linux 的开发人员提供无缝高效的体验。  
  
现在 GXDE 提供了适用于 WSL2 的应用包了，可以快速的在 WSL2 上安装并运行 GXDE OS 桌面环境，基于 https://github.com/yuk7/wsldl 制作  
  
第一次使用需运行 install.bat 以便将 GXDE OS WSL2 安装到 Windows（安装过程中会需要设置用户名和密码，后续运行需要使用）  
后续运行 run.bat 即可进入 GXDE 命令行页面  
运行 run-gui.bat 即可打开 GXDE 桌面（启动需要输入您在安装过程中输入的用户密码）  
（注：带 en_US.UTF8 后缀的代表是英语界面，带 zh_CN.UTF8 后缀的代表是中文界面）  
运行 uninstall.bat 即卸载 GXDE OS WSL，运行完后删除该文件夹即可  
  
提示：  
注：目前 GXDE OS WSL 只支持 WSL2，不支持 WSL1，若未启用 WSL2（系统默认是 WSL1），输入以下命令并重启电脑后即可启用 WSL2：  
  
```bash  
wsl --update  
wsl --set-default-version 2  
```  
  
![GXDE OS WSL 安装页面](https://www.gxde.top/install/wsl-installer.jpg)  
![GXDE OS WSL fastfetch 页面](https://www.gxde.top/install/wsl-fastfetch.jpg)  
![GXDE OS WSL 桌面](https://www.gxde.top/install/wsl-desktop.jpg)  
  
## 下载链接  
  
源站：https://repo.gxde.top/TGZ/WSL/  
镜像站下载（推荐）：https://mirrors.cernet.edu.cn/GXDE/TGZ/WSL/  
