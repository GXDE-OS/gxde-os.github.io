# APT 源安装

> amd64、arm64 等已经有 ISO 安装镜像的，建议使用 ISO 安装  
> 目前支持 amd64、arm64、mips64 和 loong64，但 loong64 并未测试

1. 下载并安装 Debian（推荐使用不带 GUI 的 debian，loong64 使用这个镜像：http://lauosc.cn:11232/iso/loong64/debian/debian12-live-gnome-loong64-20230629.iso ）
2. 添加 apt 源

```bash
echo "deb [trusted=true] http://dde15.debian12.gfdgdxi.top ./" > sudo tee /etc/apt/sources.list.d/gxde.list
sudo apt update
sudo apt install gxde-desktop
```

输入以上命令后重启即可
