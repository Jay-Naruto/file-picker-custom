import { create } from 'zustand'

type FilePickerStore = {
  searchQuery: string
  sortBy: 'name' | 'date'
  history: string[]
  historyIndex: number
  setSearchQuery: (q: string) => void
  setSortBy: (s: 'name' | 'date') => void
  goBack: () => void
  goForward: () => void
  navigateTo: (id: string) => void
}

export const useFilePickerStore = create<FilePickerStore>((set, get) => ({
  searchQuery: '',
  sortBy: 'name',
  history: ['root'],
  historyIndex: 0,

  setSearchQuery: (q) => set({ searchQuery: q }),
  setSortBy: (s) => set({ sortBy: s }),

  goBack: () => {
    const { historyIndex } = get()
    if (historyIndex > 0) {
      set({ historyIndex: historyIndex - 1 })
    }
  },

  goForward: () => {
    const { historyIndex, history } = get()
    if (historyIndex < history.length - 1) {
      set({ historyIndex: historyIndex + 1 })
    }
  },

  navigateTo: (id) => {
    const { history, historyIndex } = get()
    const newHistory = history.slice(0, historyIndex + 1)
    newHistory.push(id)
    set({ history: newHistory, historyIndex: newHistory.length - 1 })
  },
}))
