import { useCursorStore } from "../store/cursorStore"

export function Text() {

  const state = useCursorStore()

  console.log(state)
  return (
    <p
      onMouseOver={state.onMouseHover}
      onMouseLeave={state.onMouseDefault}
      className="text-4xl text-black dark:text-white">
      おやすみ
    </p>

  )
}
