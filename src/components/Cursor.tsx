import { create } from "zustand"
import { useCursor } from "../Hooks/useCursor"
import { useRef, useState } from "react"
import { useCursorStore } from "../store/cursorStore"

export function Cursor() {
  const cursor = useRef<HTMLDivElement>(null)

  const { onMouseHover, onMouseDefault } = useCursor(cursor)

  return (
    <div>
      <div
        ref={cursor}
        className="fixed pointer-events-none w-6 h-6 top-0 left-0 rounded-full bg-black dark:bg-white"
      >
      </div >
    </div>
  )
}
