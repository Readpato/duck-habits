import type { Habit } from '../types'

interface HabitsListProps {
  habits: Habit[]
  days?: number
}

export default function HabitList({ habits, days }: HabitsListProps) {
  const list = () =>
    habits.length > 0 ? (
      habits.map((habit) => <li key={habit.id}>{habit.text}</li>)
    ) : (
      <li>No habit added yet!</li>
    )

  return (
    <section>
      <ul>{list()}</ul>
      <p>{days}</p>
    </section>
  )
}
