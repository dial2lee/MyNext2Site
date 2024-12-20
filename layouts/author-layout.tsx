import type { Author } from 'contentlayer/generated'
import type { ReactNode } from 'react'
import { CareerTimeline } from '~/components/author/career'
import { SocialAccounts } from '~/components/author/social-accounts'
import { Button } from '~/components/ui/button'
import { Container } from '~/components/ui/container'
import { Image } from '~/components/ui/image'
import { PageHeader } from '~/components/ui/page-header'
import { Twemoji } from '~/components/ui/twemoji'
import { SITE_METADATA } from '~/data/site-metadata'

interface Props {
  children?: ReactNode
  content: Omit<Author, '_id' | '_raw' | 'body'>
}

export function AuthorLayout({ children }: Props) {
  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="关于我"
        description="关于我是谁、我正在做什么以及我为什么开始写这个博客的。没什么紧要的，只是对幕后打字人的一点介绍。"
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <div className="py-8">
        <div className="prose prose-lg max-w-full dark:prose-invert">
          {/* About Me Section */}
          <section>
            <h2 className="mt-0">About Me</h2>
            <div>
              <h2 className="mt-0">
                大家好 <Twemoji emoji="waving-hand" />
              </h2>
              <p>
                我目前主要是使用<strong>Java</strong>、<strong>Kotlin</strong>来构建Android应用。
                我也对<strong>JavaScript</strong>、<strong>React</strong>等Web前端开发充满兴趣。
                也希望将人工智能和物联网带入我们的生活。
              </p>
              <p>
                这个博客主要用来记录一些软件方面的见解和知识，顺便分享一些生活中我已经有所收获的所思所想。思考、写作和分享事物是一件很有趣的事情，
                这是我巩固对新概念和新想法理解的方法。
              </p>
              <p>
                如果您对我的帖子有任何意见和想法，我将不胜感激{' '}
                <Twemoji emoji="clinking-beer-mugs" />.
              </p>
            </div>
            <div>
              <div className="mt-[2em] mb-[1em] flex items-center justify-between [&>h2]:my-0">
                <h2>我的职业生涯</h2>
                {/*<Button as="a" href="/static/resume.pdf" target="_blank">*/}
                {/*  <span style={{ color: 'white' }}>简历</span>*/}
                {/*  <Twemoji emoji="page-facing-up" />*/}
                {/*</Button>*/}
              </div>
              <CareerTimeline />
            </div>
          </section>
          <section>
            <h2>技术栈</h2>
              <p>
                  此博客托管于{' '}
                  <a href="https://www.aliyun.com/" target="_blank">
                      阿里云
                  </a>
                  , 基于{' '}
                  <a href="https://nextjs.org/" target="_blank">
                      Next.js
                  </a>{' '}
                  and{' '}
                  <a href="https://tailwindcss.com/" target="_blank">
                      Tailwind CSS
                  </a>
              </p>
              <p>
                  非常感谢{' '}
                  <a href="https://www.leohuynh.dev/" target="_blank">
                      Tuan Anh Huynh
                  </a>{' '}
                  提供的开源、美观、易于使用的博客模板。
              </p>
              <p>
                  你也可以打开他的{' '}
                  <a href="https://github.com/hta218/leohuynh.dev" target="_blank">
                      Github 仓库
                  </a>{' '}
                  浏览、下载代码。
              </p>
              <div>
                  <h2>博客成长史</h2>
                  <p>
                      <div>自2017年开始构建我的个人博客。</div>
                      <div>
                          最初，我的博客时建立在GitHub的个人主页之上，享受着开源社区的便利与支持。
                      </div>
                      然而，出于特定考量，博客迁移至Coding平台的个人主页服务，继续我的写作与分享之路。
                      <div>
                          随着对博客功能性和灵活性需求的增长，我决定采用Next.js框架，并将其部署在Vercel平台上，以追求更佳的用户体验和技术实现。
                      </div>
                      <div>
                          随着时间推移，为了进一步提升博客的稳定性与自主控制权，我购置了网络存储设备（NAS），并在其上通过容器化技术部署了我的博客，
                          同时利用阿里云的服务进行外部访问的优化与中转。如今，我的个人博客已在NAS上稳健运行，成为我日常思考与创意表达的重要平台。
                      </div>
                  </p>
              </div>
          </section>
          <section>
              <h2>联系方式</h2>
              <p>
                  通过以下方式联系我{' '}
                  <a href={`mailto:${SITE_METADATA.email}`}>{SITE_METADATA.email}</a>{' '}
                  或者通过其他社交媒体找到我:
              </p>
              <SocialAccounts />
          </section>
          </div>
      </div>
    </Container>
  )
}
