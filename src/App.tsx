import { useEffect, useState } from 'react'

interface Date {
  month: string
  year: number
}

function App() {
  const [date, setDate] = useState<Date>(null)
  const getTime = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const month = months[new Date().getMonth()]
    const year = new Date().getFullYear()
    setDate({ month, year })
  }

  useEffect(() => {
    setTimeout(() => {
      getTime()
    }, 5000)
  }, [])

  return (
    <main>
      <h1>Duck habits</h1>
      <button onClick={getTime}>Click me</button>
      <p>
        {date === null && 'Loading'}
        {date !== null && `Year: ${date.year}, Month: ${date.month}`}
      </p>
    </main>
  )
}

export default App
