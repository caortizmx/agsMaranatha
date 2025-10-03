<template>
  <section class="events-page" aria-labelledby="events-title">
    <div class="events-hero">
      <h1 id="events-title">Eventos Especiales</h1>
      <p>
        Celebramos la creatividad, la colaboración y la fe a través de actividades que unen a nuestra comunidad educativa durante
        todo el año escolar.
      </p>
    </div>

    <div class="events-grid">
      <article v-for="event in events" :key="event.title" class="events-card">
        <h2 class="events-card__title">{{ event.title }}</h2>
        <p class="events-card__description">{{ event.description }}</p>
        <p class="events-card__meta">{{ event.season }}</p>
      </article>
    </div>

    <figure class="events-image">
      <img
        src="https://images.unsplash.com/photo-1512139219482-b7f4a2f26c1a?auto=format&fit=crop&w=1200&q=80"
        alt="Estudiantes celebrando un evento escolar"
        loading="lazy"
      />
      <figcaption>Momentos que fortalecen la identidad y el compañerismo de nuestros alumnos.</figcaption>
    </figure>
  </section>
</template>

<script setup>
const events = [
  {
    title: 'Feria de Ciencias',
    description:
      'Proyectos científicos interdisciplinarios donde los alumnos presentan experimentos y soluciones innovadoras.',
    season: 'Primavera',
  },
  {
    title: 'Festival de Primavera',
    description:
      'Un encuentro artístico con presentaciones musicales, teatro y danza que resaltan los talentos de cada grupo.',
    season: 'Finales de abril',
  },
  {
    title: 'Semana de la Lectura',
    description:
      'Lecturas dramatizadas, círculos de lectura y visitas de autores para fomentar el amor por las letras.',
    season: 'Octubre',
  },
  {
    title: 'Viaje escolar anual',
    description:
      'Excursión formativa que refuerza la convivencia y los aprendizajes vivenciales fuera del aula.',
    season: 'Invierno',
  },
]
</script>

<style scoped>
.events-page {
  display: flex;
  flex-direction: column;
  gap: clamp(2.5rem, 5vw, 4rem);
  padding: clamp(3rem, 6vw, 4.5rem) clamp(1.5rem, 6vw, 4.5rem) clamp(4rem, 8vw, 6rem);
  background: linear-gradient(180deg, #f7f8fc 0%, #eef1ff 100%);
}

.events-hero {
  text-align: center;
  max-width: 780px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.events-hero h1 {
  margin: 0;
  font-size: clamp(2.3rem, 2vw + 1.75rem, 3rem);
  color: #1f2b6c;
}

.events-hero p {
  margin: 0;
  font-size: clamp(1rem, 0.6vw + 0.95rem, 1.15rem);
  color: #40466b;
  line-height: 1.7;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: clamp(1.25rem, 3vw, 2rem);
}

.events-card {
  background: #ffffff;
  border-radius: 1.75rem;
  padding: clamp(1.75rem, 3vw, 2.25rem);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  box-shadow: 0 18px 45px rgba(31, 43, 108, 0.12);
}

.events-card__title {
  margin: 0;
  font-size: 1.35rem;
  color: #243377;
  font-weight: 700;
}

.events-card__description {
  margin: 0;
  color: #4a4f6f;
  line-height: 1.6;
}

.events-card__meta {
  margin: 0;
  font-weight: 600;
  color: #c06628;
}

.events-image {
  margin: 0 auto;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  text-align: center;
}

.events-image img {
  width: 100%;
  border-radius: 2rem;
  object-fit: cover;
  box-shadow: 0 24px 60px rgba(27, 45, 108, 0.18);
}

.events-image figcaption {
  font-size: 0.95rem;
  color: #3c4464;
  max-width: 640px;
}

@media (max-width: 640px) {
  .events-page {
    padding: 2.5rem 1.5rem 4rem;
  }

  .events-card {
    border-radius: 1.5rem;
  }

  .events-image img {
    border-radius: 1.5rem;
  }
}
</style>
