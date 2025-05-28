import Navigation from './components/Navigation'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
     <header>
      <h1>Home</h1>
      <Navigation/>
     </header>
     <main>
      <Outlet/>
     </main>
     <footer>
      <small>2023 My App</small>
     </footer>
    </>
  )
}

export default App
