import { createContext } from 'react'
import { LibraryProps, Overrides, TranslationsNonNull } from './types'

export type ContextProps = LibraryProps & {
  translations: TranslationsNonNull
  overrides: Overrides
}

const LibraryContext = createContext<ContextProps>({
  // iOS only
  LottieView: undefined,
  // iOS only
  horizontalStart: true,
  overrides: {},
  inputColors: {},
  // @ts-ignore
  translations: {},
})

export default LibraryContext
