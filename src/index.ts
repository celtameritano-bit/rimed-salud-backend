import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor RIMED SALUD corriendo en puerto ${PORT}`);
  console.log(`📱 API disponible en: http://localhost:${PORT}`);
});