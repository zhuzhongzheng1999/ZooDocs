/*
 * @Description: 
 * @Author: zhuzhongzheng
 * @Date: 2022-06-21 08:46:27
 * @LastEditors: zhuzhongzheng
 * @LastEditTime: 2022-06-22 08:57:43
 */
import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({

  // 站点域名
  hostname: "",

  pageInfo: false,

  // 作者
  author: {
    name: "",
    url: "",
  },

  // icon集
  iconAssets: "iconfont",

  // logo: "/logo.svg",

  // repo: "vuepress-theme-hope/vuepress-theme-hope",

  // docsDir: "demo/src",
  navbarLayout: {
    left: ["Brand"],
    center: [],
    right: ["Links", "Language", "Repo", "Search"],
  },

  navbar: navbar,
  sidebar: sidebar,

  plugins: {
    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
