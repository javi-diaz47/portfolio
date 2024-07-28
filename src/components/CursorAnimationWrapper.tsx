import { useCursorStore } from "../store/cursorStore"

interface Props {
  type: 'link' | 'download'
  children: React.ReactNode
}

export function CursorAnimaionWrapper({ type, children }: Props) {

  const state = useCursorStore()

  return (
    <div
      onMouseOver={type === 'link' ? state.onMouseHoverLink : state.onMouseHoverDownload}
      onMouseLeave={state.onMouseDefault}
      className="bg-accent"
    >
      {children}
    </ div>

  )
}
