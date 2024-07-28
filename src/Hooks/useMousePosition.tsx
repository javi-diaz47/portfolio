import { useEffect, useState } from "react"

export function useMousePosition() {

  interface MousePosition {
    x: number,
    y: number
  }

  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 })

  const mouseMove = (ev: MouseEvent) => {
    setMousePos({
      x: ev.clientX,
      y: ev.clientY
    })
  }

  useEffect(() => {

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  return mousePos


}
