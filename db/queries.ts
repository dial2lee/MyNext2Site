import { and, eq } from 'drizzle-orm'
import { db } from './index'
import {
  type InsertBook,
  type InsertMovie,
  type SelectBook,
  type SelectMovie,
  type SelectStats,
  type StatsType,
  booksTable,
  moviesTable,
  statsTable,
} from './schema'

export async function getBlogStats(type: StatsType, slug: string) {
  let stats = await db
    .select()
    .from(statsTable)
    .where(and(eq(statsTable.type, type), eq(statsTable.slug, slug)))
  if (stats.length) {
    return stats[0]
  }
  let newStats = await db.insert(statsTable).values({ type, slug })
  return newStats[0]
}

export async function updateBlogStats(
  type: StatsType,
  slug: string,
  updates: Omit<SelectStats, 'type' | 'slug'>
) {
  let currentStats = await getBlogStats(type, slug)
  // Safeguard against negative updates
  for (let key in updates) {
    if (typeof updates[key] === 'number' && updates[key] < currentStats[key]) {
      updates[key] = currentStats[key]
    }
  }
  let updatedStats = await db
    .update(statsTable)
    .set(updates)
    .where(and(eq(statsTable.type, type), eq(statsTable.slug, slug)))
  return updatedStats[0]
}

export async function upsertBooks(booksData: InsertBook[]) {
  if (booksData.length === 0) return

  let books: InsertBook[] = booksData.map((bookData) => ({
    ...bookData,
    updatedAt: new Date(),
  }))

  await db.insert(booksTable).values(books)
}

export async function upsertManyMovies(moviesData: InsertMovie[]) {
  if (moviesData.length === 0) return

  let movies: InsertMovie[] = moviesData.map((movieData) => ({
    ...movieData,
    updatedAt: new Date(),
  }))

  await db.insert(moviesTable).values(movies)
}

export async function getAllBooks(): Promise<SelectBook[]> {
  return db.select().from(booksTable).orderBy(booksTable.userReadAt)
}

export async function getAllMovies(): Promise<SelectMovie[]> {
  return db.select().from(moviesTable).orderBy(moviesTable.dateRated)
}
