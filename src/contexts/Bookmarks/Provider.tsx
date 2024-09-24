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

export type Bookmark = {
  hash: `${MasteryType}string`
  createdAt: Date
}
export type SerializedBookmark = Bookmark & {
  createdAt: string
}

export const BookmarksContext = createContext<{
  bookmarks: Bookmark[]
  addBookmark: (hash: string) => void
  removeBookmark: (hash: string) => void
  isBookmarked: (hash: string) => Bookmark | undefined
}>({
  bookmarks: [],
  addBookmark: () => undefined,
  removeBookmark: () => undefined,
  isBookmarked: () => undefined,
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
      }))
    } catch {
      return []
    }
  })

  const addBookmark = useCallback((hash: string) => {
    setBookmarks((bookmarks) =>
      bookmarks.concat({
        hash,
        createdAt: new Date(),
      } as Bookmark)
    )
  }, [])

  const removeBookmark = useCallback((hash: string) => {
    setBookmarks((bookmarks) =>
      bookmarks.filter((bookmark) => bookmark.hash !== hash)
    )
  }, [])

  const isBookmarked = useCallback(
    (hash: string) => {
      return bookmarks.find((bookmark) => bookmark.hash === hash)
    },
    [bookmarks]
  )

  useEffect(() => {
    window.localStorage.setItem("ehmb.bookmarks", JSON.stringify(bookmarks))
  }, [bookmarks])

  const context = useMemo(
    () => ({ bookmarks, addBookmark, removeBookmark, isBookmarked }),
    [bookmarks, addBookmark, removeBookmark, isBookmarked]
  )

  return (
    <BookmarksContext.Provider value={context}>
      {children}
    </BookmarksContext.Provider>
  )
}

export const useBookmarks = () => useContext(BookmarksContext)
