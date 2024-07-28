import { useCursor } from "../Hooks/useCursor"
import { useRef } from "react"
import { LinkIcon } from "./LinkIcon"
import { DownloadIcon } from "./DownloadIcon"

export function Cursor() {
  const cursor = useRef<HTMLDivElement>(null)

  const { type } = useCursor(cursor)

  return (
    <div
      ref={cursor}
      className="z-50 fixed pointer-events-none grid place-content-center w-4 h-4 top-0 left-0 rounded-full bg-black dark:bg-white"
    >
      <LinkIcon
        className={`${type === 'link' ? 'scale-1' : 'scale-0 sr-only'} transition-all stroke-white dark:stroke-black`}
      />
      <DownloadIcon
        className={`${type === 'download' ? 'scale-1' : 'scale-0 sr-only'} transition-all fill-white dark:fill-black`}
      />
    </div >
  )
}
