import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Registracija from './components/Registracija'
import Prijava from './components/Prijava'
import Kontakt from './components/Kontakt'
import Onama from './components/Onama'
import Profil from './components/Profil'
import Pocetna from './components/Pocetna'
import MuskiFrizeri from './components/MuskiFrizeri'
import ZenskiFrizeri from './components/ZenskiFrizeri'
import UslugeM from './components/UslugeM'
import UslugeZ from './components/UslugeZ'
import Termini from './components/Termini'

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
          <Route path="/profil" element={<Profil />} />
          <Route path="/pocetna" element={<Pocetna />} />
          <Route path="/muski" element={<MuskiFrizeri />} />
          <Route path="/zenski" element={<ZenskiFrizeri />} />
          <Route path="/uslugem" element={<UslugeM />} />
          <Route path="/uslugez" element={<UslugeZ />} />
          <Route path="/termini" element={<Termini />} />
        </Routes>
      </div>
    </Router>
</>
  )
}

export default App