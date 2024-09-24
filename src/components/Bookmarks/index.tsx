import { useRef, type FC } from "react"
import { Link } from "react-router-dom"

import { type Bookmark, useBookmarks } from "../../contexts/Bookmarks/Provider"
import { dehashData } from "../../helpers/hash"
import { MASTERIES } from "../../schema/data"
import { Title } from "../Title"
import { Button, buttonStyles } from "../Button"
import { Dialog, type DialogProps } from "../Dialog"
import { boxStyles } from "../Box"
import type { Mastery } from "../../types"

import Styles from "./styles.module.css"

type BookmarkProps = {
  bookmark: Bookmark
  level: number
  mastery: Mastery
}

const BookmarkInfo: FC<BookmarkProps> = ({ bookmark, level, mastery }) => {
  const color = `rgb(${360 - level * 6}, ${level * 6}, 0)`
  const dateTime = bookmark.createdAt.toISOString()
  const date = bookmark.createdAt.toLocaleString(["en-GB"], {
    dateStyle: "full",
    timeStyle: "short",
  })

  return (
    <p>
      Level <span style={{ color }}>{level}</span>{" "}
      <span className={Styles.mastery}>{mastery.name}</span> mastery build,
      bookmarked on{" "}
      <time dateTime={dateTime} className={Styles.date}>
        {date}
      </time>
    </p>
  )
}

const resolveBookmark = (bookmark: Bookmark) => {
  const { type, level } = dehashData(bookmark.hash)
  const mastery = MASTERIES.find((mastery) => mastery.id === type)
  if (!mastery) return null
  return { ...bookmark, level, mastery }
}

export const Bookmarks = () => {
  const removeBookmarkDialogRef = useRef<HTMLDialogElement>(null)
  const { bookmarks } = useBookmarks()
  const resolvedBookmarks = bookmarks
    .map(resolveBookmark)
    .filter((bookmark) => bookmark !== null)

  return (
    <>
      <Title Component="h2" size={200}>
        Bookmarked builds
      </Title>
      <ul className={Styles.list}>
        {resolvedBookmarks.map(({ level, mastery, ...bookmark }) => (
          <li
            key={bookmark.hash}
            className={[Styles.item, boxStyles].join(" ")}
          >
            <BookmarkInfo bookmark={bookmark} level={level} mastery={mastery} />
            <div className={Styles.actions}>
              <Link
                to={`/${mastery?.slug}/${bookmark.hash}`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={buttonStyles}
              >
                Load
              </Link>
              <Button
                onPress={() => removeBookmarkDialogRef.current?.showModal()}
              >
                Remove
              </Button>
              <RemoveBookmarkDialog
                bookmark={bookmark}
                level={level}
                mastery={mastery}
                dialogRef={removeBookmarkDialogRef}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export const RemoveBookmarkDialog: FC<
  BookmarkProps & {
    dialogRef: DialogProps["dialogRef"]
  }
> = ({ dialogRef, bookmark, level, mastery }) => {
  const { removeBookmark } = useBookmarks()

  return (
    <Dialog
      dialogRef={dialogRef}
      title="Remove bookmark"
      actions={[
        <Button
          onPress={() => {
            dialogRef.current?.close()
            removeBookmark(bookmark.hash)
          }}
          autoFocus
          key="confirm"
        >
          Remove
        </Button>,
      ]}
    >
      <p>
        Are you sure you want to remove this bookmarked build? This action
        cannot be undone.
      </p>
      <BookmarkInfo bookmark={bookmark} level={level} mastery={mastery} />
    </Dialog>
  )
}
