import { useLocation } from "react-router-dom"
import {
  createContext,
  type Dispatch,
  type FC,
  type PropsWithChildren,
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
} from "./config"

export const LocalizationContext = createContext<{
  locale: Locale
  setLocale: Dispatch<SetStateAction<Locale>>
  t: (key: string) => string | undefined
}>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  t: () => undefined,
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
  const t = useCallback(
    (key: string) => dictionary[key]?.[locale] ?? undefined,
    [locale]
  )
  const context = useMemo(() => ({ locale, setLocale, t }), [locale, t])

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
