import { useLocation } from "react-router-dom"
import {
  createContext,
  type Dispatch,
  type FC,
  type PropsWithChildren,
  type ReactNode,
  type SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import translations from "./translations.json"
import {
  type Locale,
  DEFAULT_LOCALE,
  ALLOWED_LOCALES,
  type LocalizationItem,
  TRANSLATIONS_PATTERNS,
} from "./config"
import { formatUnity } from "../../helpers/formatUnity"

export const LocalizationContext = createContext<{
  locale: Locale
  setLocale: Dispatch<SetStateAction<Locale>>
  t: (key: string) => string
  tf: typeof formatUnity
}>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  t: () => "",
  tf: () => [],
})

const dictionary = (translations as LocalizationItem[]).reduce<
  Record<string, LocalizationItem["translations"]>
>((acc, item) => {
  acc[item.key] = item.translations
  return acc
}, {})

export const LocalizationProvider: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation()
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE)

  const checkKey = useCallback((key: string) => {
    if (!TRANSLATIONS_PATTERNS.some((pattern) => pattern.test(key))) {
      console.warn(
        `Attempted to translate key “${key}” but no translation pattern matches it, which means it is not included in the translations file. Define it in the translation patterns and rebuild the site to be able to use it.`
      )
    }
  }, [])

  const t = useCallback(
    (key: string) => {
      checkKey(key)
      return dictionary[key]?.[locale] ?? ""
    },
    [locale, checkKey]
  )
  const tf = useCallback(
    (key: string, ...args: ReactNode[]) => {
      checkKey(key)
      return formatUnity(t(key), ...args.slice(1))
    },
    [t, checkKey]
  )

  const context = useMemo(() => ({ locale, setLocale, t, tf }), [locale, t, tf])

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const paramLocale = params.get("locale") as Locale | null

    if (paramLocale) {
      if (ALLOWED_LOCALES.includes(paramLocale)) {
        setLocale(paramLocale)
      } else {
        setLocale("en")
        params.delete("locale")
        const newSearch = params.toString()
        const newPath = `${location.pathname}${newSearch ? `?${newSearch}` : ""}`
        window.history.replaceState(null, "", newPath)
      }
    } else {
      setLocale("en")
    }
  }, [location.search, location.pathname])

  return (
    <LocalizationContext.Provider value={context}>
      {children}
    </LocalizationContext.Provider>
  )
}

export const useLocalization = () => useContext(LocalizationContext)
