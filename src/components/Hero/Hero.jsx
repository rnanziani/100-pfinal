import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-image-container">
        <img 
          src="/images/f05.jpeg" 
          alt="Vista panorámica de la Cordillera de Nahuelbuta" 
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text-container">
          <h1 className="hero-title">
            Nahuelbuta Lodge
          </h1>
          <p className="hero-subtitle">
            Descubre la magia de la Cordillera de Nahuelbuta
          </p>
          <p className="hero-description">
            Un refugio de lujo en el corazón de la naturaleza chilena, 
            donde la tranquilidad se encuentra con la aventura.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary">
              Reservar Ahora
            </button>
            <button className="btn-secondary">
              Explorar Lodge
            </button>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow">
          <span>Descubre más</span>
          <div className="arrow-down"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
