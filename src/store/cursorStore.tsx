import { create } from "zustand";

interface CursorStore {
  onMouseDefault: () => void
  onMouseHover: () => void
  addMouseDefault: (onMouseDefault: () => void) => void
  addMouseHover: (onMouseHover: () => void) => void
}

export const useCursorStore = create<CursorStore>((set) => ({
  onMouseDefault: () => { },
  onMouseHover: () => { },
  addMouseDefault: (onMouseDefault: () => void) => set((state) => ({ onMouseDefault })),
  addMouseHover: (onMouseHover: () => void) => set((state) => ({ onMouseHover }))
}))


