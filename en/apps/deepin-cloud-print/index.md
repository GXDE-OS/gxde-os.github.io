# Deepin Cloud Print

## Overview

Deepin Cloud Print is a new printing solution developed by Wuhan Deepin Technology Co., Ltd.. It will connect your printer to the network, and is enabled for network printing via daily used applications. Deepin Cloud Print is suitable for desktops, laptops, some tablets and other networking devices that you have authorized to print.

Deepin Cloud Print is NOT opensourced. The copyright belongs to Wuhan Deepin Technology Co., Ltd..

Deepin Cloud Print consists of Server (in Windows) and Client (in GXDE), which will be configured respectively.

## Server Configurations

You can install the application program for Deepin Cloud Print Server and configure the authorization code in Windows.

### Install Deepin Cloud Print

1. Download the installation program for Deepin Cloud Print Server[Download Link](https://shenmo.lanzoul.com/irKKh2bmxekd).
2. Install in Windows.
3. Finish the installation by wizard.

### Set The Authorization Code

The server IP address will be acquired in Windows automatically after finished the installation, then you can set the authorization code.

> ![notes](/apps/deepin-cloud-print/en_US/icon/notes.png): If you need to change the authorization code, please input a new one in the textbox, and then click on **Update**.

1. Click the start menu to open the program of Deepin Cloud Print Server in Windows.
2. Acquire the IP address automatically.
3. Input the authorization code in the settings interface of Deepin Cloud Print Server.
4. Click on **Update**, then ![spinner](/apps/deepin-cloud-print/en_US/icon/icon_spinner.png) will be displayed.
5. After updated the authorization code, ![success](/apps/deepin-cloud-print/en_US/icon/icon_success.png) will be displayed.

 ![0|windowssetting](/apps/deepin-cloud-print/en_US/jpg/windowssetting.jpg)

## Client Configurations

You can open Deepin Cloud Print Client in deepin to add one or more cloud printers.

### Open Deepin Cloud Print

1. Click on ![launcher-24](/apps/deepin-cloud-print/en_US/icon/launcher-24.png) to enter launcher.
2. Click on ![printer-24](/apps/deepin-cloud-print/en_US/icon/printer-24.png) to enter the interface of Deepin Cloud Print.

### Set Deepin Cloud Print

1. On the interface of Deepin Cloud Print, input the IP address and authorization code of Deepin Cloud Print Server from Windows.
2. Click on ![icon_next](/apps/deepin-cloud-print/en_US/icon/icon_next.png) to show all printers from Windows.
3. Click on ![icon_plus](/apps/deepin-cloud-print/en_US/icon/icon_plus.png) to add the printer, and then its status will be displayed in "Added".
4. Click on ![icon_setting](/apps/deepin-cloud-print/en_US/icon/icon_setting.png) to enter the interface of print settings.
5. You can view whether the printer is added successfully.

 ![1|deepinssetting](/apps/deepin-cloud-print/en_US/jpg/deepinssetting.png)

> ![notes](/apps/deepin-cloud-print/en_US/icon/notes.png): If you need to delete the printer, please enter "Print Settings" to select the printer, then select **Delete** in the context menu.

## Print Test 

You can use cloud print to print files in deepin, taking .doc files as the example.

1. Open .doc files by WPS.
2. Click on **Writer** on the top left corner.
3. Select **Print** to enter the interface of print settings.
4. Select the printer in the pull-down option of **Name**, and set other print parameters.
5. Click on **OK**.

 ![0|printsetting](/apps/deepin-cloud-print/en_US/jpg/printsetting.jpg)

> ![attention](/apps/deepin-cloud-print/en_US/icon/attention.png): If authorization code has been updated in Windows, when you are printing a file, there will be a prompt of "The authorization code of cloud print server has been updated, please input a new authorization code". Please contact the administrator to get the new one to print. If errors occurred during printing, please reset according to the errors.
