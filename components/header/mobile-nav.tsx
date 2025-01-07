'use client'

import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { Menu as MenuIcon } from 'lucide-react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Link } from '~/components/ui/link'
import { Twemoji } from '~/components/ui/twemoji'
import { HEADER_NAV_LINKS, MORE_NAV_LINKS } from '~/data/navigation'
import { SITE_METADATA } from '~/data/site-metadata'
import { Logo } from './logo'

export function MobileNav() {
  let [mounted, setMounted] = useState(false)
  let navRef = useRef(null)

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <div className="flex items-center sm:hidden">
      <Menu as="div" className="relative inline-block text-left">
        <div
          className="flex items-center justify-center rounded p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700"
          data-umami-event="mobile-nav-toggle"
        >
          <MenuButton aria-label="Toggle Menu">
            <MenuIcon size={22} />
          </MenuButton>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="absolute right-8 z-50 mt-2 w-32 origin-top-right translate-x-[calc(50%-17px)] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-black">
            {[...HEADER_NAV_LINKS, ...MORE_NAV_LINKS].map((link) => (
              <MenuItem
                as="div"
                key={link.title}
                className="flex w-full items-center gap-3 px-2 py-1.5 text-sm"
              >
                {({ close }) => (
                  <Link
                    href={link.href}
                    onClick={close}
                    className="w-full py-1 text-xl font-bold tracking-widest text-gray-900 outline outline-0 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                  >
                    {link.emoji ? <Twemoji size={'base'} emoji={link.emoji} /> : null}
                    <span className="ml-4">{link.title}</span>
                  </Link>
                )}
              </MenuItem>
            ))}
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  )
}
