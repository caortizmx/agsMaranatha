<template>
  <section class="oferta-educativa">
    <div class="oferta-educativa__intro">
      <h1 class="oferta-educativa__title">Oferta Educativa</h1>
      <p class="oferta-educativa__description">
        Buscamos constantemente que nuestros estudiantes identifiquen sus habilidades y capacidades para que las
        descubran e interpreten de manera natural. Que sean conscientes de su potencial y saber qué está en ellos
        comprometerse para mejorar no solo su vida, sino su entorno.
      </p>
    </div>

    <div class="oferta-educativa__grid">
      <article class="oferta-card">
        <img
          src="https://res.cloudinary.com/dkskuyfiu/image/upload/v1707620421/agsmaranatha/preescolar.webp"
          alt="Niños en preescolar con pinturas"
          class="oferta-card__image"
          loading="lazy"
        />
        <div class="oferta-card__content">
          <h2 class="oferta-card__title">Preescolar</h2>
          <p class="oferta-card__text">
            La educación preescolar comprende desde los 3 a 6 años. En esta etapa se generan grandes avances a nivel
            físico, mental y social. Es la primera entrada a la vida escolar. Los niños necesitan aprender a trabajar
            con más niños, reconocer los elementos que intervienen en su aprendizaje, así como evaluar la pertinencia de
            los aprendizajes que tendrán que realizar más adelante.
          </p>
        </div>
      </article>

      <article class="oferta-card">
        <img
          src="https://res.cloudinary.com/dkskuyfiu/image/upload/v1707620421/agsmaranatha/primaria.webp"
          alt="Alumnos de primaria en clase"
          class="oferta-card__image"
          loading="lazy"
        />
        <div class="oferta-card__content">
          <h2 class="oferta-card__title">Primaria</h2>
          <p class="oferta-card__text">
            La educación primaria inicia a los 6 años, concluye a los 12 y dura seis años. En esta etapa nuestra misión
            es reforzar el desarrollo de habilidades y competencias que permitan a nuestros estudiantes un excelente
            desenvolvimiento social, emocional, cultural y académico. Buscamos prepararles para el nivel secundario.
          </p>
        </div>
      </article>

      <article class="oferta-card">
        <img
          src="https://res.cloudinary.com/dkskuyfiu/image/upload/v1707620421/agsmaranatha/secundaria.webp"
          alt="Alumnos de secundaria formados"
          class="oferta-card__image"
          loading="lazy"
        />
        <div class="oferta-card__content">
          <h2 class="oferta-card__title">Secundaria</h2>
          <p class="oferta-card__text">
            La educación secundaria va de los 13 a los 15 años y comprende tres grados. Aquí ayudamos a los estudiantes a
            seguir madurando sus capacidades intelectuales y sociales, fomentando la responsabilidad y el pensamiento
            crítico. Promovemos actividades académicas, culturales y deportivas que les preparan para los retos del nivel
            medio superior.
          </p>
        </div>
      </article>

      <article class="oferta-card">
        <img
          src="https://res.cloudinary.com/dkskuyfiu/image/upload/v1707620421/agsmaranatha/preparatoria.webp"
          alt="Graduados de preparatoria con birretes"
          class="oferta-card__image"
          loading="lazy"
        />
        <div class="oferta-card__content">
          <h2 class="oferta-card__title">Preparatoria</h2>
          <p class="oferta-card__text">
            La educación en este periodo abarca desde los 16 a los 18 años. Se divide en tres grados y, al finalizar, los
            alumnos obtienen un certificado y, en su momento, el título. Buscamos acompañarles en la toma de decisiones
            para su formación profesional, tanto en ámbito académico, vocacional y en los valores que forman parte de su
            proyecto de vida.
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.oferta-educativa {
  padding: 4rem 1.5rem 5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.oferta-educativa__intro {
  text-align: center;
  margin-bottom: 3rem;
}

.oferta-educativa__title {
  font-size: clamp(2.25rem, 2vw + 1.5rem, 3rem);
  font-weight: 700;
  margin-bottom: 1.25rem;
  color: #1f1f1f;
}

.oferta-educativa__description {
  font-size: clamp(1rem, 0.7vw + 0.95rem, 1.125rem);
  line-height: 1.8;
  color: #4a4a4a;
  max-width: 860px;
  margin: 0 auto;
}

.oferta-educativa__grid {
  display: grid;
  gap: 2.5rem;
}

.oferta-card {
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 25px 45px rgba(31, 31, 31, 0.08);
  overflow: hidden;
  display: grid;
  gap: 0;
  grid-template-columns: 1fr;
}

.oferta-card__image {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.oferta-card__content {
  padding: 2rem;
}

.oferta-card__title {
  font-size: clamp(1.5rem, 0.8vw + 1.3rem, 1.75rem);
  color: #1f1f1f;
  font-weight: 700;
  margin-bottom: 1rem;
}

.oferta-card__text {
  font-size: clamp(0.975rem, 0.4vw + 0.85rem, 1.075rem);
  line-height: 1.75;
  color: #4a4a4a;
  margin: 0;
}

@media (min-width: 768px) {
  .oferta-educativa {
    padding: 5rem 2.5rem 6rem;
  }

  .oferta-educativa__grid {
    gap: 3rem;
  }

  .oferta-card {
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
  }

  .oferta-card:nth-child(even) .oferta-card__image {
    order: 2;
  }

  .oferta-card:nth-child(even) .oferta-card__content {
    order: 1;
  }

  .oferta-card__image {
    height: 100%;
  }
}

@media (min-width: 1024px) {
  .oferta-educativa__grid {
    gap: 3.5rem;
  }

  .oferta-card__content {
    padding: 2.5rem 3rem;
  }
}
</style>
