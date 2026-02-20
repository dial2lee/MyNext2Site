'use client'

import { clsx } from 'clsx'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { Twemoji } from '~/components/ui/twemoji'

function createTypedInstance(el: HTMLElement) {
  return new Typed(el, {
    stringsElement: '#bios',
    typeSpeed: 40,
    backSpeed: 10,
    loop: true,
    backDelay: 1000,
  })
}

export function TypedBios() {
  let el = useRef(null)
  let typed = useRef<Typed | null>(null)

  useEffect(() => {
    if (el.current) {
      typed.current?.destroy()
      typed.current = createTypedInstance(el.current)
    }
  }, [])

  return (
    <div
      className={clsx([
        'flex min-h-8 items-center gap-0.5',
        [
          '[&_.typed-cursor]:inline-block',
          '[&_.typed-cursor]:w-2',
          '[&_.typed-cursor]:h-5.5',
          '[&_.typed-cursor]:text-transparent',
          '[&_.typed-cursor]:bg-slate-800',
          'dark:[&_.typed-cursor]:bg-slate-100',
        ],
      ])}
    >
      <ul id="bios" className="hidden">
        <li>我是一个学习者、建设者和自由追寻者。</li>
        <li>我住在中国南京。</li>
        <li>我出生在一马平川的华北平原。</li>
        <li>我学的第一门编程语言是C语言。</li>
        <li>我目前专注于语音交互应用的开发。</li>
        <li>
          我主要使用Java技术。
          <Twemoji emoji="java" />
        </li>
        <li>
          我是一个钓鱼爱好者。
          <Twemoji emoji="fishing" />
        </li>
        <li>
          我喜欢徒步。
          <Twemoji emoji="on-foot" />
        </li>
        <li>
          我喜欢历史和地理。 <Twemoji emoji="history" /> & <Twemoji emoji="geography" />
        </li>
        <li>我希望有一天能够走遍自己的清单。</li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}
