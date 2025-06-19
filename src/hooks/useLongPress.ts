import { useCallback, useMemo, useRef, useState } from "react"
import type { PressEvent } from "react-aria-components"

type UseLongPressOptions = {
  shouldPreventDefault?: boolean
  delay?: number
}

const useLongPress = ({
  onLongPress,
  onShortPress,
  options,
}: {
  onLongPress: (e: PressEvent) => void
  onShortPress: () => void
  options?: UseLongPressOptions
}) => {
  const delay = options?.delay ?? 300

  const [longPressTriggered, setLongPressTriggered] = useState(false)
  const timeout = useRef<ReturnType<typeof setTimeout>>()

  const onPressStart = useCallback(
    (event: PressEvent) => {
      timeout.current = setTimeout(() => {
        onLongPress(event)
        setLongPressTriggered(true)
      }, delay)
    },
    [onLongPress, delay]
  )

  const onPressEnd = useCallback(
    (_: PressEvent, shouldTriggerClick = true) => {
      timeout.current && clearTimeout(timeout.current)
      if (shouldTriggerClick && !longPressTriggered) onShortPress()
      setLongPressTriggered(false)
    },
    [onShortPress, longPressTriggered]
  )

  const events = useMemo(
    () => ({ onPressStart, onPressEnd }),
    [onPressStart, onPressEnd]
  )

  return events
}

export default useLongPress
