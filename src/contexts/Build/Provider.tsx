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

import { MASTERIES } from "../../schema/data"
import { mapSchema } from "../../helpers/mapSchema"
import { dehashData, hashData } from "../../helpers/hash"
import type { Build, MasteryType } from "../../types"

export const DEFAULT_TYPE = MASTERIES[0].id
export const DEFAULT_BUILD = mapSchema(MASTERIES[0].schema)

const noop = () => undefined

export const BuildContext = createContext<{
  level: number
  build: Build
  masteryType: MasteryType
  resetBuild: VoidFunction
  setBuild: (build: Build) => void
  setMasteryType: (type: MasteryType) => void
}>({
  level: 0,
  build: DEFAULT_BUILD,
  masteryType: DEFAULT_TYPE,
  resetBuild: noop,
  setBuild: noop,
  setMasteryType: noop,
})

export const BuildProvider: FC<PropsWithChildren> = ({ children }) => {
  const [build, setBuild] = useState<Build>(DEFAULT_BUILD)
  const [masteryType, setMasteryType] = useState<MasteryType>(DEFAULT_TYPE)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const hash = params.get("b")

    if (hash) {
      const { type, build } = dehashData(hash)
      setMasteryType(type)
      setBuild(build)
    }
  }, [])

  const save = useCallback((type: MasteryType, build: Build) => {
    const params = new URLSearchParams()
    params.set("b", hashData(type, build))

    const { protocol, pathname, host } = window.location
    const nextUrl = `${protocol}//${host}${pathname}?${params.toString()}`

    window.history.pushState({}, "", nextUrl)
  }, [])

  const updateType = useCallback(
    (masteryType: MasteryType) => {
      const { schema } = getMastery(masteryType)
      const build = mapSchema(schema)
      setBuild(build)
      setMasteryType(masteryType)
      save(masteryType, build)
    },
    [save]
  )

  const updateBuild = useCallback(
    (build: Build) => {
      setBuild(build)
      save(masteryType, build)
    },
    [save, masteryType]
  )

  const resetBuild = useCallback(() => {
    const { schema } = getMastery(masteryType)
    const build = mapSchema(schema)
    updateBuild(build)
  }, [updateBuild, masteryType])

  const level = useMemo(
    () => build.reduce((acc, key) => acc + key.current, 0),
    [build]
  )

  const context = useMemo(
    () => ({
      level,
      build,
      resetBuild,
      setBuild: updateBuild,
      masteryType,
      setMasteryType: updateType,
    }),
    [level, build, resetBuild, updateBuild, updateType, masteryType]
  )

  return (
    <BuildContext.Provider value={context}>{children}</BuildContext.Provider>
  )
}

function getMastery(type: MasteryType) {
  const mastery = MASTERIES.find((mastery) => mastery.id === type)
  if (!mastery) throw new Error(`Could not find mastery for type ${type}`)
  return mastery
}

export const useBuild = () => useContext(BuildContext)
