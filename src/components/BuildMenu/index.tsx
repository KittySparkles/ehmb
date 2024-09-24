import { useRef, type FC } from "react"
import copy from "copy-to-clipboard"
import {
  Button as RButton,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
} from "react-aria-components"

import { useBuild } from "../../contexts/Build/Provider"
import { useBookmarks } from "../../contexts/Bookmarks/Provider"

import { Dialog, type DialogProps } from "../Dialog"
import { Button } from "../Button"
import { ShiftBy } from "../ShiftBy"
import { boxStyles } from "../Box"

import Styles from "./styles.module.css"

export const BuildMenu = () => {
  const resetDialogRef = useRef<HTMLDialogElement>(null)
  const { level, hash } = useBuild()
  const { findBookmarkByHash, addBookmark, updateBookmark, removeBookmark } =
    useBookmarks()
  const bookmark = findBookmarkByHash(hash)
  const id = useRef<string | null>(null)

  if (!id.current && bookmark) {
    id.current = bookmark.id
  }

  return (
    <>
      <MenuTrigger>
        <RButton aria-label="Menu" className={Styles.button}>
          <ShiftBy Component="span" y={-2}>
            ☰
          </ShiftBy>
        </RButton>
        <Popover className={Styles.popover} placement="bottom end">
          <Menu className={[Styles.menu, boxStyles].join(" ")}>
            <MenuItem
              className={Styles.item}
              onAction={() => copy(window.location.href)}
            >
              Copy to clipboard
            </MenuItem>
            {id.current ? (
              <>
                <MenuItem
                  className={Styles.item}
                  onAction={() => updateBookmark(id.current as string, hash)}
                  isDisabled={level === 0}
                >
                  Update bookmark
                </MenuItem>
                <MenuItem
                  className={Styles.item}
                  onAction={() => removeBookmark(id.current as string)}
                >
                  Remove bookmark
                </MenuItem>
              </>
            ) : (
              <MenuItem
                className={Styles.item}
                onAction={() => addBookmark(hash)}
                isDisabled={level === 0}
              >
                Add bookmark
              </MenuItem>
            )}
            <MenuItem
              className={Styles.item}
              onAction={() => resetDialogRef.current?.showModal()}
              isDisabled={level === 0}
            >
              Reset
            </MenuItem>
          </Menu>
        </Popover>
      </MenuTrigger>

      <ResetDialog dialogRef={resetDialogRef} />
    </>
  )
}

export const ResetDialog: FC<{ dialogRef: DialogProps["dialogRef"] }> = ({
  dialogRef,
}) => {
  const { resetBuild } = useBuild()

  return (
    <Dialog
      dialogRef={dialogRef}
      title="Reset build"
      actions={[
        <Button
          onPress={() => {
            dialogRef.current?.close()
            resetBuild()
          }}
          autoFocus
          key="confirm"
        >
          Reset
        </Button>,
      ]}
    >
      <p>
        Are you sure you want to reset your build? You can still find it back in
        your browser history if you really need it.
      </p>
    </Dialog>
  )
}
