import type { FC, PropsWithChildren } from "react"

import { Box } from "../Box"

import Styles from "./styles.module.css"

export const Info: FC<PropsWithChildren> = ({ children }) => {
  return <Box className={Styles.info}>{children}</Box>
}
