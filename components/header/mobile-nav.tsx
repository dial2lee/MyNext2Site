'use client'

import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { Menu as MenuIcon } from 'lucide-react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Link } from '~/components/ui/link'
import { Twemoji } from '~/components/ui/twemoji'
import { HEADER_NAV_LINKS, MORE_NAV_LINKS } from '~/data/navigation'
// import { SITE_METADATA } from '~/data/site-metadata'
// import { Logo } from './logo'

export function MobileNav() {
    let [mounted, setMounted] = useState(false)
    let navRef = useRef(null)

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), [])

    return (
        <div className="flex items-center sm:hidden">
            <Menu as="div" className="relative inline-block text-left">
                <div
                    className="flex items-center justify-center rounded-sm p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700"
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
                    <MenuItems className="absolute right-8 z-50 mt-2 w-32 origin-top-right translate-x-[calc(50%-17px)] rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden dark:bg-black">
                        <div className="space-y-1 p-1">
                            {[...HEADER_NAV_LINKS, ...MORE_NAV_LINKS].map((link) => (
                                <div
                                    key={link.title}
                                    className="cursor-pointer rounded-md hover:bg-gray-200 data-checked:bg-gray-200 dark:hover:bg-gray-800 dark:data-checked:bg-gray-800"
                                >
                                    <MenuItem as="div">
                                        {({ close }) => (
                                            <Link
                                                href={link.href}
                                                onClick={close}
                                                className="flex w-full items-center gap-3 px-2 py-1.5 text-sm"
                                            >
                                                {link.emoji ? <Twemoji size={'base'} emoji={link.emoji} /> : null}
                                                <span>{link.title}</span>
                                            </Link>
                                        )}
                                    </MenuItem>
                                </div>
                            ))}
                        </div>
                    </MenuItems>
                </Transition>
            </Menu>
        </div>
    )
}
