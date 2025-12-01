
import create from 'zustand'

export const useStore = create((set) => ({
  theme: 'dark',
  toggleTheme: () => set(state => ({ theme: state.theme === 'dark' ? 'light' : 'dark' }))
}))
