# GXDE LSG Released: Run GXDE OS + Debian 13 Base on Other Linux Distributions (2025.10.22)

GXDE LSG (Linux subsystem for GXDE) is a tool that allows users to run Debian 13 + GXDE desktop environment on other Linux distributions without disrupting the original system. It is built based on systemd-nspawn.  
Common applications like Spark App Store are supported.  
The initial run will extract resource packages—please wait patiently.

Default user password: `gxde`

**Notes:**  
1. Not all applications can be installed in this container, especially those requiring interaction with hardware or the system kernel.  
2. UOS/Kylin users must disable System Protection in Security Center; otherwise, the container will not function properly.  
3. The system kernel version must be 5.4 or higher.

![Display](/gxde-lsg.jpg)

![Desktop](/news/development/gxde-lsg/desktop.jpg)

![Kylin Screenshot](/news/development/gxde-lsg/kylin.jpg)

![Terminal Output](/news/development/gxde-lsg/terminal.jpg)

# Download Links

Primary Mirror: https://repo.gxde.top/TGZ/LSG/  
Mirror Site: https://mirrors.cernet.edu.cn/GXDE/TGZ/LSG/  
Now available in the deepin App Store and Spark Store for one-click download and installation.

![Spark Store](/news/development/gxde-lsg/spark-store.jpg)

![deepin App Store](/news/development/gxde-lsg/deepin-appstore.jpg)