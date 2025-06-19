import type { ReactNode } from "react"
import React from "react"

const isString = (value: unknown) => typeof value === "string"

const escapeRegExp = (string: string) => {
  const reRegExpChar = /[\\^$.*+?()[\]{}|]/g
  const reHasRegExpChar = new RegExp(reRegExpChar.source)

  return string && reHasRegExpChar.test(string)
    ? string.replace(reRegExpChar, "\\$&")
    : string
}

const flatten = <T>(array: T[]) => {
  let newArray: T[] = []

  array.forEach((item) => {
    if (Array.isArray(item)) {
      newArray = newArray.concat(item)
    } else {
      newArray.push(item)
    }
  })

  return newArray
}

// Given a string, replace every substring that is matched by the `match` regex
// with the result of calling `fn` on matched substring. The result will be an
// array with all odd indexed elements containing the replacements. The primary
// use case is similar to using String.prototype.replace except for React.
//
// React will happily render an array as children of a react element, which
// makes this approach very useful for tasks like surrounding certain text
// within a string with react elements.
//
// Example:
// matchReplace(
//   'Emphasize all phone numbers like 884-555-4443.',
//   /([\d|-]+)/g,
//   (number, i) => <strong key={i}>{number}</strong>
// );
// // => ['Emphasize all phone numbers like ', <strong>884-555-4443</strong>, '.'
//
// @param {string} str
// @param {regexp|str} match Must contain a matching group
// @param {function} fn
// @return {array}
export function replaceString(
  str: string,
  match: RegExp,
  fn: (match: string, index: number, _: number) => ReactNode
) {
  let curCharStart = 0
  let curCharLen = 0

  if (str === "") {
    return str
  }

  if (!str || !isString(str)) {
    throw new TypeError(
      "First argument to react-string-replace#replaceString must be a string"
    )
  }

  let re = match

  if (!(re instanceof RegExp)) {
    re = new RegExp(`(${escapeRegExp(re)})`, "gi")
  }

  const result: string[] = str.split(re)

  // Apply fn to all odd elements
  for (let i = 1, length = result.length; i < length; i += 2) {
    curCharLen = result[i].length
    curCharStart += result[i - 1].length
    result[i] = fn(result[i], i, curCharStart) as string
    curCharStart += curCharLen
  }

  return result
}

export function replaceInString(
  source: ReactNode[],
  match: RegExp,
  fn: (match: string, index: number, _: number) => ReactNode
): ReactNode[] {
  return flatten(
    source.map((x) => {
      if (isString(x)) {
        return replaceString(x, match, fn)
      }

      if (React.isValidElement(x) && x.props?.children) {
        const newChildren = replaceInString(
          Array.isArray(x.props.children)
            ? x.props.children
            : [x.props.children],
          match,
          fn
        )
        return React.cloneElement(x, { ...x.props, children: newChildren })
      }
      return x
    })
  )
}
