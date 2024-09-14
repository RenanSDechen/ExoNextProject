import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
      {/* Seção de Imagem Fixa */}
      <div className="hero-section">
        <div className="hero-content bg">
          <h1>Descubra o imóvel ideal para você.</h1>
          <p>Seja para comprar ou alugar, ajudaremos você a encontrar seu novo imóvel.</p>
          <button className="cta-button">Ver ofertas de imóveis</button>
        </div>
      </div>

      {/* Seção de Seleção de Estilo de Imobiliária */}
      <div className="selection-section">
        <h2>Escolha a área de imóveis que deseja explorar</h2>
        <div className="category-select">
          <select name="category" id="category">
            <option value="apartments">Apartamentos</option>
            <option value="houses">Casas</option>
            <option value="commercial">Comercial</option>
            <option value="land">Terrenos</option>
          </select>
        </div>
      </div>

      {/* Seção de Listagem de Imóveis */}
      <div className="listings-section">
        <h2>Imóveis Disponíveis</h2>
        <div className="listings">
          <div className="listing-item"> 
            <div className="image-placeholder"></div>
            <p>Apartamento 1 - Centro</p>
          </div>
          <div className="listing-item"> 
            <div className="image-placeholder"></div>
            <p>Apartamento 2 - Praia</p>
          </div>
          <div className="listing-item"> 
            <div className="image-placeholder"></div>
            <p>Casa 1 - Subúrbio</p>
          </div>
          <div className="listing-item"> 
            <div className="image-placeholder"></div>
            <p>Escritório - Comercial</p>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <footer>
        <p>© 2024 Sua Imobiliária. Todos os direitos reservados.</p>
      </footer>
    </div>
    </>
  )
}

export default App;
