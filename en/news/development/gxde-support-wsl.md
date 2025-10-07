# GXDE OS Now Supports Running on WSL (with Desktop Environment) (2025.10.07)  
  
> Windows Subsystem for Linux (WSL) is a feature of Windows that enables users to run a Linux environment directly on a Windows machine, without the need for a separate virtual machine or dual-booting. WSL is designed to provide a seamless and efficient experience for developers who need to use both Windows and Linux.  
  
GXDE now provides application packages compatible with WSL2, allowing for quick installation and execution of the GXDE OS desktop environment on WSL2. These packages are built based on the foundation from https://github.com/yuk7/wsldl.  
  
For the first-time use, run `install.bat` to install GXDE OS WSL2 onto your Windows system (you will be prompted to set a username and password during installation, which are required for subsequent launches).  
For subsequent uses, run `run.bat` to enter the GXDE command line interface.  
Run `run-gui.bat` to start the GXDE desktop (you will need to enter the username and password set during installation to launch).  
(Note: Packages with the `en_US.UTF8` suffix provide the English interface, while those with the `zh_CN.UTF8` suffix provide the Chinese interface.)  
Run `uninstall.bat` to uninstall GXDE OS WSL. After the script runs, delete the folder to complete the removal.  
  
Note:  
Currently, GXDE OS WSL only supports WSL2 and is not compatible with WSL1. If WSL2 is not enabled (the system defaults to WSL1), run the following commands and restart your computer to enable WSL2:  
  
```bash  
wsl --update  
wsl --set-default-version 2  
```  
  
![GXDE OS WSL Installation Page](https://www.gxde.top/install/wsl-installer.jpg)  
![GXDE OS WSL fastfetch Page](https://www.gxde.top/install/wsl-fastfetch.jpg)  
![GXDE OS WSL Desktop](https://www.gxde.top/install/wsl-desktop.jpg)  
  
## Download Links  
  
Source: https://repo.gxde.top/TGZ/WSL/  
Mirror (Recommended): https://mirrors.cernet.edu.cn/GXDE/TGZ/WSL/