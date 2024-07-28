import { useMousePosition } from "../Hooks/useMousePosition"
import { useEffect, useState, type RefObject } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useCursorStore } from "../store/cursorStore"

export const useCursor = (ref: RefObject<HTMLDivElement>) => {

  const mousePos = useMousePosition()

  const cursor = ref

  type DefaultCursorSize = 24
  type HoverCursorSize = 120

  const DEFAULT_CURSOR_SIZE: DefaultCursorSize = 24
  const HOVER_CURSOR_SIZE: HoverCursorSize = 120

  type CursorSize = DefaultCursorSize | HoverCursorSize
  const [size, setSize] = useState<CursorSize>(DEFAULT_CURSOR_SIZE)

  useGSAP(() => {
    const { x, y } = mousePos

    gsap.to(cursor.current, {
      width: size,
      height: size,
      x: x - size / 2,
      y: y - size / 2
    })

  }, [mousePos, size])

  const onMouseHover = () => {
    setSize(HOVER_CURSOR_SIZE)
  }

  const onMouseDefault = () => {
    setSize(DEFAULT_CURSOR_SIZE)
  }

  const state = useCursorStore(state => state)

  useEffect(() => {
    state.addMouseDefault(onMouseDefault)
    state.addMouseHover(onMouseHover)
  }, [])

  return {
    onMouseDefault,
    onMouseHover
  }
}
