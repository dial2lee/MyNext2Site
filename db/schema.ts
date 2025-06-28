import {
  int,
  mysqlEnum,
  mysqlTable,
  primaryKey,
  varchar,
  longtext,
  decimal,
  datetime,
  json,
} from 'drizzle-orm/mysql-core'
import { createInsertSchema } from 'drizzle-zod'
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

export let booksTable = mysqlTable('books', {
  id: varchar({ length: 255 }).primaryKey().notNull(),
  guid: varchar({ length: 500 }).notNull(),
  pubDate: varchar({ length: 255 }).notNull(),
  title: longtext().notNull().notNull(),
  link: longtext().notNull(),
  bookImageUrl: longtext().notNull(),
  bookSmallImageUrl: longtext().notNull(),
  bookMediumImageUrl: longtext().notNull(),
  bookLargeImageUrl: longtext().notNull(),
  bookDescription: longtext().notNull(),
  authorName: varchar({ length: 500 }).notNull(),
  isbn: varchar({ length: 50 }),
  userName: varchar({ length: 255 }).notNull(),
  userRating: decimal().notNull(),
  userReadAt: varchar({ length: 255 }),
  userDateAdded: varchar({ length: 255 }).notNull(),
  userDateCreated: varchar({ length: 255 }).notNull(),
  userShelves: varchar({ length: 500 }),
  userReview: longtext(),
  averageRating: decimal().notNull(),
  bookPublished: varchar({ length: 255 }),
  content: longtext().notNull(),
  createdAt: datetime().notNull(),
  updatedAt: datetime().notNull(),
})

export let moviesTable = mysqlTable('movies', {
  id: varchar({ length: 255 }).primaryKey().notNull(),
  yourRating: decimal().notNull(),
  dateRated: varchar({ length: 255 }).notNull(),
  title: longtext().notNull(),
  originalTitle: longtext().notNull(),
  url: longtext().notNull(),
  titleType: varchar({ length: 100 }).notNull(),
  imdbRating: decimal().notNull(),
  runtime: decimal().notNull(),
  year: varchar({ length: 10 }),
  genres: varchar({ length: 500 }).notNull(),
  numVotes: decimal().notNull(),
  releaseDate: varchar({ length: 255 }).notNull(),
  directors: longtext().notNull(),
  actors: longtext().notNull(),
  plot: longtext().notNull(),
  poster: longtext().notNull(),
  language: varchar({ length: 500 }).notNull(),
  country: varchar({ length: 500 }).notNull(),
  awards: longtext().notNull(),
  boxOffice: varchar({ length: 100 }),
  totalSeasons: varchar({ length: 10 }),
  ratings: json().$type<Array<{ value: string; source: string }>>().notNull(),
  createdAt: datetime().notNull(),
  updatedAt: datetime().notNull(),
})

export let insertBookSchema = createInsertSchema(booksTable)
export let insertMovieSchema = createInsertSchema(moviesTable)

export type StatsType = (typeof typeEnumValues)[number]
export type SelectStats = typeof statsTable.$inferSelect
export type SelectBook = typeof booksTable.$inferSelect
export type InsertBook = typeof booksTable.$inferInsert
export type SelectMovie = typeof moviesTable.$inferSelect
export type InsertMovie = typeof moviesTable.$inferInsert
