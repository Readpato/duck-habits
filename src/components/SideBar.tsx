import { Month } from '../types'

interface SideBarProps {
  months: Month[]
  years: number[]
}

function SideBar({ months, years }: SideBarProps) {
  const handleClick = () => {
    console.log('button has been clicked')
  }
  return (
    <header className="flex justify-between items-center px-2 py-3 relative text-center">
      <h1>Duck habits</h1>
      <button onClick={handleClick}>Select date</button>
      <nav className="w-full absolute right-0 top-100% bg-green-500">
        <ul className="px2 py-3">
          {years.map((year) => (
            <li key={year}>{year}</li>
          ))}
          {months.map((month) => (
            <li key={month.id}>{month.name}</li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default SideBar
