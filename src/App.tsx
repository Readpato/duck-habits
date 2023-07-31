import { useEffect, useState } from 'react'

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
  const [date, setDate] = useState<Date | null>(null)
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

  useEffect(() => {
    getTime()
  }, [])

  return (
    <main>
      <h1>Duck habits</h1>
      <button onClick={getTime}>Click me</button>
      <p>
        {date === null && 'Loading'}
        {date !== null &&
          `Year: ${date.year}, Month: ${date.month}, Days: ${date.days}`}
      </p>
    </main>
  )
}

export default App
