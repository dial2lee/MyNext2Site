import { int, mysqlEnum, mysqlTable, primaryKey, varchar } from 'drizzle-orm/mysql-core'

const typeEnumValues = ['blog', 'snippet'] as const
export let typeEnum = mysqlEnum('type', typeEnumValues)

export let statsTable = mysqlTable(
  'stats',
  {
    type: typeEnum.notNull(),
    slug: varchar('slug', { length: 255 }).notNull(),
    views: int('views').notNull().default(0),
    loves: int('loves').notNull().default(0),
    applauses: int('applauses').notNull().default(0),
    ideas: int('ideas').notNull().default(0),
    bullseyes: int('bullseyes').notNull().default(0),
  },
  ({ type, slug }) => {
    return {
      pk: primaryKey({ columns: [type, slug] }),
    }
  }
)

export type StatsType = (typeof typeEnumValues)[number]
export type SelectStats = typeof statsTable.$inferSelect
