<template>
  <section>
    <!-- Hero Image -->
    <div class="hero">
      <img :src="Hero" alt="Hero Escuela" />
      <div class="hero-text">
        <h1>Bienvenidos a la Escuela Primaria Ejemplo</h1>
        <p>
          Nuestra escuela ofrece un ambiente seguro y estimulante para el aprendizaje de los niños.
        </p>
      </div>
    </div>

    <!-- Carousel -->
    <div class="carousel">
      <button @click="prev">&#8592;</button>
      <img :src="images[current]" :alt="'Imagen '+(current+1)" />
      <button @click="next">&#8594;</button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Hero from '../assets/Hero1.png';

const images = [
  "https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&w=600",
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&w=600",
  "https://images.unsplash.com/photo-1512139219482-b7f4a2f26c1a?auto=format&fit=crop&w=600&q=80"
]
const current = ref(0)
const next = () => {
  current.value = (current.value + 1) % images.length
}
const prev = () => {
  current.value = (current.value - 1 + images.length) % images.length
}
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  max-height: 350px;
  overflow: hidden;
}
.hero img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  filter: brightness(0.7);
}
.hero-text {
  position: absolute;
  top: 30%;
  left: 10%;
  color: white;
  background: rgba(44,62,80,0.6);
  padding: 1rem 2rem;
  border-radius: 8px;
}
.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  gap: 1rem;
}
.carousel img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.15);
}
.carousel button {
  background: #2c3e50;
  color: white;
  border: none;
  font-size: 2rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
}
</style>