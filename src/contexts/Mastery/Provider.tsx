import {
  createContext,
  type FC,
  type PropsWithChildren,
  useContext,
  useMemo,
} from "react"

import type { Mastery, MasteryType } from "../../types"
import { MASTERIES } from "../../schema/data"

export const MasteryContext = createContext<Mastery>(MASTERIES[0])

export const MasteryProvider: FC<
  PropsWithChildren<{ masteryType: MasteryType }>
> = ({ children, masteryType }) => {
  const mastery = useMemo(
    () => MASTERIES.find((mastery) => mastery.id === masteryType),
    [masteryType]
  )

  if (!mastery) {
    throw new Error("Could not retrieve mastery for given type.")
  }

  return (
    <MasteryContext.Provider value={mastery}>
      {children}
    </MasteryContext.Provider>
  )
}

export const useMastery = () => useContext(MasteryContext)
