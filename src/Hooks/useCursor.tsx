import { useMousePosition } from "../Hooks/useMousePosition"
import { useEffect, useState, type RefObject } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useCursorStore } from "../store/cursorStore"

export const useCursor = (ref: RefObject<HTMLDivElement>) => {

  const mousePos = useMousePosition()

  const cursor = ref

  type CursorSize = 16 | 64
  const [size, setSize] = useState<CursorSize>(16)


  type CursorType = 'default' | 'link' | 'download' | 'message'
  const [type, setType] = useState<CursorType>('default')

  useGSAP(() => {
    const { x, y } = mousePos

    gsap.to(cursor.current, {
      width: size,
      height: size,
      x: x - size / 2,
      y: y - size / 2,
      ease: 'power2'
    })

  }, [mousePos, size])

  const onMouseHover = (type: CursorType) => {
    setType(type)
    setSize(64)
  }

  const onMouseHoverLink = () => onMouseHover('link')

  const onMouseHoverDownload = () => onMouseHover('download')

  const onMouseHoverMessage = () => onMouseHover('message')

  const onMouseDefault = () => {
    setType('default')
    setSize(16)
  }

  const state = useCursorStore(state => state)

  useEffect(() => {
    state.addMouseDefault(onMouseDefault)
    state.addMouseHover(onMouseHover)
    state.addMouseHoverLink(onMouseHoverLink)
    state.addMouseHoverDownload(onMouseHoverDownload)
    state.addMouseHoverMessage(onMouseHoverMessage)
  }, [])

  return {
    type,
    isHover: size === 16 ? false : true,
    onMouseDefault,
    onMouseHover,
    onMouseHoverLink,
    onMouseHoverDownload
  }
}
