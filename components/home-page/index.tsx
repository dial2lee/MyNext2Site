import type { Blog, Snippet } from '~/.contentlayer/generated'
import { ProfileCard } from '~/components/cards/profile'
import { Container } from '~/components/ui/container'
import { Twemoji } from '~/components/ui/twemoji'
import type { SelectBook, SelectMovie } from '~/db/schema'
import type {
  CoreContent,
  GithubUserActivity,
  RecentlyPlayedData,
} from '~/types/data'
import { ActivitiesFeed } from './activities/feed'
import { Greeting } from './greeting'
import { Intro } from './intro'
import { LatestPosts } from './latest-posts'
import { BlogLinks } from './links'
import { TypedBios } from './typed-bios'

export function Home({
  posts,
  snippets,
  currentlyReading,
  lastWatchedMovie,
  recentlyPlayed,
  githubActivities,
}: {
  posts: CoreContent<Blog>[]
  snippets: CoreContent<Snippet>[]
  currentlyReading: SelectBook | null
  lastWatchedMovie: SelectMovie | null
  recentlyPlayed: RecentlyPlayedData
  githubActivities: GithubUserActivity | null
}) {
  return (
    <Container as="div" className="space-y-6 pt-4 md:space-y-24 lg:pt-12">
      <div className="pt-6 xl:grid xl:grid-cols-3">
        <div className="space-y-4 md:space-y-6 md:pr-8 xl:col-span-2">
          <Greeting />
          <div className="text-base leading-7 text-gray-600 md:text-lg md:leading-8 dark:text-gray-400">
            <Intro />
            <TypedBios />
            <div className="mt-4 mb-6 md:mb-8">
              <p>我从2009年开始学习编码，从那以后就迷上了。</p>
              <p>我在2011年找到了第一份Android编程的工作。</p>
              <p>我对Android和Web开发充满热情。</p>
              <p>我创办这个博客是为了记录和分享我的知识和经验。</p>
            </div>
            <BlogLinks />
            <p className="my-6 flex md:my-8">
              <span className="mr-2">享受你的阅读时光</span>
              <Twemoji emoji="clinking-beer-mugs" />
            </p>
          </div>
        </div>
        <div className="hidden pt-8 pl-4 xl:block">
          <ProfileCard />
        </div>
      </div>
      <LatestPosts posts={posts} snippets={snippets} />
      {/*<ActivitiesFeed*/}
      {/*  recentlyPlayed={recentlyPlayed}*/}
      {/*  currentlyReading={currentlyReading}*/}
      {/*  lastWatchedMovie={lastWatchedMovie}*/}
      {/*  githubActivities={githubActivities}*/}
      {/*/>*/}
      {/* {SITE_METADATA.newsletter?.provider && (
        <div className="flex items-center justify-center py-4 lg:py-10">
          <NewsletterForm />
        </div>
      )} */}
    </Container>
  )
}
