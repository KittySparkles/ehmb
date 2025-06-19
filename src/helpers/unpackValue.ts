const REGEX = [
  null,
  null,
  /([^*\s/]*)\/([^*\s]*|$)/g,
  /([^*\s/]*)\/([^/]*)\/([^*\s]*|$)/g,
  /([^*\s/]*)\/([^/]*)\/([^/]*)\/([^*\s]*|$)/g,
  /([^*\s/]*)\/([^/]*)\/([^/]*)\/([^/]*)\/([^*\s]*|$)/g,
]

const splitValue = (string = "") => String(string).split("/")

// Considering a string containing separated values with slashes, unpack it to
// return only the value present at the index issued as a `current`. For
// instance, “Increase X by 1/2/3” would return “Increase X by 2” is `current`
// is `1` (0-indexed).
export const unpackValue = (value: string, max: number, current: number) => {
  const re = REGEX[max]
  if (!re) return value

  const variables = value.match(re) || []

  const values = Array.from({ length: max }, (_, index) =>
    variables.reduce(
      (result, variable) =>
        result.replace(variable, splitValue(variable)[index]),
      value
    )
  )

  return values[current - 1]
}
