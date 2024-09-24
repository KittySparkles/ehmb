import {
  createContext,
  type FC,
  type PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"

import type { MasteryType } from "../../types"
import { generateId } from "../../helpers/generateId"

export type Bookmark = {
  id: string
  hash: `${MasteryType}string`
  createdAt: Date
  updatedAt?: Date
}
export type SerializedBookmark = Bookmark & {
  createdAt: string
  updatedAt?: string
}

export const BookmarksContext = createContext<{
  bookmarks: Bookmark[]
  addBookmark: (hash: string) => void
  updateBookmark: (id: string, hash: string) => void
  removeBookmark: (id: string) => void
  findBookmarkByHash: (id: string) => Bookmark | undefined
}>({
  bookmarks: [],
  addBookmark: () => undefined,
  updateBookmark: () => undefined,
  removeBookmark: () => undefined,
  findBookmarkByHash: () => undefined,
})

export const BookmarksProvider: FC<PropsWithChildren> = ({ children }) => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(() => {
    if (typeof window === "undefined") return []
    try {
      return (
        JSON.parse(
          window.localStorage.getItem("ehmb.bookmarks") ?? ""
        ) as SerializedBookmark[]
      ).map((bookmark) => ({
        ...bookmark,
        createdAt: new Date(bookmark.createdAt),
        updatedAt: bookmark.updatedAt
          ? new Date(bookmark.updatedAt)
          : undefined,
      }))
    } catch {
      return []
    }
  })

  const addBookmark = useCallback((hash: string) => {
    setBookmarks((bookmarks) =>
      bookmarks.concat({
        id: generateId(),
        hash,
        createdAt: new Date(),
      } as Bookmark)
    )
  }, [])

  const updateBookmark = useCallback((id: string, hash: string) => {
    setBookmarks((bookmarks) =>
      bookmarks.map((bookmark) =>
        bookmark.id === id
          ? ({ ...bookmark, hash, updatedAt: new Date() } as Bookmark)
          : bookmark
      )
    )
  }, [])

  const removeBookmark = useCallback((id: string) => {
    setBookmarks((bookmarks) =>
      bookmarks.filter((bookmark) => bookmark.id !== id)
    )
  }, [])

  const findBookmarkByHash = useCallback(
    (hash: string) => bookmarks.find((bookmark) => bookmark.hash === hash),
    [bookmarks]
  )

  useEffect(() => {
    window.localStorage.setItem("ehmb.bookmarks", JSON.stringify(bookmarks))
  }, [bookmarks])

  const context = useMemo(
    () => ({
      bookmarks,
      addBookmark,
      updateBookmark,
      removeBookmark,
      findBookmarkByHash,
    }),
    [bookmarks, addBookmark, updateBookmark, removeBookmark, findBookmarkByHash]
  )

  return (
    <BookmarksContext.Provider value={context}>
      {children}
    </BookmarksContext.Provider>
  )
}

export const useBookmarks = () => useContext(BookmarksContext)
