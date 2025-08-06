import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
// import Hero from './components/Hero';
// import Rooms from './pages/Rooms';
// import Restaurant from './pages/Restaurant';
// import ContactPage from './pages/ContactPage';
// import Gallery from './pages/Gallery';

function App() {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: '80px', padding: '2rem' }}>
        <Routes>
          <Route path="/" element={
            <div>
              <h1>Bienvenido a Nahuelbuta Lodge</h1>
              <p>Tu destino de descanso en la naturaleza</p>
            </div>
          } />
          <Route path="/rooms" element={
            <div>
              <h1>Nuestras Habitaciones</h1>
              <p>Descubre el confort en medio de la naturaleza</p>
            </div>
          } />
          <Route path="/restaurant" element={
            <div>
              <h1>Restaurante</h1>
              <p>Sabores únicos con ingredientes locales</p>
            </div>
          } />
          <Route path="/gallery" element={
            <div>
              <h1>Galería</h1>
              <p>Momentos especiales en Nahuelbuta Lodge</p>
            </div>
          } />
          <Route path="/contact" element={
            <div>
              <h1>Contacto</h1>
              <p>Estamos aquí para ayudarte</p>
            </div>
          } />
        </Routes>
      </main>
    </>
  );
}

export default App;