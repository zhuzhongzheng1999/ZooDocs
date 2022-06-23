/*
 * @Description: 
 * @Author: zhuzhongzheng
 * @Date: 2022-06-21 08:46:27
 * @LastEditors: zhuzhongzheng
 * @LastEditTime: 2022-06-23 21:53:28
 */
import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "生态",
    icon: "stack",
    prefix: "/",
    children: [
      { text: "ZooPlayer", icon: "play", link: "ZooPlayer/info" },
      { text: "ZooCli", icon: "light", link: "ZooCli/info" },
      { text: "ZooUse", icon: "leaf", link: "ZooUse/info" },
      { text: "ZooTools", icon: "tool", link: "ZooTools/info" },
    ],
  }
]);
