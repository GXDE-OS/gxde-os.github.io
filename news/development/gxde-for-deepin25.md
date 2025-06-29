# 【GXDE For deepin 25】deepin25 能用上 GXDE 了！（2025.06.22）  
  
## 简介  
  
GXDE 是以 deepin 15 时代的深度桌面环境为特色、持续优化桌面体验的桌面环境，致力于提供优雅、稳定、轻量化的开箱即用体验，减轻新手痛苦，节省老手时间  
  
现在 GXDE 已成功移植至 deepin 25，目前支持 amd64、arm64、loong64（未测试）、riscv64（未测试）  
提示：目前暂不支持 kmre  
  
**注意：GXDE 暂不支持磐石，如需使用 GXDE 需彻底禁用磐石，建议用提供的 ISO 安装**  
**注意：GXDE 目前和 DDE 冲突，暂不支持与 DDE 共存，如需安装 GXDE 需彻底卸载 DDE，建议用提供的 ISO 安装**  
  
**⚠️目前仅为测试，非正式版本**  
  
官网： [https://www.gxde.top/](https://www.gxde.top/)    
  
开源地址：[https://gitee.com/GXDE-OS/](https://gitee.com/GXDE-OS/)    
[https://github.com/GXDE-OS/](https://github.com/GXDE-OS/)    
  
![spark store](/news/development/gxde-for-deepin25/spark-store.jpg)  
  
![fastfetch](/news/development/gxde-for-deepin25/fastfetch.jpg)  
  
## 下载地址  
  
> 因为服务器空间有限，所以只传了网盘  
  
**⚠️注意：该 ISO 并未开启磐石，且与源内的 DDE 冲突**  
  
目前只提供了 amd64 和 arm64 的 ISO，使用的不是 deepin 默认的安装器    
如果在安装过程中提示要输入密码，密码为 `live`    
  
123盘：https://www.123865.com/s/pDSKVv-B4PWv    
百度网盘：链接:https://pan.baidu.com/s/1L9A6q-xrkgKfZ_LIyfbDMQ?pwd=c7ps    
  
![calamares](/news/development/gxde-for-deepin25/calamares.jpg)    
  
## 副  
  
在移植过程中也向 deepin 上游提了部分 pr,下面仅列出部分    
https://github.com/deepin-community/pydbus/pull/1    
https://github.com/linuxdeepin/deepin-anything/pull/174    
https://github.com/deepin-community/android-platform-frameworks-base/pull/2    
https://github.com/deepin-community/translate-shell/pull/1    
https://github.com/deepin-community/crudini/pull/1    
