import clsx from 'clsx'
import { Minus, Plus } from 'lucide-react'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import { Image } from '~/components/ui/image'
import { Link } from '~/components/ui/link'
import { Twemoji } from '~/components/ui/twemoji'

const EXPERIENCES = [
  {
    org: '联通智网',
    url: 'https://www.cu-sc.com/',
    logo: '/static/images/cusc-logo.png',
    start: '2021年5月',
    end: '现在',
    title: '软件工程师 从事车机端应用开发',
    icon: 'briefcase',
    event: 'career-weaverse',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>基于思必驰的语音技术开发车机端语音助手应用</li>
          <li>语音助手应用适配多语音能力供应商的架构调整</li>
        </ul>
      )
    },
  },
  {
    org: '辛巴科技',
    url: 'https://www.simbalink.cn/',
    logo: '/static/images/simba-logo.jpg',
    start: '2019年11月',
    end: '2021年4月',
    title: '软件工程师 从事车机端应用开发',
    icon: 'man-technologist',
    event: 'career-foxecom',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>从零基于讯飞语音基础能力搭建车机语音应用的框架和功能的开发</li>
          <li>开发一款手表控车应用</li>
        </ul>
      )
    },
  },
  {
    org: '苏宁软件',
    url: 'https://www.blockx.cn/index.html',
    logo: '/static/images/suning-logo.jpg',
    start: '2018年9月',
    end: '2019年10月',
    title: '软件工程师 从事人工智能应用开发',
    icon: 'man-technologist',
    event: 'career-coc-coc',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>基于部门语音基础能力开发一款Android用户端应用</li>
          <li>
            基于Electron等技术开发一款称管理桌面端,有效的提升了智能货柜和无人商店的货柜称管理的便携
          </li>
          <li>引入jenkins自动构建打包提升了效率</li>
          <li>负责开发一款基于3D结构光摄像头的人脸识别支付应用，应用于公司食堂支付场景</li>
        </ul>
      )
    },
  },
  {
    org: '中兴软创',
    url: 'https://www.iwhalecloud.com/',
    logo: '/static/images/ztesoft-logo.jpg',
    start: '2013年3月',
    end: '2018年12月',
    title: '软件工程师 从事Android应用开发',
    icon: 'man-technologist',
    event: 'career-bravebits',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            为各省、市电信分公司开发资源管理Android端，主要是基于资源数据的界面和ArcGis地图管理
          </li>
          <li>负责移动团队的管理和技术框架升级，安排、协调组员的开发任务，推进各项目的开展</li>
          <li>参与React Native应用框架fish-mobile-x的开发任务，一次编写多端运行</li>
        </ul>
      )
    },
  },
  {
    org: '诚迈科技',
    url: 'https://www.archermind.com/',
    logo: '/static/images/archermind-logo.jpg',
    start: 'May 2017',
    end: 'Jul 2018',
    title: '软件工程师 从事Android车载应用开发',
    icon: 'man-technologist',
    event: 'career-mindx',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>负责车载终端系统原生应用的定制开发和bug修复，主要包括短信、图库、指南针等应用</li>
          <li>
            负责或者参与第三方应用的设计、技术预研、开发工作，比如远程文件管理、数据备份和恢复等
          </li>
        </ul>
      )
    },
  },
]

export function CareerTimeline() {
  return (
    <ul className="m-0 list-none p-0">
      {EXPERIENCES.map((exp, idx) => (
        <li key={exp.url} className="m-0 p-0">
          <TimelineItem exp={exp} last={idx === EXPERIENCES.length - 1} />
        </li>
      ))}
    </ul>
  )
}

function TimelineItem({
  exp,
  last,
}: { exp: (typeof EXPERIENCES)[0]; last?: boolean }) {
  let { org, title, icon, url, logo, start, end, event, details: Details } = exp
  return (
    <div
      className={clsx(
        'group/timeline-item',
        'relative -mx-3 flex flex-row items-start gap-3 rounded-lg p-3',
        'cursor-pointer bg-transparent transition-colors hover:bg-slate-100 dark:hover:bg-slate-800',
        !last && [
          'before:absolute before:top-15 before:left-9',
          'before:h-full before:w-px',
          'before:bg-gray-300 dark:before:bg-gray-500',
        ],
      )}
    >
      <Image
        src={logo}
        alt={org}
        className="h-12 w-12! shrink-0 rounded-md"
        style={{ objectFit: 'contain' }}
        width={200}
        height={200}
      />
      <details className="w-full open:[&_.minus]:block open:[&_.plus]:hidden">
        <summary className="relative pr-10 marker:content-none">
          <Plus
            size={18}
            className={clsx([
              'plus',
              'group-hover/timeline-item:visible md:invisible',
              'absolute top-1 right-1',
              'transition-transform duration-300 ease-in-out',
              'text-gray-600 dark:text-gray-500',
            ])}
            data-umami-event={`${event}-expand`}
          />
          <Minus
            size={18}
            className={clsx([
              'minus hidden',
              'absolute top-1 right-1',
              'transition-transform duration-300 ease-in-out',
              'text-gray-600 dark:text-gray-500',
            ])}
            data-umami-event={`${event}-collapse`}
          />
          <div className="flex flex-col">
            <div className="line-clamp-1 text-xs text-gray-500 tabular-nums dark:text-gray-400">
              <span>{start}</span> – <span>{end}</span>
            </div>
            <Link
              href={url}
              className="line-clamp-1 w-fit font-semibold text-gray-900! no-underline hover:text-gray-900 dark:text-white! dark:hover:text-white"
            >
              <GrowingUnderline data-umami-event={event}>
                {org}
              </GrowingUnderline>
            </Link>
            <div className="flex items-center gap-1 pt-1 text-sm text-gray-700 dark:text-gray-200">
              <Twemoji emoji={icon} className="-mt-1!" />
              <span>{title}</span>
            </div>
          </div>
        </summary>
        <div className="pt-1 text-base">
          <Details />
        </div>
      </details>
    </div>
  )
}
