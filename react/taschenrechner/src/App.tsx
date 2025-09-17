import Calculator from './Calculator'
import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [darkMode, setDarkMode] = useState()

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    if (darkModeMediaQuery.matches) {
      setDarkMode(true)
    }

    darkModeMediaQuery.addEventListener("change", (event) => {
      setDarkMode(event.matches)
    })
  }, [])

  function toggleDarkMode() {
    setDarkMode(prev => !prev)
  }

  return (
    <div className={`${darkMode && "dark"} bg-linear-to-br from-indigo-100 dark:from-indigo-950 to-indigo-200 dark:to-indigo-900  h-dvh w-full flex items-center justify-center relative overflow-clip`}>

      <Calculator toggleDarkMode={toggleDarkMode} />
    </div>
  )
}

export default App
