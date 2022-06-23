/*
 * @Description: 
 * @Author: zhuzhongzheng
 * @Date: 2022-06-21 08:46:27
 * @LastEditors: zhuzhongzheng
 * @LastEditTime: 2022-06-23 21:28:48
 */
import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "生态",
    icon: "stack",
    prefix: "/ZooPlayer/",
    children: [
      { text: "ZooPlayer", icon: "play", link: "info" },
      { text: "zooCli", icon: "light", link: "" },
      { text: "zooUse", icon: "leaf", link: "" },
      { text: "zooTools", icon: "tool", link: "" },
    ],
  }
]);
