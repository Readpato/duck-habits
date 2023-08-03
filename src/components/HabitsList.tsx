import { useState } from 'react'
import type { Habit as HabitType } from '../types'

interface HabitsListProps {
  habits: HabitType[]
  days?: number
}

interface HabitProp {
  text: string
  days: number
}

interface ButtonProp {
  day: number
}

export default function HabitList({ habits, days }: HabitsListProps) {
  return (
    <section>
      <ul>
        {habits.length > 0 ? (
          habits.map((habit) => (
            <Habit key={habit.id} text={habit.text} days={days as number} />
          ))
        ) : (
          <li>No habit added yet!</li>
        )}
      </ul>
    </section>
  )
}

function Habit({ text, days }: HabitProp) {
  return (
    <li>
      <p>{text}</p>
      {Array.from(Array(days).keys(), (index) => (
        <HabitButton key={index} day={index + 1} />
      ))}
    </li>
  )
}

function HabitButton({ day }: ButtonProp) {
  const [clicked, setClicked] = useState(false)

  return (
    <button
      className={`mr-2 ${clicked ? 'text-green-500' : 'text-black'}`}
      onClick={() => (clicked ? setClicked(false) : setClicked(true))}
    >
      {day}
    </button>
  )
}
