import type { Build, Mastery } from "../types"

export const mapSchema = (schema: Mastery["schema"]): Build =>
  schema.map((skill) => ({
    ...skill,
    current: 0,
  }))
