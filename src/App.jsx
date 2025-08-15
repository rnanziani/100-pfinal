import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Activities from './pages/Activities';
// import Rooms from './pages/Rooms';
// import Restaurant from './pages/Restaurant';
// import ContactPage from './pages/ContactPage';
// import Gallery from './pages/Gallery';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/activities" element={
            <div style={{ marginTop: '70px' }}>
              <Activities />
            </div>
          } />
          <Route path="/rooms" element={
            <div style={{ marginTop: '70px', padding: '2rem' }}>
              <h1>Nuestras Habitaciones</h1>
              <p>Descubre el confort en medio de la naturaleza</p>
            </div>
          } />
          <Route path="/restaurant" element={
            <div style={{ marginTop: '70px', padding: '2rem' }}>
              <h1>Restaurante</h1>
              <p>Sabores únicos con ingredientes locales</p>
            </div>
          } />
          <Route path="/gallery" element={
            <div style={{ marginTop: '70px', padding: '2rem' }}>
              <h1>Galería</h1>
              <p>Momentos especiales en Nahuelbuta Lodge</p>
            </div>
          } />
          <Route path="/contact" element={
            <div style={{ marginTop: '70px', padding: '2rem' }}>
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