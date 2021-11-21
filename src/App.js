import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
       <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="informacoes" element={<Informacoes/>} />
          <Route path="trailer" element={<Trailer/>} />
        </Routes>
        </header>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h1 className="Header">Cartão miranha</h1>
        <p className="Header">Se você gosta do miranha,</p>
      </main>
      <nav className="boxHome">
        <Link className="App-link" to="/about">Clique aqui!</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2 className="Header">Quem é miranha?</h2>
        <p>
          O Homem-Aranha (miranha) 
          o alter-ego de Peter Parker, <br /> é um personagem 
          fictício, um super-herói que aparece nas revistas <br/>
          em quadrinhos americanas publicadas pela Marvel Comics, <br/> 
          existindo no seu universo partilhado.
        </p>
      </main>
      <nav className="box">
        <Link className="App-link" to="/informacoes">Ver mais</Link>
      </nav>
      <nav className="box">
        <Link className="App-link" to="/">Voltar</Link>
      </nav>
    </>
  );
}

function Informacoes() {
  return (
    <>
      <main>
        <h2 className="Header">Você Sabia?</h2>
        <p>A história em quadrinhos do personagem foi a <br/>
          primeira a incluir personagens negros. 
          Até então, predominavam protagonistas 
          brancos. <br/> Essa inclusão foi um passo 
          importante para a criação de super-heróis negros.</p>
      </main>
      <nav className="box">
        <Link className="App-link" to="/trailer">Ver mais</Link>
      </nav>
      <nav className="box">
        <Link className="App-link" to="/about">Voltar</Link>
      </nav>
    </>
  );
}

function Trailer () {
  return (
    <>
      <main>
        <h2 className="Header">Agora que você sabe, confira trailer!</h2>
        <p className="text1">Insira sua mensagem aqui...<br /> Insira sua mensagem aqui... {/* O <br /> funciona como quebra de linha! */}
          Insira sua mensagem aqui...  <br /> Insira sua mensagem aqui...
          Insira sua mensagem aqui...<br />  Insira sua mensagem aqui...
          Insira sua mensagem aqui... <br /> Insira sua mensagem aqui... <br />Insira sua mensagem aqui...
          <br /><br />
          Me siga nas redes sociais e me marca se você fez!! <br />
          Twitter: @aryzete_ <br />
          Instagram: @aryzete_ <br />
          Twitch: @aryzete <br />
          GitHub: @aryniceia <br /></p>
     
        <iframe className="video" width="853" height="480" src="https://www.youtube.com/embed/CyiiEJRZjSU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     
      </main>

      <nav className="box">
        <Link className="App-link" to="/">Home Page</Link>
      </nav>
      <nav className="box">
        <Link className="App-link" to="/about">Voltar</Link>
      </nav>
    </>
  );
  
}

export default App;