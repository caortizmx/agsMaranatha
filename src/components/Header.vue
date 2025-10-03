<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import LogoHeader from '../assets/LogoHeader.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/oferta-educativa', label: 'Oferta Educativa' },
  { to: '/eventos-especiales', label: 'Eventos Especiales' },
  { to: '/contacto', label: 'Contacto' },
]

const isMenuOpen = ref(false)
const route = useRoute()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false
  }
)
</script>

<template>
    <header class="site-header">
    <nav class="nav">
      <RouterLink to="/" class="brand" aria-label="Colegio Maranatha home">
        <img :src="LogoHeader" alt="Colegio Maranatha" />
      </RouterLink>

      <button
        :class="['menu-toggle', { active: isMenuOpen }]"
        type="button"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen ? 'true' : 'false'"
        aria-controls="main-navigation"
      >
        <span class="menu-toggle__label">Menu</span>
        <span class="menu-toggle__icon" aria-hidden="true"></span>
      </button>

      <ul :class="['nav-links', { open: isMenuOpen }]" id="main-navigation">
        <li v-for="link in links" :key="link.to" class="nav-item">
          <RouterLink :to="link.to" custom>
            <template #default="{ href, navigate, isExactActive }">
              <a
                :href="href"
                @click="navigate"
                :class="['nav-link', { active: isExactActive }]"
              >
                {{ link.label }}
              </a>
            </template>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  background: linear-gradient(180deg, #ffffff 0%, #f6f8ff 100%);
  box-shadow: 0 4px 15px rgba(13, 71, 161, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  padding: 1.25rem 1.5rem;
  margin: 0 auto;
  gap: 2rem;
}
.brand {
  display: inline-flex;
  align-items: center;
}

.brand img {
  max-width: min(290px, 60vw);
  height: auto;
}

.menu-toggle {
  align-items: center;
  background: transparent;
  border: 2px solid #153d8a;
  border-radius: 999px;
  color: #153d8a;
  cursor: pointer;
  display: none;
  font-size: 0.9rem;
  font-weight: 600;
  gap: 0.75rem;
  letter-spacing: 0.08em;
  padding: 0.55rem 1rem;
  text-transform: uppercase;
  transition: background 0.3s ease, color 0.3s ease;
}

.menu-toggle:hover,
.menu-toggle:focus-visible {
  background: #153d8a;
  color: #ffffff;
}

.menu-toggle__label {
  display: inline-flex;
}

.menu-toggle__icon {
  position: relative;
  width: 18px;
  height: 2px;
  background: currentColor;
  border-radius: 999px;
}

.menu-toggle__icon::before,
.menu-toggle__icon::after {
  content: '';
  position: absolute;
  left: 0;
  width: 18px;
  height: 2px;
  background: currentColor;
  border-radius: 999px;
  transition: transform 0.3s ease, top 0.3s ease, opacity 0.3s ease;
}

.menu-toggle__icon::before {
  top: -6px;
}

.menu-toggle__icon::after {
  top: 6px;
}

.menu-toggle.active .menu-toggle__icon {
  background: transparent;
}

.menu-toggle.active .menu-toggle__icon::before {
  top: 0;
  transform: rotate(45deg);
}

.menu-toggle.active .menu-toggle__icon::after {
  top: 0;
  transform: rotate(-45deg);
}
.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1.75rem;
  margin: 0;
  padding: 0;
}

.nav-item {
  position: relative;
}
.nav-link {
  color: #153d8a;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  padding-bottom: 0.35rem;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0;
  height: 3px;
  background: #c62828;
  border-radius: 2px;
  transition: width 0.3s ease, left 0.3s ease;
}

.nav-link:hover,
.nav-link:focus-visible {
  color: #c62828;
}

.nav-link:hover::after,
.nav-link:focus-visible::after {
  width: 100%;
  left: 0;
}

.nav-link.active {
  color: #c62828;
}

.nav-link.active::after {
  width: 60%;
  left: 20%;
}

@media (max-width: 1024px) {
  .nav {
    padding: 1rem;
  }

  .nav-links {
    gap: 1.25rem;
  }
}
@media (max-width: 768px) {
  .nav {
    flex-wrap: wrap;
  }

  .menu-toggle {
    display: inline-flex;
  }

  .nav-links {
    flex-basis: 100%;
    flex-direction: column;
    align-items: flex-start;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 20px 45px rgba(13, 71, 161, 0.15);
    margin-top: 1rem;
    padding: 1.25rem 1.5rem;
    position: relative;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .nav-links.open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .nav-link {
    font-size: 0.9rem;
  }

  .nav-link.active::after {
    left: 0;
    width: 80px;
  }
}
</style>