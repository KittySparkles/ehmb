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
import { type Locale, DEFAULT_LOCALE, SUPPORTED_LOCALES } from "./config"
import { formatUnity, translate } from "../../helpers/i18n"

export type TranslateFunction = (key: string) => string

export const LocalizationContext = createContext<{
  locale: Locale
  setLocale: Dispatch<SetStateAction<Locale>>
  t: TranslateFunction
  tf: (key: string, ...args: ReactNode[]) => ReactNode[]
}>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  t: () => "",
  tf: () => [],
})

export const LocalizationProvider: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation()
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE)

  const t = useCallback((key: string) => translate(key, locale), [locale])
  const tf = useCallback(
    (key: string, ...args: ReactNode[]) =>
      formatUnity(translate(key, locale), locale, ...args),
    [locale]
  )

  const context = useMemo(() => ({ locale, setLocale, t, tf }), [locale, t, tf])

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const paramLocale = params.get("locale") as Locale | null

    if (paramLocale) {
      if (SUPPORTED_LOCALES.map(({ locale }) => locale).includes(paramLocale)) {
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
