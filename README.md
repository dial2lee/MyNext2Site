<h1 align="center">我的编码生活</h1>
<p align="center"><i>提升我的技能，分享我学到的知识和激发我更加奋进。</i></p>

<p align="center"><i>喜欢这个项目吗？请访问我的<a href="https://www.diallee.com">个人网站</a></i></p>
<br>

此博客托管在 [Vercel](https://vercel.com/)上， 基于 **Tailwind Nextjs Starter Blog**使用 [Next.js](https://nextjs.org/) 和 [Tailwind CSS](https://tailwindcss.com/) 创建。

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

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Typescript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[Tailwind CSS]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind CSS-url]: https://tailwindcss.com/
[MDX]: https://img.shields.io/badge/MDX-000000?style=for-the-badge&logo=mdx&logoColor=white
[MDX-url]: https://mdxjs.com/
[React]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vercel]: https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white
[Vercel-url]: https://vercel.com/
