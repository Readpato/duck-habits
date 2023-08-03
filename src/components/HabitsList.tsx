import type { Habit as HabitType } from '../types'

interface HabitsListProps {
  habits: HabitType[]
  days?: number
}

interface HabitProp {
  text: string
  days: number
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
        <button className="mr-2" key={index}>
          {index + 1}
        </button>
      ))}
    </li>
  )
}
