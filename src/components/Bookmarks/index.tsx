import { useRef, type FC } from "react"
import { Link } from "react-router-dom"

import {
  type Bookmark,
  BookmarksProvider,
  useBookmarks,
} from "../../contexts/Bookmarks/Provider"
import { dehashData } from "../../helpers/hash"
import { MASTERIES } from "../../schema/data"
import { Title } from "../Title"
import { Button, buttonStyles } from "../Button"
import { Dialog, type DialogProps } from "../Dialog"
import { Header } from "../Header"
import { Container } from "../Container"
import { Footer } from "../Footer"
import { Box } from "../Box"
import type { Mastery, MasteryType } from "../../types"

import Styles from "./styles.module.css"

type BookmarkProps = {
  bookmark: Bookmark
  level: number
  mastery: Mastery
}

const formatDate = (date: Date) =>
  date.toLocaleString(["en-GB"], {
    dateStyle: "long",
    timeStyle: "short",
  })

const BookmarkInfo: FC<BookmarkProps> = ({ bookmark, level, mastery }) => {
  const color = `rgb(${360 - level * 6}, ${level * 6}, 0)`
  const createdDateTime = bookmark.createdAt.toISOString()
  const updatedDateTime = bookmark.updatedAt
    ? bookmark.createdAt.toISOString()
    : undefined
  const createdDate = formatDate(bookmark.createdAt)
  const updatedDate = bookmark.updatedAt ? formatDate(bookmark.updatedAt) : null

  return (
    <p className={Styles.info}>
      Level <span style={{ color }}>{level}</span>{" "}
      <span className={Styles.mastery}>{mastery.name}</span> mastery build,
      bookmarked on{" "}
      <time dateTime={createdDateTime} className={Styles.date}>
        {createdDate}
      </time>
      {updatedDate ? (
        <>
          , last updated on{" "}
          <time dateTime={updatedDateTime} className={Styles.date}>
            {updatedDate}
          </time>
        </>
      ) : null}
    </p>
  )
}

const BookmarkActions: FC<BookmarkProps> = ({ bookmark, level, mastery }) => (
  <div className={Styles.actions}>
    <Link to={`/${mastery.slug}/${bookmark.hash}`} className={buttonStyles}>
      Load
    </Link>
    <RemoveBookmarkButton bookmark={bookmark} level={level} mastery={mastery} />
  </div>
)

const resolveBookmark = (bookmark: Bookmark) => {
  const { type, level } = dehashData(bookmark.hash)
  const mastery = MASTERIES.find((mastery) => mastery.id === type)
  if (!mastery) return null
  return { ...bookmark, level, mastery }
}

const EXAMPLE_HASH = "th55055300200505050054550110" as `${MasteryType}string`

export const Bookmarks = () => {
  const { bookmarks } = useBookmarks()
  const resolvedBookmarks = bookmarks
    .map(resolveBookmark)
    .filter((bookmark) => bookmark !== null)

  if (bookmarks.length === 0) {
    const bookmark = {
      hash: EXAMPLE_HASH,
      id: "example-build",
      createdAt: new Date(),
    }
    // biome-ignore lint/style/noNonNullAssertion: safe
    const mastery = MASTERIES.find((mastery) => mastery.id === "th")!

    return (
      <>
        <Title Component="h2" size={200}>
          Bookmarked builds
        </Title>

        <p>
          You currently do not have any bookmarked builds. You can bookmark any
          build you compose from the ☰ on the top right of the skill grid, and
          they will appear here. From there, you can then pick up where you left
          of by loading them.
        </p>

        <p>Here is an example bookmark as an example:</p>

        <div className={Styles.list}>
          <Box className={Styles.item}>
            <BookmarkInfo bookmark={bookmark} mastery={mastery} level={61} />
            <BookmarkActions bookmark={bookmark} mastery={mastery} level={61} />
          </Box>
        </div>
      </>
    )
  }

  return (
    <>
      <Title Component="h2" size={200}>
        Bookmarked builds
      </Title>
      <ul className={Styles.list}>
        {resolvedBookmarks.map(({ level, mastery, ...bookmark }) => (
          <li key={bookmark.id} className={Styles.item}>
            <Box>
              <BookmarkInfo
                bookmark={bookmark}
                level={level}
                mastery={mastery}
              />
              <BookmarkActions
                bookmark={bookmark}
                level={level}
                mastery={mastery}
              />
            </Box>
          </li>
        ))}
      </ul>
    </>
  )
}

const RemoveBookmarkButton: FC<BookmarkProps> = ({
  bookmark,
  level,
  mastery,
}) => {
  const removeBookmarkDialogRef = useRef<HTMLDialogElement>(null)

  return (
    <>
      <Button onPress={() => removeBookmarkDialogRef.current?.showModal()}>
        Remove
      </Button>
      <RemoveBookmarkDialog
        bookmark={bookmark}
        level={level}
        mastery={mastery}
        dialogRef={removeBookmarkDialogRef}
      />
    </>
  )
}

const RemoveBookmarkDialog: FC<
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
            removeBookmark(bookmark.id)
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

export const BookmarksPage = () => (
  <BookmarksProvider>
    <Header />
    <Container>
      <Bookmarks />
    </Container>
    <Footer />
  </BookmarksProvider>
)
