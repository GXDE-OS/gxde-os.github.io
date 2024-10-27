import { defineConfig } from "vitepress";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GXDE OS：经典延续",
  description:
    "基于更新底层的 GXDE，让 DDE 15 重回人们的视野（GXDE，Gorgeous eXtended Deepin Environment）",
  head: [["link", { rel: "icon", href: "/logo.png", type: "image/png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "使用指南", link: "/install/", activeMatch: "^/install/" },
    ],

    sidebar: [
      {
        text: "使用指南",
        items: [
          { text: "快速了解", link: "/install/" },
          { text: "如何安装 GXDE？", link: "/install/install" },
          { text: "FAQ", link: "/install/faq" },
        ],
      },
      {
        text: "特色应用",
        items: [
          { text: "深度云扫描", link: "/apps/deepin-cloud-scan/"},
          { text: "深度云打印", link: "/apps/deepin-cloud-print/"},
          { text: "GXDE 备份还原工具", link: "/apps/gxde-clone/"},
          { text: "GXDE 影院", link: "/apps/gxde-movie/"},
          { text: "GXDE 终端", link: "/apps/gxde-terminal/"},
          { text: "GXDE 音乐", link: "/apps/gxde-music/"},
          { text: "GXDE 看图", link: "/apps/gxde-image-viewer/"},
          { text: "GXDE 软件包管理器", link: "/apps/gxde-deb-installer/"},
          { text: "GXDE 编辑器", link: "/apps/gxde-editor/"}
        ]
      }
    ],

    socialLinks: [
      {
        icon: {
          svg: '<svg t="1726642385584" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1453" width="200" height="200"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" p-id="1454"></path></svg>',
        },
        link: "https://gitee.com/GXDE-OS",
      },
      { icon: "github", link: "https://github.com/GXDE-OS" },
      {
        icon: {
          svg: '<svg t="1726643547175" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3504" width="200" height="200"><path d="M512 1024C229.226667 1024 0 794.773333 0 512 0 229.226667 229.226667 0 512 0 794.773333 0 1024 229.226667 1024 512 1024 794.773333 794.773333 1024 512 1024ZM693.333333 458.666667C689.024 438.634667 682.666667 426.666667 682.666667 426.666667 682.666667 426.666667 682.944 397.333333 650.666667 330.666667 618.389333 264 522.666667 256 522.666667 256L512 256C512 256 416.277333 264 384 330.666667 351.722667 397.333333 352 426.666667 352 426.666667 352 426.666667 345.642667 438.634667 341.333333 458.666667 337.024 478.698667 341.333333 490.666667 341.333333 490.666667 341.333333 490.666667 286.656 546.421333 288 586.666667 289.344 626.912 299.221333 652.544 320 629.333333 340.778667 606.122667 341.333333 608 341.333333 608 341.333333 608 340.970667 625.333333 352 640 363.029333 654.666667 373.333333 661.333333 373.333333 661.333333 373.333333 661.333333 317.386667 689.034667 330.666667 725.333333 343.946667 761.632 384.874667 768.288 416 768 447.125333 767.712 512 746.666667 512 746.666667L522.666667 746.666667C522.666667 746.666667 587.541333 767.712 618.666667 768 649.792 768.288 690.72 761.632 704 725.333333 717.28 689.034667 661.333333 661.333333 661.333333 661.333333 661.333333 661.333333 671.637333 654.666667 682.666667 640 693.696 625.333333 693.333333 608 693.333333 608 693.333333 608 693.888 606.122667 714.666667 629.333333 735.445333 652.544 745.322667 626.912 746.666667 586.666667 748.010667 546.421333 693.333333 490.666667 693.333333 490.666667 693.333333 490.666667 697.642667 478.698667 693.333333 458.666667Z" p-id="3505"></path></svg>',
        },
        link: "/QQ.jpg",
      },
    ],

    footer: {
      message:
        "最后由衷的感谢星火团队提供的资源以及服务，使 GXDE 可以获得更好的体验",
      copyright:
        "Copyright © 2023-present, gfdgd xi (as part of the GXDE OS Team)",
    },

    logo: "/logo.png",
  },

  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
    },
    en: {
      label: "English",
      lang: "en",

      title: "GXDE OS: Continues",
      description:
        "Based on the updated underlying GXDE, let DDE 15 return to people's vision (GXDE, Gorgeous eXtended Deepin Environment)",

      themeConfig: {
        nav: [
          { text: "Home", link: "/en/" },
          {
            text: "Getting Started",
            link: "/en/install/",
            activeMatch: "^/en/install/",
          },
        ],
        sidebar: [
          {
            text: "Getting Started",
            items: [
              { text: "Quick Start", link: "/en/install/" },
              { text: "How to Install GXDE?", link: "/en/install/install" },
              { text: "FAQ", link: "/en/install/faq" },
            ],
          },
          {
            text: "Feature Programs",
            items: [
              { text: "Deepin Cloud Scanner", link: "/en/apps/deepin-cloud-scan/"},
              { text: "Deepin Cloud Print", link: "/en/apps/deepin-cloud-print/"},
              { text: "GXDE Clone", link: "/en/apps/gxde-clone/"},
              { text: "GXDE Movie", link: "/en/apps/gxde-movie/"},
              { text: "GXDE Terminal", link: "/en/apps/gxde-terminal/"},
              { text: "GXDE Music", link: "/en/apps/gxde-music/"},
              { text: "GXDE Image Viewer", link: "/en/apps/gxde-image-viewer/"},
              { text: "GXDE Package Manager", link: "/en/apps/gxde-deb-installer/"},
              { text: "GXDE Editor", link: "/en/apps/gxde-editor/"}
            ]
          }
        ],
      },
    },
  },

  lastUpdated: true,
  cleanUrls: true,

  vite: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
});
