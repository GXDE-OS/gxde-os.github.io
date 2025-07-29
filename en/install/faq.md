# FAQ

::: tip
Page Under Construction, Continuously Adding Issues and Solutions, PRs Welcome
:::

::: info
Please Click the Star in the Upper Right Corner, Your Support is Our Greatest Motivation
:::

You can track our development progress at https://gitee.com/GXDE-OS/GXDE/board

---

Q1: It's so slow when using `apt` to install packages. Can it be faster?

A1: Replace `apt` with `aptss` to enable multi-thread download. You can have aptss take over directly from apt by installing the package `apt-is-aptss`. 

A1: **It is recommended to perform an full upgrade after installation. Please run `yes | sudo aptss full-upgrade -y` .**



---


Q2: How to create a bootable disk?

A2: For Legacy boot, it is recommended to use Rufus in DD mode. For EFI, you can use the [Deepin Boot Maker](https://www.deepin.org/en/original/deepin-boot-maker/).


---

Q3: I Need to use Android Emulator, I need an older version kernel.

A3: Simply install the package `linux-kernel-oldstable-gxde-amd64` and boot with this kernel.





---

 Q4: What is beta testing? How can I join the beta test?
 
 A4: The latest development progress will be included in the beta test. If you want to experience the latest content, you can join the beta, but it is also unstable. It is recommended that users with some experience join.
 
 A4: Starting from version 15.14, you can join the beta test with one click in the Control Center. For details, see: https://www.bilibili.com/video/BV1FgsvenEjq
 
 A4: Please join our Discord Group: https://discord.gg/t5Uf2xYpvA

---

Q5：When using KVM to boot GXDE OS，I found the color seems too pink

A5： kvm -vga virtio 

---


 Q6: I want to develop GXDE-style applications. How do I do that?
 
 A6: Bash/Python script-based applications can use [Garma](https://gitee.com/GXDE-OS/garma). For detailed usage, see: https://help.gnome.org/users/zenity/stable/
 
 A6: For native development, please use Qt/Dtk2. Related code is as follows:
 
 Available feature list: https://gitee.com/GXDE-OS/dtk5core/tree/master/src
 
 Available widget list: https://gitee.com/GXDE-OS/dtk2widget/tree/master/src/widgets

---

 Q7: I want to use the Android app, what should I do

 A7: Currently, only machines that support amd64 and arm64 architectures and must use the GXDE OS ISO installation image are supported. If your machine meets the above conditions, simply search for the following applications in the Spark App Store and install them with one click  
spk link: [spk://store/tools/kmre](spk://store/tools/kmre)  
After installation, you need to restart the computer to start the Android environment normally  
![Installing KMRE from the Spark App Store](/news/15.14.3/kmre-on-spark-store.jpg)


---

Q8: I cannot use Spark App Store/some old-world applications on Loongnix 25. What should I do?  
A8: Due to ABI compatibility conflicts between liblol and Loongnix 25's abi-compat package, you need to remove abi-compat.  
Execute the following command in terminal and reboot to use Spark App Store/old-world 
applications normally:  
```bash
sudo apt purge abi-compat
```

---

**Q9:** My computer shows an abnormal display when installing/running GXDE, as shown in the image below. What should I do to fix this?  
![Special Effects Mode Abnormal](/install/display-error.jpg)  
**A9:** Since the 7a1000, NVIDIA graphics cards, and some older graphics cards currently do not support enabling Special Effects Mode, you just need to manually turn off Special Effects Mode in the Control Center or press the keyboard shortcut `Windows` + `Shift` + `Tab` to disable it.  

---