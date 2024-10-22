import { genPageMetadata } from 'app/seo'
import { allSnippets } from 'contentlayer/generated'
import { SnippetCard } from '~/components/cards/snippet'
import { Container } from '~/components/ui/container'
import { PageHeader } from '~/components/ui/page-header'
import { allCoreContent } from '~/utils/contentlayer'
import { sortPosts } from '~/utils/misc'

export let metadata = genPageMetadata({ title: 'Snippets' })

export default function Snippets() {
  let snippets = allCoreContent(sortPosts(allSnippets))

  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="碎片"
        description={
          <>
            <p>
              我收藏的代码片段或者工具。它们使用简单且可重复使用，您可以随意复制、调整和使用它们。
            </p>
            <p className="mt-3 italic">有些片段是我写的，有些来自互联网（感谢开源社区）</p>
          </>
        }
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <div className="py-10">
        <div className="grid-cols-2 space-y-10 gap-x-6 gap-y-10 md:grid md:space-y-0">
          {snippets.map((snippet) => (
            <SnippetCard snippet={snippet} key={snippet.path} />
          ))}
        </div>
      </div>
    </Container>
  )
}
