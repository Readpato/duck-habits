interface HabitProp {
  text: string
  days: number
}

export default function Habit({ text, days }: HabitProp) {
  return (
    <li>
      <p>{text}</p>
      <p>{days}</p>
    </li>
  )
}
