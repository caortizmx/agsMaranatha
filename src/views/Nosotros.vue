<template>
  <div class="nosotros-page">
    <section class="hero">
      <div class="hero__text">
        <h1>Nosotros</h1>
        <p>
          El Colegio Maranatha fue fundado en 1991 por el Apostol Alfredo Ferrara
          iniciando con preescolar y primaria. Con el tiempo, este colegio creció
          incorporando la secundaria, preparatoria y universidad. El Colegio
          Maranatha se distingue como un colegio cristiano evangélico acreditado con
          principios bíblicos y que contribuye a formar el carácter, teniendo como
          modelo a Cristo.
        </p>
      </div>
      <div class="hero__image">
        <img
          src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9991?auto=format&fit=crop&w=900&q=80"
          alt="Ceremonia académica del Colegio Maranatha"
        />
      </div>
    </section>

    <section class="feature feature--mission">
      <div class="feature__content">
        <div class="feature__text">
          <h2>Nuestra Misión</h2>
          <p>
            Formar hombres y mujeres quienes usen su liderazgo generacional para
            impactar positivamente a su comunidad, siendo luz y dando gloria a Dios.
          </p>
        </div>
        <div class="feature__image">
          <img
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80"
            alt="Estudiantes celebrando su graduación"
          />
        </div>
      </div>
    </section>

    <section class="feature feature--vision">
      <div class="feature__content">
        <div class="feature__image">
          <img
            src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&w=900&q=80"
            alt="Niños del Colegio Maranatha"
          />
        </div>
        <div class="feature__text">
          <h2>Nuestra Visión</h2>
          <p>
            Anclar la fe, la virtud y el crecimiento académico en generaciones
            futuras, promoviendo el servicio al Señor y a su prójimo.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.nosotros-page {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.hero {
  display: grid;
  gap: 2rem;
  align-items: center;
  padding: 4rem clamp(1.5rem, 3vw, 4rem);
  background: linear-gradient(90deg, #1f2b6c 0%, #27368f 100%);
  border-radius: 24px;
  color: #ffffff;
  overflow: hidden;
}

.hero__text h1 {
  font-size: clamp(2.25rem, 3vw + 1rem, 3.5rem);
  margin-bottom: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.hero__text p {
  font-size: 1.05rem;
  line-height: 1.75;
  max-width: 56ch;
}

.hero__image {
  justify-self: center;
  max-width: 520px;
  width: 100%;
}

.hero__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 25px 45px rgba(11, 21, 65, 0.35);
}

.feature {
  border-radius: 24px;
  overflow: hidden;
}

.feature__content {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: stretch;
}

.feature__text {
  padding: clamp(2.5rem, 3vw + 1rem, 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.feature__text h2 {
  font-size: clamp(1.8rem, 2vw + 1rem, 2.5rem);
  font-weight: 700;
}

.feature__text p {
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 48ch;
}

.feature__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.feature--mission {
  background-color: #c76d2c;
  color: #fff7ec;
}

.feature--vision {
  background-color: #f3d57c;
  color: #3d2d12;
}

.feature--vision .feature__text h2 {
  color: #2f1f05;
}

.feature--vision .feature__text p {
  color: #3d2d12;
}

@media (max-width: 1024px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero__text p {
    margin: 0 auto;
  }

  .feature__content {
    grid-template-columns: 1fr;
  }

  .feature--vision .feature__content {
    display: flex;
    flex-direction: column-reverse;
  }

  .feature__image {
    max-height: 320px;
  }
}

@media (max-width: 640px) {
  .nosotros-page {
    gap: 2rem;
  }

  .hero {
    padding: 3rem 1.5rem;
  }

  .feature__text {
    padding: 2.5rem 1.5rem;
  }
}
</style>
