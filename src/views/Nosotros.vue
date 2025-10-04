<template>
  <div class="nosotros-page">
    <section class="hero">
      <div class="hero__text">
        <p>
          El Colegio Maranatha fue fundado en 1991 por el Apóstol Alfredo Ferrara iniciando con preescolar y primaria. Con el tiempo, este colegio creció incorporando la secundaria, preparatoria y la universidad. El Colegio Maranatha es una extensión de la iglesia cristiana Castillo del Rey Brisas. Se le ha puesto este nombre para distinguirlo entre los demás como un colegio en el cual se instruye académicamente con principios bíblicos y que contribuye a formar el carácter, teniendo como modelo a Cristo.
        </p>
      </div>
    </section>
    <div class="hero__image">
      <img
        src="../assets/NosoOracion.png"
        alt="Ceremonia académica del Colegio Maranatha"
      />
    </div>
    <section class="feature feature--mission">
      <div class="feature__content">
        <div class="feature__text">
          <h2>Nuestra Misión</h2>
          <p>
            Formar hombres y mujeres quienes por su testimonio y preparación, sean capaces de transformar generaciones, sirviendo a su patria y a la sociedad para la gloria de Dios.
          </p>
        </div>
        <div class="feature__image">
          <img
            src="../assets/NosoMision.png"
            alt="Estudiantes celebrando su graduación"
          />
        </div>
      </div>
    </section>

    <section class="feature feature--vision">
      <div class="feature__content">
        <div class="feature__image">
          <img
            src="../assets/NosoVision.png"
            alt="Niños del Colegio Maranatha"
          />
        </div>
        <div class="feature__text">
          <h2>Nuestra Visión</h2>
          <p>
            Añadir a la fe virtud y a ésta conocimiento, que busca despertar en el alumno una devoción por el servicio al Señor y a su prójimo.
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
  padding: clamp(3.5rem, 6vw, 4.75rem) clamp(1.5rem, 5vw, 4rem);
  background: linear-gradient(90deg, #1f2b6c 0%, #27368f 100%);
  color: #ffffff;
  overflow: hidden;
  border-radius: 0 0 2.5rem 2.5rem;
}

.hero__text p {
  font-size: 1.05rem;
  line-height: 1.75;
  max-width: 1200px;
  text-align: justify;
  margin: 0 auto;
}

.hero__image {
  justify-self: center;
  max-width: 520px;
  width: min(100%, 520px);
  margin: clamp(-80px, -10vw, -40px) auto 0 auto;
  padding: 0 clamp(1.5rem, 4vw, 3rem);
}

.hero__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 25px 45px rgba(11, 21, 65, 0.35);
}

.feature {
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 2rem;
}

.feature__content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  align-items: center;
  gap: clamp(1.5rem, 4vw, 3rem);
}

.feature__text {
  padding: clamp(2.5rem, 4vw, 3.5rem);
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

.feature__image {
  position: relative;
  min-height: 320px;
}

.feature__image img {
  width: 100%;
  height: 100%;
  max-height: 520px;
  object-fit: cover;
}

.feature--mission {
  background-color: #E6A726;
  color: #fff7ec;
}

.feature--vision {
  background-color: #E6A726;
  color: #fff7ec;
}

.feature--vision .feature__text h2 {
  color: #fff7ec;
}

.feature--vision .feature__text p {
  color: #fff7ec;
}

@media (max-width: 1024px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero__text p {
    margin: 0 auto;
  }

  .hero__image {
    margin: 2rem auto 0;
    padding-inline: clamp(1.5rem, 6vw, 3rem);
  }

  .feature__content {
    grid-template-columns: 1fr;
  }

  .feature--vision .feature__content {
    display: flex;
    flex-direction: column-reverse;
  }
}

@media (max-width: 640px) {
  .nosotros-page {
    gap: 2rem;
  }

  .hero {
    padding: 3rem 1.5rem;
    border-radius: 0 0 2rem 2rem;
  }

  .hero__image {
    margin-top: 1.5rem;
    padding-inline: 1.5rem;
    padding: 0;
  }

  .feature__text {
    padding: 2.5rem 1.5rem;
  }

  .feature__image {
    min-height: 260px;
  }
}
</style>