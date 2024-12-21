# FAQ

::: tip
Page Under Construction, Continuously Adding Issues and Solutions, PRs Welcome
:::

::: info
Please Click the Star in the Upper Right Corner, Your Support is Our Greatest Motivation
:::

You can track our development progress at https://gitee.com/GXDE-OS/GXDE/board

---

Q0: It's so slow when using `apt` to install packages. Can it be faster?

A0: We use multi-line download to solve this. Simply replace `apt` with `aptss` will solve this problem.

---

Q1: I can't operate bluetooth via control center.

A1: It's a known issue. We can't fix it for now. Please use the following command.

```
sudo aptss install blueman -y
```

Then launch `Bluetooth Manager` from launcher.

We feel sorry for the un-convenience. 

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
 
 A4: Please join our QQ Group to feedback: 881201853

---

Q5：When using KVM to boot GXDE OS，I found the color seems too pink

A5： kvm -vga virtio 

---


 Q6: I want to develop GXDE-style applications. How do I do that?
 
 A6: Bash/Python script-based applications can use [Garma](https://gitee.com/GXDE-OS/garma). For detailed usage, see: https://help.gnome.org/users/zenity/stable/
 
 A6: For native development, please use Qt/Dtk2. Related code is as follows:
 
 Available feature list: https://gitee.com/GXDE-OS/dtk5core/tree/master/src
 
 Available widget list: https://gitee.com/GXDE-OS/dtk2widget/tree/master/src/widgets
