# 小小电脑文件访问指南

::: info
文档来源：https://gitee.com/caten/tc-hints/blob/master/pool/fileaccess.md  
原作者：Caten  
:::

## 目录
- [小小电脑文件访问指南](#小小电脑文件访问指南)
  - [目录](#目录)
    - [小小电脑访问安卓文件](#小小电脑访问安卓文件)
    - [小小电脑访问U盘/SD卡文件](#小小电脑访问u盘sd卡文件)
    - [安卓侧访问小小电脑文件](#安卓侧访问小小电脑文件)

---

### 小小电脑访问安卓文件

确保小小电脑拥有文件访问权限：

![示例图片](/tiny-computer/6.jpg)

打开小小电脑的主文件夹。

主文件夹中的视频、图片、文档...等等文件夹均与安卓对应文件夹绑定，直接访问即可。

要访问整个手机存储，可以访问sd文件夹。

![示例图片](/tiny-computer/7.jpg)

### 小小电脑访问U盘/SD卡文件

首先用其他文件管理器查看U盘/SD卡路径  
（通常为/storage/xxxx...，如果路径是/mnt/...那么没有权限访问）  
然后把该地址输入到小小电脑的文件管理器回车即可  

注意不要只输/storage  
或者从/storage文件夹点进去  
那样是没有权限的

### 安卓侧访问小小电脑文件

即使小小电脑系统崩坏或软件无法启动，内部的文件通常也是可以访问的。

首先需要一个支持SAF的文件管理器，这里以[质感文件](https://github.com/zhanghai/MaterialFiles)为例。

![示例图片](/tiny-computer/8.jpg)

![示例图片](/tiny-computer/9.jpg)

![示例图片](/tiny-computer/10.jpg)

![示例图片](/tiny-computer/11.jpg)

授权后会多出一个名为containers的入口，以后直接点击它就可以访问小小电脑文件。

![示例图片](/tiny-computer/12.jpg)

现在，你可以像访问正常的安卓文件一样访问小小电脑文件了！

这里是小小电脑的根文件夹。

![示例图片](/tiny-computer/13.jpg)

主文件夹在/home/tiny。

![示例图片](/tiny-computer/14.jpg)
