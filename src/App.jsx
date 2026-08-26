import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AllMonuments from './pages/AllMonuments'
import AllColours from './pages/AllColours'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monuments" element={<AllMonuments />} />
        <Route path="/colours" element={<AllColours />} />
      </Routes>
    </BrowserRouter>
  )
}
