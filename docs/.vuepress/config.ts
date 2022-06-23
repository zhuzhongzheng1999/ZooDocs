/*
 * @Description: 
 * @Author: zhuzhongzheng
 * @Date: 2022-06-21 08:46:27
 * @LastEditors: zhuzhongzheng
 * @LastEditTime: 2022-06-23 21:28:39
 */
import { defineUserConfig } from "vuepress";
import theme from "./theme";


export default defineUserConfig({
  lang: "zh-CN",
  title: "Zoo",
  description: "",

  base: "/",

  theme
});
