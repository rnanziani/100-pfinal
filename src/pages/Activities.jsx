import './Activities.css';

const Activities = () => {
  const activities = [
    {
      id: 1,
      name: "Cabalgatas",
      description: "Recorre los senderos de la cordillera a caballo, disfrutando de vistas panorámicas únicas.",
      duration: "2-4 horas",
      difficulty: "Principiante",
      season: "Todo el año"
    },
    {
      id: 2,
      name: "Ciclismo de Montaña",
      description: "Aventúrate por los senderos en bicicleta y descubre rincones escondidos de Nahuelbuta.",
      duration: "1-3 horas",
      difficulty: "Intermedio",
      season: "Primavera - Otoño"
    },
    {
      id: 3,
      name: "Tirolesa",
      description: "Vuela sobre el bosque nativo y siente la adrenalina mientras admiras la naturaleza desde las alturas.",
      duration: "30 minutos",
      difficulty: "Principiante",
      season: "Todo el año"
    },
    {
      id: 4,
      name: "Trekking",
      description: "Caminatas guiadas por senderos naturales para conocer la flora y fauna local de la cordillera.",
      duration: "2-6 horas",
      difficulty: "Principiante a Avanzado",
      season: "Todo el año"
    },
    {
      id: 5,
      name: "Observación de Aves",
      description: "Descubre la rica avifauna de Nahuelbuta con guías especializados en ornitología.",
      duration: "2-3 horas",
      difficulty: "Principiante",
      season: "Primavera - Verano"
    },
    {
      id: 6,
      name: "Fotografía de Naturaleza",
      description: "Talleres y salidas fotográficas para capturar la belleza natural de la cordillera.",
      duration: "3-4 horas",
      difficulty: "Principiante",
      season: "Todo el año"
    },
    {
      id: 7,
      name: "Kayak",
      description: "Navega por los lagos y ríos cercanos en una experiencia única rodeado de naturaleza.",
      duration: "2-3 horas",
      difficulty: "Intermedio",
      season: "Primavera - Verano"
    },
    {
      id: 8,
      name: "Escalada en Roca",
      description: "Desafía las formaciones rocosas naturales con equipos profesionales y guías certificados.",
      duration: "4-6 horas",
      difficulty: "Avanzado",
      season: "Primavera - Otoño"
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Principiante':
        return 'difficulty-beginner';
      case 'Intermedio':
        return 'difficulty-intermediate';
      case 'Avanzado':
        return 'difficulty-advanced';
      default:
        return 'difficulty-beginner';
    }
  };

  return (
    <div className="activities-page">
      <div className="activities-header">
        <div className="container">
          <h1 className="activities-title">Actividades y Aventuras</h1>
          <p className="activities-subtitle">
            Descubre todas las experiencias que Nahuelbuta Lodge tiene para ofrecerte
          </p>
        </div>
      </div>

      <div className="activities-content">
        <div className="container">
          <div className="activities-grid">
            {activities.map((activity) => (
              <div key={activity.id} className="activity-card">
                <div className="activity-header">
                  <h3 className="activity-name">{activity.name}</h3>
                </div>
                
                <span className={`difficulty-badge ${getDifficultyColor(activity.difficulty)}`}>
                  {activity.difficulty}
                </span>
                
                <p className="activity-description">
                  {activity.description}
                </p>
                
                <div className="activity-details">
                  <div className="detail-item">
                    <span className="detail-label">Duración:</span>
                    <span className="detail-value">{activity.duration}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Temporada:</span>
                    <span className="detail-value">{activity.season}</span>
                  </div>
                </div>
                
                <div className="activity-actions">
                  <button className="btn-reserve">Reservar</button>
                  <button className="btn-info">Más Info</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
