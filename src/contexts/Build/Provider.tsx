import {
  createContext,
  type FC,
  type PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
} from "react"
import { useLoaderData, useNavigate, useParams } from "react-router-dom"

import { MASTERIES } from "../../schema/data"
import { mapSchema } from "../../helpers/mapSchema"
import { hashData } from "../../helpers/hash"
import { useMastery } from "../Mastery/Provider"
import type { Build } from "../../types"

const defaultBuild = mapSchema(MASTERIES[0].schema)

export const BuildContext = createContext<{
  level: number
  build: Build
  hash: string
  resetBuild: VoidFunction
  setBuild: (build: Build) => void
}>({
  level: 0,
  build: defaultBuild,
  hash: hashData(MASTERIES[0].id, defaultBuild),
  resetBuild: () => undefined,
  setBuild: () => undefined,
})

export const BuildProvider: FC<PropsWithChildren> = ({ children }) => {
  const mastery = useMastery()
  const navigate = useNavigate()
  const { build } = useLoaderData() as { build: Build }
  const hash = useParams().hash ?? hashData(mastery.id, build)

  const updateBuild = useCallback(
    (build: Build) =>
      navigate(`/${mastery.slug}/${hashData(mastery.id, build)}`),
    [navigate, mastery]
  )

  const resetBuild = useCallback(
    () => navigate(`/${mastery.slug}`),
    [navigate, mastery.slug]
  )

  const level = useMemo(
    () => build.reduce((acc, key) => acc + key.current, 0),
    [build]
  )

  const context = useMemo(
    () => ({
      level,
      build,
      hash,
      resetBuild,
      setBuild: updateBuild,
    }),
    [level, build, hash, resetBuild, updateBuild]
  )

  return (
    <BuildContext.Provider value={context}>{children}</BuildContext.Provider>
  )
}

export const useBuild = () => useContext(BuildContext)
