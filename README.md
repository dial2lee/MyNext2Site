<h1 align="center">我的编码生活</h1>
<p align="center"><i>提升我的技能，分享我学到的知识和激发我更加奋进。</i></p>

<p align="center"><i>喜欢这个项目吗？请访问我的<a href="https://www.diallee.com">个人网站</a></i></p>
<br>

此博客部署在阿里云服务器上， 基于 **Tailwind Nextjs Starter Blog**使用 [Next.js](https://nextjs.org/) 和 [Tailwind CSS](https://tailwindcss.com/) 创建。

[![Next][Next.js]][Next-url] [![MDX][MDX]][MDX-url] [![Vercel][Vercel]][Vercel-url] [![React][React]][React-url] [![Typescript][Typescript]][Typescript-url] [![Tailwind CSS][Tailwind CSS]][Tailwind CSS-url]

</br>

这个博客网站的灵感来源于[lehuynh.dev](https://github.com/hta218/leohuynh.dev)和[karhdo.dev](https://github.com/Karhdo/karhdo.dev)。我很感激 [Leo Huynh](https://twitter.com/hta218_) 和 [Timothy Lin](https://twitter.com/timlrxx) 对这个小巧、轻量和高度可定制的博客的贡献。

## 部署发布说明

### 数据库

目前使用的是阿里云对外提供服务，项目部署在个人Nas存储上，在Nas容器上部署了MySql数据库。文章的阅读、点赞等统计采用的是drizzle的方式连接数据库上报和获取统计数据。
drizzle.config.ts文件和db目录是数据库配置、数据表、以及数据接口定义等，数据库连接配置采用环境变量获取，可以在环境变量配置文件中设置好数据库连接信息（DATABASE_URL）。
如果需要新建表或者修改表结构需要修改配置文件并执行**yarn db:init**同步修改服务端数据库,**yarn db:studio**可以启动服务浏览器查看表结构

<p align="center"><b>Copyright © 2024 - diallee</b></p>

<!-- MARKDOWN LINKS & IMAGES -->

[![Next.js](https://img.shields.io/badge/next.js-000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/react-20232A?logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/typescript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MDX](https://img.shields.io/badge/mdx-1a1a1a?logo=mdx&logoColor=white)](https://mdxjs.com/)
[![Vercel](https://img.shields.io/badge/vercel-000?logo=vercel&logoColor=white)](https://vercel.com/)
[![Umami](https://img.shields.io/badge/umami-262626?logo=umami&logoColor=white)](https://umami.is/)
[![Supabase](https://img.shields.io/badge/supabase-3ECF8E?logo=supabase&logoColor=white)](https://supabase.com/)
[![Drizzle ORM](https://img.shields.io/badge/drizzle%20orm-1a1a1a?logo=drizzle&logoColor=white)](https://orm.drizzle.team/)
[![Shiki](https://img.shields.io/badge/shiki-ff4d6d?logo=shiki&logoColor=white)](https://shiki.matsu.io/)
