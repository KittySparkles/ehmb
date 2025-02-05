import { useEffect, useRef } from 'react'

function useInterval(callback: CallableFunction, delay: number | null) {
  const savedCallback = useRef<CallableFunction | null>(null)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current?.()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export default useInterval
