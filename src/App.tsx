import { useEffect, useState, MouseEvent } from 'react'
import type { Habit } from './types'
import HabitList from './components/HabitsList'

interface Date {
  days: number
  month: string
  year: number
}

interface Month {
  days: number
  id: number
  name: string
}

function App() {
  const [habitKey, setHabitKey] = useState(0)
  const [date, setDate] = useState<Date | null>(null)
  const [newHabit, setNewHabit] = useState<string | null>(null)
  const [habits, setHabits] = useState<Habit[]>([])

  const getTime = () => {
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
    const month = months.find(
      (month) => month.id === new Date().getMonth()
    ) as Month
    const year = new Date().getFullYear()
    setDate({ month: month.name, days: month.days, year })
  }

  const handleAddHabit = (event: MouseEvent<HTMLButtonElement>) => {
    if (!newHabit) return
    const habit = { id: habitKey, text: newHabit }
    setHabits([...habits, habit])
    setHabitKey(habitKey + 1)
    event.preventDefault()
  }

  useEffect(() => {
    getTime()
  }, [])

  return (
    <main>
      <h1>Duck habits</h1>
      <p>
        {date === null && 'Loading'}
        {date !== null &&
          `Year: ${date.year}, Month: ${date.month}, Days: ${date.days}`}
      </p>
      <form className="space-x-2">
        <label htmlFor="new-habit">New habit:</label>
        <input
          id="new-habit"
          onChange={(e) => setNewHabit(e.target.value)}
          className="border-1 border-black"
        />
        <button onClick={handleAddHabit}>Add habit</button>
      </form>
      <HabitList habits={habits} days={date?.days} />
    </main>
  )
}

export default App
