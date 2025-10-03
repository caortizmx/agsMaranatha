<script setup>
import LogoHeader from '../assets/LogoHeader.png'
</script>

<template>
  <header>
    <nav>
      <img :src="LogoHeader" alt="Logo" height="55" />
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/nosotros">Nosotros</router-link></li>
        <li><router-link to="/contacto">Contacto</router-link></li>
        <li><router-link to="/oferta-educativa">Oferta Educativa</router-link></li>
        <li><router-link to="/eventos-especiales">Eventos Especiales</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background: #2c3e50;
  color: #fff;
  padding: 1rem 0;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
}
ul {
  list-style: none;
  display: flex;
  gap: 1.2rem;
  margin: 0;
  padding: 0;
}
li {
  font-size: 1.1rem;
}
a {
  color: #fff;
  text-decoration: none;
}
a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>