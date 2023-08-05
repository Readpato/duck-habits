import { useState, MouseEvent } from 'react'
import type { Habit } from './types'
import SideBar from './components/SideBar'
import HabitList from './components/HabitsList'
import { useDate } from './utils/useDate'

function App() {
  const [habitKey, setHabitKey] = useState(0)
  const [newHabit, setNewHabit] = useState<string | null>(null)
  const [habits, setHabits] = useState<Habit[]>([])
  const { totalMonths, currentMonth, totalYears, currentYear } = useDate()

  const handleAddHabit = (event: MouseEvent<HTMLButtonElement>) => {
    if (!newHabit) return
    const habit = { id: habitKey, text: newHabit }
    setHabits([...habits, habit])
    setHabitKey(habitKey + 1)
    event.preventDefault()
  }

  return (
    <div>
      <SideBar years={totalYears} months={totalMonths} />
      <main>
        <h1>We are in the year: {currentYear}</h1>
        <form className="space-x-2">
          <label htmlFor="new-habit">New habit:</label>
          <input
            id="new-habit"
            onChange={(e) => setNewHabit(e.target.value)}
            className="border-1 border-black"
          />
          <button onClick={handleAddHabit}>Add habit</button>
        </form>
        <HabitList habits={habits} days={currentMonth.days} />
      </main>
    </div>
  )
}

export default App
