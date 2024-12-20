import { clsx } from 'clsx'
import { Link } from '~/components/ui/link'
import Image from 'next/image'

export function FooterBottom() {
  return (
    <div
      className={clsx([
        'pt-5 md:my-2',
        'flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between md:gap-16',
        'border-t border-gray-200 dark:border-gray-700',
      ])}
    >
      <div className="flex items-center"></div>
      <div className="my-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <Image
          src={'/static/images/public_security_filing.png'}
          alt={'公安备案图标'}
          width={18}
          height={18}
        />{' '}
        <Link href="https://beian.mps.gov.cn/#/query/webSearch?code=32011502011771">
          苏公网安备32011502011771
        </Link>
        <span>{` / `}</span>
        <Link href="https://beian.miit.gov.cn">苏ICP备2024145282号</Link>
        <span>{` / `}</span>
        <div>{`Copyright © ${new Date().getFullYear()}`}</div>
      </div>
    </div>
  )
}
