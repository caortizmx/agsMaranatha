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
          src="../assets/OfEdPree.png"
          alt="Niños en preescolar con pinturas"
          class="oferta-card__image"
          loading="lazy"
        />
        <div class="oferta-card__content">
          <h2 class="oferta-card__title">Preescolar</h2>
          <p class="oferta-card__text">
            La educación preescolar comprende desde los 3 a los 5 años y en ella se busca desarrollar y potenciar las capacidades del niño o niña como base de los aprendizajes que tendrán que realizar más adelante.
          </p>
        </div>
      </article>

      <article class="oferta-card">
        <img
          src="../assets/OfEdPrim.png"
          alt="Alumnos de primaria en clase"
          class="oferta-card__image"
          loading="lazy"
        />
        <div class="oferta-card__content">
          <h2 class="oferta-card__title">Primaria</h2>
          <p class="oferta-card__text">
            La educación primaria inicia a los 6 años, concluye a los 12 años y corresponde a la última etapa de la infancia. Buscamos que nuestros estudiantes se sientan cómodos en el ambiente escolar y ante el aprendizaje, de tal manera que estén en confianza para desarrollar sus habilidades y capacidades al tiempo que se abren a la experiencia del conocimiento con optimismo y emoción.
          </p>
        </div>
      </article>

      <article class="oferta-card">
        <img
          src="../assets/OfEdSecu.png"
          alt="Alumnos de secundaria formados"
          class="oferta-card__image"
          loading="lazy"
        />
        <div class="oferta-card__content">
          <h2 class="oferta-card__title">Secundaria</h2>
          <p class="oferta-card__text">
            La educación secundaria va de los 13 a los 15 años y en esta etapa reside no sólo en la adquisición de conocimientos, sino que es el marco donde los adolescentes experimentan el cambio emocionante que los lleva de ser niños a jóvenes.
          </p>
        </div>
      </article>

      <article class="oferta-card">
        <img
          src="../assets/OfEdPrepa.png"
          alt="Graduados de preparatoria con birretes"
          class="oferta-card__image"
          loading="lazy"
        />
        <div class="oferta-card__content">
          <h2 class="oferta-card__title">Preparatoria</h2>
          <p class="oferta-card__text">
            El bachillerato es un periodo donde aumenta la independencia, no solamente desde el punto de vista social y emocional, sino también académico; va de los 16 a los 18 años.
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
  color: #CC1719;
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
    height: 350px;
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