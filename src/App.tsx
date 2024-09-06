import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Registracija from './components/Registracija'
import Prijava from './components/Prijava'
import Kontakt from './components/Kontakt'
import Onama from './components/Onama'


function App() {

  return (
<>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Registracija />} />
          <Route path="/register" element={<Registracija />} />
          <Route path="/login" element={<Prijava />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/onama" element={<Onama />} />
        </Routes>
      </div>
    </Router>
</>
  )
}

export default App