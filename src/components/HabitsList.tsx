import type { Habit as HabitType } from '../types'
import Habit from './Habit'

interface HabitsListProps {
  habits: HabitType[]
  days?: number
}

export default function HabitList({ habits, days }: HabitsListProps) {
  const list = () =>
    habits.length > 0 ? (
      habits.map((habit) => (
        <Habit key={habit.id} text={habit.text} days={days as number} />
      ))
    ) : (
      <li>No habit added yet!</li>
    )

  return (
    <section>
      <ul>{list()}</ul>
    </section>
  )
}
