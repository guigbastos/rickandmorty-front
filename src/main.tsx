import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Home } from './pages/Home/index.tsx'
import { GlobalStyle } from './theme/globalstyles.ts'

createRoot(document.getElementById('root')!).render(
  <>
  <GlobalStyle/>
  <BrowserRouter>
  <Routes>
      <Route path='/' element={<Home />} />
  </Routes>
  </BrowserRouter>
  </>
)
