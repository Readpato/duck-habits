export interface Habit {
  id: number
  text: string
}

// Date related
export interface Month {
  days: number
  id: number
  name: string
}

export interface Date {
  days: number
  month: string
  year: number
}
