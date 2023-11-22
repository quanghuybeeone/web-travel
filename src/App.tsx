import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/">
              <Route index element={<Home />}></Route>
            </Route>

          </Routes>
        </ScrollToTop>
      </BrowserRouter>

    </>
  )
}

export default App
