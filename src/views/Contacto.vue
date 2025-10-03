<template>
  <section class="contact-page">
    <div class="contact-card">
      <button class="contact-close" type="button" aria-label="Cerrar formulario">
        <i class="fa-solid fa-xmark" aria-hidden="true"></i>
      </button>
      <header class="contact-header">
        <h2 class="contact-title">¿Requiere más información?</h2>
        <p class="contact-subtitle">
          Escríbanos y nos pondremos en contacto con usted a la brevedad posible.
        </p>
      </header>
      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="contact-grid">
          <div class="contact-field">
            <label class="contact-label" for="contact-name">Nombre:</label>
            <input
              id="contact-name"
              v-model="form.name"
              type="text"
              required
              autocomplete="name"
              placeholder="Nombre completo"
              class="contact-input"
            />
          </div>
          <div class="contact-field">
            <label class="contact-label" for="contact-email">Correo:</label>
            <input
              id="contact-email"
              v-model="form.email"
              type="email"
              required
              autocomplete="email"
              placeholder="Correo electrónico"
              class="contact-input"
            />
          </div>
          <div class="contact-field">
            <label class="contact-label" for="contact-phone">Teléfono:</label>
            <input
              id="contact-phone"
              v-model="form.phone"
              type="tel"
              required
              inputmode="tel"
              pattern="\\d{10}"
              autocomplete="tel"
              placeholder="Teléfono a 10 dígitos"
              class="contact-input"
            />
          </div>
          <div class="contact-field contact-message">
            <label class="contact-label" for="contact-message">Ingrese su mensaje:</label>
            <textarea
              id="contact-message"
              v-model="form.message"
              required
              rows="6"
              placeholder="Escriba los detalles de su duda o solicitud aquí..."
              class="contact-input contact-textarea"
            ></textarea>
          </div>
        </div>
        <div class="contact-actions">
          <button class="contact-submit" type="submit">Enviar mensaje</button>
        </div>
      </form>
    </div>
  </section>
</template>
<script setup>
import { reactive } from 'vue'

const RECIPIENT_EMAIL = 'colegiomaranathaags@hotmail.com'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const handleSubmit = () => {
  const subject = encodeURIComponent('Solicitud de información')
  const bodyLines = [
    `Nombre: ${form.name}`,
    `Correo: ${form.email}`,
    `Teléfono: ${form.phone}`,
    '',
    form.message,
  ]
  const body = encodeURIComponent(bodyLines.join('\n'))
  window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`
}
</script>

<style scoped>
.contact-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 220px);
  background: linear-gradient(180deg, #f8f8f8 0%, #f1f1f1 100%);
}

.contact-card {
  position: relative;
  width: min(960px, 100%);
  background: #ffffff;
  border-radius: 18px;
  padding: clamp(1.5rem, 3vw, 3rem);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
}

.contact-close {
  position: absolute;
  top: clamp(0.75rem, 2vw, 1.5rem);
  right: clamp(0.75rem, 2vw, 1.5rem);
  border: none;
  background: transparent;
  color: #da1a32;
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.contact-close:focus-visible {
  outline: 3px solid rgba(218, 26, 50, 0.35);
  outline-offset: 4px;
}

.contact-close:hover {
  transform: scale(1.05);
  opacity: 0.8;
}

.contact-header {
  text-align: center;
  margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
}

.contact-title {
  margin: 0 0 0.75rem;
  font-size: clamp(1.6rem, 3.2vw, 2.25rem);
  font-weight: 700;
  color: #333333;
}

.contact-subtitle {
  margin: 0;
  font-size: clamp(1rem, 2.5vw, 1.125rem);
  color: #6b6b6b;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 3vw, 2rem);
}

.contact-grid {
  display: grid;
  gap: clamp(1rem, 2vw, 1.5rem);
}

.contact-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact-label {
  font-weight: 600;
  font-size: 0.95rem;
  color: #444444;
}

.contact-input {
  padding: 0.85rem 1rem;
  border: 2px solid #da1a32;
  border-radius: 12px;
  font-size: 1rem;
  color: #2c2c2c;
  background-color: #fff;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
}

.contact-input::placeholder {
  color: #da1a32;
  opacity: 0.65;
}

.contact-input:focus {
  outline: none;
  border-color: #b81327;
  box-shadow: 0 0 0 3px rgba(218, 26, 50, 0.15);
}

.contact-textarea {
  resize: vertical;
}

.contact-actions {
  display: flex;
  justify-content: flex-end;
}

.contact-submit {
  padding: 0.85rem 2.75rem;
  border: none;
  border-radius: 999px;
  background: linear-gradient(90deg, #da1a32 0%, #f04d4f 100%);
  color: #ffffff;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 8px 16px rgba(218, 26, 50, 0.25);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.contact-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(218, 26, 50, 0.3);
}

.contact-submit:focus-visible {
  outline: 3px solid rgba(218, 26, 50, 0.35);
  outline-offset: 4px;
}

@media (min-width: 768px) {
  .contact-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .contact-message {
    grid-column: span 2;
  }
}

@media (min-width: 960px) {
  .contact-grid {
    grid-template-columns: 320px 1fr;
    align-items: start;
  }

  .contact-field:nth-child(-n + 3) {
    grid-column: 1 / 2;
  }

  .contact-message {
    grid-column: 2 / 3;
    grid-row: 1 / span 3;
    height: 100%;
  }

  .contact-textarea {
    height: 100%;
  }
}

@media (max-width: 480px) {
  .contact-close {
    font-size: 1.35rem;
  }

  .contact-submit {
    width: 100%;
  }
}
</style>