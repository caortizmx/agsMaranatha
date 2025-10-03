<template>
  <main class="home-page">
    <section class="hero-section">
      <img
        class="hero-background"
        src="../assets/Hero1.png"
        alt="Equipo docente del Colegio Maranatha"
      />
      <div class="hero-overlay">
        <h1>Bienvenidos al Colegio Maranatha</h1>
        <p class="hero-eyebrow">Caminando en la Visión del Señor</p>
      </div>
    </section>
    <div class="levels-grid">
      <article
        v-for="level in levels"
        :key="level.name"
        class="level-card"
        :style="`--level-color: ${level.color}`"
        tabindex="0"
      >
        <div class="card-face card-face--front">
          <h3>{{ level.name }}</h3>
        </div>
        <div class="card-face card-face--back">
          <h4>{{ level.name }}</h4>
          <p>{{ level.description }}</p>
        </div>
      </article>
    </div>

    <section class="offer-highlight">
      <div class="offer-text">
        <h2>Oferta Educativa</h2>
        <p>
          Buscamos constantemente que nuestros estudiantes identifiquen sus habilidades y capacidades
          para que las desarrollen en plenitud. De esta manera, ellos se hacen conscientes de su
          potencial y saben que está en ellos comprometerse para mejorar no sólo su vida, sino su
          entorno.
        </p>
      </div>
      <div class="offer-pillars">
        <div v-for="pillar in pillars" :key="pillar.title" class="pillar">
          <div class="pillar-icon">
            <i :class="pillar.icon" aria-hidden="true"></i>
          </div>
          <h3>{{ pillar.title }}</h3>
          <p>{{ pillar.copy }}</p>
        </div>
      </div>
    </section>

    <section class="gallery-section" aria-label="Recorrido fotográfico">
      <div class="carousel">
        <button class="carousel-control" type="button" @click="prevSlide" aria-label="Anterior">
          <i class="fas fa-chevron-left" aria-hidden="true"></i>
        </button>
        <div class="carousel-window">
          <div class="carousel-track">
            <figure
              v-for="image in visibleImages"
              :key="image.src"
              class="carousel-item"
            >
              <img :src="image.src" :alt="image.alt" loading="lazy" />
            </figure>
          </div>
        </div>
        <button class="carousel-control" type="button" @click="nextSlide" aria-label="Siguiente">
          <i class="fas fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
      <div class="carousel-dots" role="tablist" aria-label="Seleccionar grupo de imágenes">
        <button
          v-for="index in totalSlides"
          :key="index"
          :class="['dot', { active: currentSlide === index - 1 }]"
          type="button"
          role="tab"
          :aria-selected="currentSlide === index - 1"
          @click="goToSlide(index - 1)"
        >
          <span class="sr-only">Ver imágenes {{ index }}</span>
        </button>
      </div>
    </section>

    <section class="team-section" aria-labelledby="team-title">
      <div class="team-header">
        <h2 id="team-title">Conoce a nuestro personal administrativo.</h2>
        <p>
          Nuestro liderazgo acompaña a cada familia con vocación, profesionalismo y un compromiso
          genuino por el crecimiento académico y espiritual de cada estudiante.
        </p>
      </div>
      <div class="team-grid">
        <article v-for="member in leadership" :key="member.name" class="team-card">
          <div class="team-avatar">
            <img :src="member.image" :alt="`Fotografía de ${member.name}`" loading="lazy" />
          </div>
          <h3>{{ member.name }}</h3>
          <p class="team-role">{{ member.role }}</p>
        </article>
      </div>
      <button class="team-button" type="button" @click="openModal">Conoce al equipo de maestros</button>
    </section>

    <transition name="modal-fade">
      <div
        v-if="showModal"
        class="modal-backdrop"
        role="dialog"
        aria-modal="true"
        aria-labelledby="team-modal-title"
        @click.self="closeModal"
      >
        <div class="modal-panel">
          <header class="modal-header">
            <h3 id="team-modal-title">Equipo docente completo</h3>
            <button type="button" class="modal-close" @click="closeModal" aria-label="Cerrar">
              <i class="fas fa-times" aria-hidden="true"></i>
            </button>
          </header>
          <div class="modal-content">
            <p>
              Cada maestro aporta su experiencia y carisma para guiar el aprendizaje diario de nuestros
              alumnos.
            </p>
            <div class="modal-grid">
              <article v-for="member in completeTeam" :key="member.name" class="team-card">
                <div class="team-avatar">
                  <img :src="member.image" :alt="`Fotografía de ${member.name}`" loading="lazy" />
                </div>
                <h4>{{ member.name }}</h4>
                <p class="team-role">{{ member.role }}</p>
              </article>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="team-button" @click="closeModal">Cerrar</button>
          </div>
        </div>
      </div>
    </transition>
  </main>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const levels = [
  {
    name: 'Preescolar',
    color: '#8CA6DB',
    description: 'Edades 3 a 5. Desarrollamos habilidades socioemocionales, psicomotoras y el amor por el aprendizaje a través del juego guiado.'
  },
  {
    name: 'Primaria',
    color: '#6F8DD9',
    description: 'Edades 6 a 11. Fortalecemos pensamiento crítico, comprensión lectora y bases académicas con valores cristianos.'
  },
  {
    name: 'Secundaria',
    color: '#4C6BC7',
    description: 'Edades 12 a 14. Acompañamos el desarrollo de identidad, liderazgo y trabajo colaborativo con proyectos interdisciplinarios.'
  },
  {
    name: 'Preparatoria',
    color: '#1E2A78',
    description: 'Edades 15 a 18. Preparamos para la universidad con orientación vocacional, dominio tecnológico y formación espiritual.'
  }
]

const pillars = [
  {
    title: 'Inspiramos creatividad',
    copy: 'Integramos arte, música y experiencias vivenciales para despertar la imaginación en cada aula.',
    icon: 'fas fa-lightbulb'
  },
  {
    title: 'Excelencia académica',
    copy: 'Programas actualizados y docentes certificados garantizan un aprendizaje significativo.',
    icon: 'fas fa-graduation-cap'
  },
  {
    title: 'Cuidado integral',
    copy: 'Acompañamos el bienestar físico, emocional y espiritual de nuestra comunidad educativa.',
    icon: 'fas fa-hands-holding-heart'
  }
]

const carouselImages = [
  {
    src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80',
    alt: 'Alumno trabajando en su cuaderno'
  },
  {
    src: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80',
    alt: 'Estudiante participando en clase'
  },
  {
    src: 'https://images.unsplash.com/photo-1602016753527-319f3c4c41c4?auto=format&fit=crop&w=900&q=80',
    alt: 'Alumno utilizando tablet en clase'
  },
  {
    src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80',
    alt: 'Docente guiando actividad artística'
  },
  {
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80',
    alt: 'Niños trabajando en equipo'
  },
  {
    src: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80',
    alt: 'Equipo deportivo escolar entrenando'
  },
  {
    src: 'https://images.unsplash.com/photo-1546456073-6712f79251bb?auto=format&fit=crop&w=900&q=80',
    alt: 'Docente impartiendo clase de ciencias'
  },
  {
    src: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=900&q=80',
    alt: 'Materiales escolares sobre escritorio'
  },
  {
    src: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80',
    alt: 'Estudiantes colaborando en clase'
  }
]

const leadership = [
  {
    name: 'Pastor Enrique Clavellinas',
    role: 'Director',
    image: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Pastora Ana Luisa Clavellinas',
    role: 'Directora',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Patricia Zuno',
    role: 'Subdirectora',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80'
  }
]

const extendedTeam = [
  {
    name: 'Juan Carlos Herrera',
    role: 'Coordinador Académico',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'María Fernanda Ortiz',
    role: 'Orientadora Educativa',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Rafael Ramírez',
    role: 'Profesor de Matemáticas',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Daniela Márquez',
    role: 'Profesora de Ciencias',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Luis Alberto Pérez',
    role: 'Profesor de Historia',
    image: 'https://images.unsplash.com/photo-1546456073-6712f79251bb?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Cecilia Jiménez',
    role: 'Coordinadora de Inglés',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Jorge Martínez',
    role: 'Profesor de Música',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Verónica Salas',
    role: 'Profesora de Artes',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Carlos Guzmán',
    role: 'Entrenador Deportivo',
    image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Ariadna Torres',
    role: 'Psicóloga Escolar',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Miguel Ángel Lira',
    role: 'Profesor de Tecnología',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Sofía Maldonado',
    role: 'Profesora de Literatura',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80'
  }
]

const completeTeam = computed(() => [...leadership, ...extendedTeam])

const currentSlide = ref(0)
const itemsPerSlide = 3
const totalSlides = computed(() => Math.ceil(carouselImages.length / itemsPerSlide))

const goToSlide = (index) => {
  const clampedIndex = Math.min(Math.max(index, 0), totalSlides.value - 1)
  currentSlide.value = clampedIndex
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides.value) % totalSlides.value
}

const visibleImages = computed(() => {
  const start = currentSlide.value * itemsPerSlide
  return carouselImages.slice(start, start + itemsPerSlide)
})

const showModal = ref(false)

const openModal = () => {
  showModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  showModal.value = false
  document.body.style.overflow = ''
}

const handleEsc = (event) => {
  if (event.key === 'Escape') {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEsc)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEsc)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-bottom: 4rem;
  background: #f5f5f7;
  color: #1a1a1a;
}

.hero-section {
  position: relative;
  min-height: 540px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(10, 28, 66, 0.3), rgba(10, 28, 66, 0.7));
}

.hero-background {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
}

.hero-overlay {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #ffffff;
  max-width: 1200px;
  padding: 1.5rem 2rem;
}

.hero-eyebrow {
  font-size: 1.125rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.hero-section h1 {
  font-size: clamp(2.5rem, 3vw + 1.5rem, 3.5rem);
  margin-bottom: 0.75rem;
  font-weight: 700;
}

.hero-subcopy {
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
}

.levels-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
  padding: 0;
  margin: 0 auto;
  width: 100%;
  max-width: 1080px;
}

.level-card {
  position: relative;
  background: var(--level-color);
  color: #ffffff;
  border-radius: 1.25rem;
  padding: 2.5rem 1rem;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  outline: none;
  height: 200px;
}

.level-card:focus-visible {
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.8);
  transform: translateY(-6px);
}

.level-card:hover,
.level-card:focus-visible {
  transform: translateY(-6px);
  box-shadow: 0 18px 45px rgba(12, 31, 71, 0.25);
}

.card-face {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  height: 100%;
  transition: opacity 0.3s ease;
}

.card-face--back {
  position: absolute;
  inset: 0;
  padding: 2.5rem 1.5rem;
  background: rgba(8, 20, 58, 0.88);
  opacity: 0;
}

.level-card:hover .card-face--back,
.level-card:focus-visible .card-face--back {
  opacity: 1;
}

.level-card:hover .card-face--front,
.level-card:focus-visible .card-face--front {
  opacity: 0;
}

.card-face h3,
.card-face h4 {
  margin: 0;
  font-weight: 700;
  font-size: 1.45rem;
}

.card-face p {
  font-size: 0.95rem;
  line-height: 1.5;
}

.offer-highlight {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
  padding: 0 clamp(1.5rem, 5vw, 5rem);
}

.offer-text h2 {
  font-size: clamp(2rem, 1.5vw + 1.5rem, 2.8rem);
  margin-bottom: 1rem;
  color: #b8860b;
}

.offer-text p {
  max-width: 840px;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #3a3a3a;
}

.offer-pillars {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  width: 100%;
}

.pillar {
  background: #ffffff;
  padding: 2rem 1.75rem;
  border-radius: 1.5rem;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pillar:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.12);
}

.pillar-icon {
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f5d267, #d4a017);
  display: grid;
  place-items: center;
  color: #ffffff;
  font-size: 2rem;
}

.pillar h3 {
  margin: 0;
  font-size: 1.25rem;
}

.pillar p {
  margin: 0;
  color: #4a4a4a;
  line-height: 1.6;
}

.gallery-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0 clamp(1.25rem, 6vw, 6rem);
}

.carousel {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 1100px;
}

.carousel-window {
  overflow: hidden;
  border-radius: 1.5rem;
  flex: 1;
}


.carousel-track {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  width: 100%;
}

.carousel-item {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 1.25rem;
  box-shadow: 0 12px 30px rgba(15, 29, 70, 0.12);
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-control {
  background: #0b1e51;
  color: #ffffff;
  border: none;
  border-radius: 50%;
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}

.carousel-control:hover {
  background: #14327a;
  transform: translateY(-2px);
}

.carousel-dots {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 0.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #c5cbd6;
  border: none;
  cursor: pointer;
  padding: 0;
}

.dot.active {
  background: #0b1e51;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.team-section {
  text-align: center;
  padding: 0 clamp(1.5rem, 6vw, 6rem);
}

.team-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-bottom: 2.5rem;
}

.team-header h2 {
  font-size: clamp(2rem, 1.8vw + 1.5rem, 2.8rem);
}

.team-header p {
  max-width: 760px;
  color: #3f3f3f;
  line-height: 1.7;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.75rem;
  margin-bottom: 2rem;
}

.team-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.team-avatar {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  overflow: hidden;
  background: #f2d37a;
  display: grid;
  place-items: center;
}

.team-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-card h3,
.team-card h4 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #1a1a1a;
}

.team-role {
  margin: 0;
  color: #b02a2a;
  font-weight: 600;
}

.team-button {
  background: linear-gradient(120deg, #b02a2a, #d94848);
  color: #ffffff;
  border: none;
  padding: 0.95rem 2.5rem;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.team-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(176, 42, 42, 0.35);
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(9, 17, 40, 0.7);
  display: grid;
  place-items: center;
  padding: 2rem;
  z-index: 1000;
}

.modal-panel {
  background: #ffffff;
  border-radius: 1.75rem;
  max-width: 960px;
  width: min(100%, 960px);
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 1.5rem 2rem;
  background: #f7f7fa;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-header h3 {
  margin: 0;
  font-size: 1.5rem;
}

.modal-close {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: #1a1a1a;
  cursor: pointer;
}

.modal-content {
  padding: 2rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.modal-content p {
  margin: 0;
  color: #3f3f3f;
  text-align: center;
}

.modal-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

@media (max-width: 1024px) {
  .hero-section {
    min-height: 480px;
  }

  .levels-grid {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 0.75rem;
  }

  .carousel-control {
    width: 44px;
    height: 44px;
  }
}

@media (max-width: 768px) {
  .hero-overlay {
    top: 8%;
    padding: 1.25rem 1.5rem;
  }

  .hero-subcopy {
    font-size: 1rem;
  }

  .levels-grid {
    padding-inline: clamp(1rem, 3vw, 2rem);
  }

  .pillar {
    padding: 1.75rem 1.5rem;
  }

  .team-card {
    padding: 1.75rem 1.25rem;
  }

  .modal-panel {
    border-radius: 1.25rem;
  }
}

@media (max-width: 600px) {
  .hero-section {
    min-height: 520px;
  }

  .hero-overlay {
    top: 6%;
  }

  .levels-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .carousel {
    flex-direction: column;
  }

  .carousel-control {
    order: 3;
  }

  .carousel-window {
    width: 100%;
  }

  .carousel-track {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .offer-pillars,
  .team-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

@media (max-width: 480px) {
  .levels-grid {
    grid-template-columns: 1fr;
  }

  .hero-overlay {
    padding-inline: 1rem;
  }

  .carousel-track {
    grid-template-columns: 1fr;
  }

  .pillar-icon {
    width: 72px;
    height: 72px;
    font-size: 1.6rem;
  }

  .team-avatar {
    width: 120px;
    height: 120px;
  }
}
</style>