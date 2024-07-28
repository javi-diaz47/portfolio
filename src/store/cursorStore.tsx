import { create } from "zustand";

type CursorType = 'default' | 'link' | 'download'

interface CursorStore {
  onMouseDefault: () => void
  onMouseHover: (type: CursorType) => void
  onMouseHoverLink: () => void
  onMouseHoverDownload: () => void
  addMouseDefault: (onMouseDefault: () => void) => void
  addMouseHover: (onMouseHover: (type: CursorType) => void) => void
  addMouseHoverLink: (onMouseHoverLink: () => void) => void
  addMouseHoverDownload: (onMouseHoverDownload: () => void) => void
}

export const useCursorStore = create<CursorStore>((set) => ({
  onMouseDefault: () => { },
  onMouseHover: () => { },
  onMouseHoverLink: () => { },
  onMouseHoverDownload: () => { },
  addMouseDefault: (onMouseDefault: () => void) => set((state) => ({ onMouseDefault })),
  addMouseHover: (onMouseHover: (type: CursorType) => void) => set((state) => ({ onMouseHover })),
  addMouseHoverLink: (onMouseHoverLink: () => void) => set((state) => ({ onMouseHoverLink })),
  addMouseHoverDownload: (onMouseHoverDownload: () => void) => set((state) => ({ onMouseHoverDownload }))
}))


