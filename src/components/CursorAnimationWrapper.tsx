import { useCursorStore } from "../store/cursorStore"

interface Props {
  cursor: 'link' | 'download' | 'message'
  children: React.ReactNode
}

export function CursorAnimationWrapper({ cursor, children }: Props) {

  const state = useCursorStore()

  const onMouseHover = () => {
    if (cursor === 'link') {
      return state.onMouseHoverLink()
    }
    if (cursor === 'download') {
      return state.onMouseHoverDownload()
    }
    if (cursor === 'message') {
      return state.onMouseHoverMessage()
    }
  }

  return (
    <div
      onMouseOver={onMouseHover}
      onMouseLeave={state.onMouseDefault}
    >
      {children}
    </ div>

  )
}
