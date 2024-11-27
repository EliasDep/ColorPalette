import styled from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Palette from "./Components/Palette.jsx"
import Palettes from './Components/Palettes.jsx'


function App() {

  return (
    <BrowserRouter>
      <AppStyled>
        <div className="grid"></div>
        <Routes>
          <Route path="/" element={<Palettes />} />
          <Route path="/palette/:id" element={<Palette />} />
        </Routes>
      </AppStyled>
    </BrowserRouter>
  )
}


const AppStyled = styled.div`
    min-height: 100vh;
    background-color: slateblue;
    .grid{
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url(${props => props.grid});
      background-repeat: repeat;
      z-index: 0;
    }
`

export default App
