import { Month } from '../types'

interface DateValues {
  currentMonth: Month
  currentYear: number
  totalMonths: Month[]
  totalYears: number[]
}

const months: Month[] = [
  { id: 0, name: 'January', days: 31 },
  { id: 1, name: 'February', days: 28 },
  { id: 2, name: 'March', days: 31 },
  { id: 3, name: 'April', days: 30 },
  { id: 4, name: 'May', days: 31 },
  { id: 5, name: 'June', days: 30 },
  { id: 6, name: 'July', days: 31 },
  { id: 7, name: 'August', days: 31 },
  { id: 8, name: 'September', days: 30 },
  { id: 9, name: 'October', days: 31 },
  { id: 10, name: 'November', days: 30 },
  { id: 11, name: 'December', days: 31 },
]

export function useDate(): DateValues {
  const getTotalYears = () => {
    const initialYear = 2023
    const yearsPassed = new Date().getFullYear() - initialYear
    const yearsArray = [initialYear]
    for (let i = 1; i <= yearsPassed; i++) {
      yearsArray.push(initialYear + 1)
    }
    return yearsArray
  }
  const currentYear = new Date().getFullYear()
  const totalYears = getTotalYears()
  const currentMonth = months.find(
    (month) => month.id === new Date().getMonth()
  ) as Month

  return { currentYear, totalYears, currentMonth, totalMonths: months }
}
