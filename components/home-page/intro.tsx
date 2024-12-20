import { Twemoji } from '~/components/ui/twemoji'

export function Intro() {
  return (
    <h1 className="text-neutral-900 dark:text-neutral-200">
      我是 <span className="font-medium">dial lee</span> -一位来自于中国南京的软件工程师
      <span className="hidden font-medium">Viet Nam</span>
      <span className="absolute ml-1.5 inline-flex pt-[3px]">
        <Twemoji emoji="twa-flag-china" />
      </span>
    </h1>
  )
}
