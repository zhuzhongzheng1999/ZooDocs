/*
 * @Description: 
 * @Author: zhuzhongzheng
 * @Date: 2022-06-21 08:46:27
 * @LastEditors: zhuzhongzheng
 * @LastEditTime: 2022-06-27 15:48:08
 */
import { defineUserConfig } from "vuepress";
import theme from "./theme";


export default defineUserConfig({
  lang: "zh-CN",
  title: "Zoo",
  description: "",

  base: "/zoodocs/",

  theme
});
