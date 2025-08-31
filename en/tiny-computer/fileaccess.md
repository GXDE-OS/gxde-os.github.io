# Tiny Computer File Access Guide

::: info
Source: https://gitee.com/caten/tc-hints/blob/master/pool/fileaccess.md  
Original Author: Caten  
:::

## Contents
- [Tiny Computer File Access Guide](#tiny-computer-file-access-guide)
  - [Contents](#contents)
    - [Accessing Android Files from Tiny Computer](#accessing-android-files-from-tiny-computer)
    - [Accessing USB/SD Card Files from Tiny Computer](#accessing-usbsd-card-files-from-tiny-computer)
    - [Accessing Tiny Computer Files from Android](#accessing-tiny-computer-files-from-android)

---

### Accessing Android Files from Tiny Computer

Ensure Tiny Computer has file access permissions:

![Example Image](/tiny-computer/6.jpg)

Open the Home folder in Tiny Computer.

The Videos, Pictures, Documents, etc. folders in Home are bound to their corresponding Android folders. Access them directly.

To access entire phone storage, navigate to the `sd` folder.

![Example Image](/tiny-computer/7.jpg)

### Accessing USB/SD Card Files from Tiny Computer

First, check the USB/SD card path using another file manager  
(Usually `/storage/xxxx...`. If the path is `/mnt/...`, you won't have access permissions).  
Then enter this address into Tiny Computer's file manager and press Enter.

Note: Do not only enter `/storage`  
or navigate through the `/storage` folder  
as this will not grant access permissions.

### Accessing Tiny Computer Files from Android

Even if the Tiny Computer system crashes or the software fails to start, the internal files are usually still accessible.

You first need a file manager that supports SAF (Storage Access Framework). Here we use [Material Files](https://github.com/zhaihai/MaterialFiles) as an example.

![Example Image](/tiny-computer/8.jpg)

![Example Image](/tiny-computer/9.jpg)

![Example Image](/tiny-computer/10.jpg)

![Example Image](/tiny-computer/11.jpg)

After granting permission, a new entry named `containers` will appear. You can click on it directly in the future to access Tiny Computer files.

![Example Image](/tiny-computer/12.jpg)

Now, you can access Tiny Computer files just like normal Android files!

This is the root folder of the Tiny Computer.

![Example Image](/tiny-computer/13.jpg)

The Home folder is located at `/home/tiny`.

![Example Image](/tiny-computer/14.jpg)