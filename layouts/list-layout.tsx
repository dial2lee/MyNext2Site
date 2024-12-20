'use client'

import type { Blog } from 'contentlayer/generated'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { PostCardListView } from '~/components/blog/post-card-list-view'
import { SearchArticles } from '~/components/blog/search-articles'
import { Container } from '~/components/ui/container'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import { Link } from '~/components/ui/link'
import { PageHeader } from '~/components/ui/page-header'
import type { CoreContent } from '~/types/data'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  let pathname = usePathname()
  let basePath = pathname.split('/')[1]
  let prevPage = currentPage - 1 > 0
  let nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {prevPage ? (
          <Link
            className="cursor-pointer"
            href={
              currentPage - 1 === 1
                ? `/${basePath}/`
                : `/${basePath}/page/${currentPage - 1}`
            }
            rel="prev"
          >
            <GrowingUnderline className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span>上一页</span>
            </GrowingUnderline>
          </Link>
        ) : (
          <button
            type="button"
            className="cursor-auto disabled:opacity-50"
            disabled={!prevPage}
          >
            <GrowingUnderline className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span>上一页</span>
            </GrowingUnderline>
          </button>
        )}
        <span>
          {currentPage} / {totalPages}
        </span>
        {nextPage ? (
          <Link
            className="cursor-pointer"
            href={`/${basePath}/page/${currentPage + 1}`}
            rel="next"
          >
            <GrowingUnderline className="inline-flex items-center gap-2">
              <span>下一页</span>
              <ArrowRight className="h-4 w-4" />
            </GrowingUnderline>
          </Link>
        ) : (
          <button
            type="button"
            className="cursor-auto disabled:opacity-50"
            disabled={!nextPage}
          >
            <GrowingUnderline className="inline-flex items-center gap-2">
              <span>下一页</span>
              <ArrowRight className="h-4 w-4" />
            </GrowingUnderline>
          </button>
        )}
      </nav>
    </div>
  )
}

export function ListLayout({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  let [searchValue, setSearchValue] = useState('')
  let filteredBlogPosts = posts.filter((post) => {
    let searchContent = post.title + post.summary + post.tags?.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  let displayPosts =
    initialDisplayPosts.length > 0 && !searchValue
      ? initialDisplayPosts
      : filteredBlogPosts

  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title={title}
        description="大多是关于技术相关的文章，有时还写我的个人生活。可以使用下面的搜索来过滤查找。"
        className="border-b border-gray-200 dark:border-gray-700"
      >
        <SearchArticles
          label="输入搜索"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </PageHeader>
      {!filteredBlogPosts.length ? (
        <div className="py-10">还没有发布文章哦</div>
      ) : (
        <div className="space-y-12 divide-gray-200 pt-6 dark:divide-gray-700 md:space-y-20 md:pt-10">
          {displayPosts.map((post) => (
            <PostCardListView key={post.path} post={post} />
          ))}
        </div>
      )}
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
        />
      )}
    </Container>
  )
}
