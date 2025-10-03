<template>
  <footer class="footer">
    <div class="footer__content">
      <section class="footer__section footer__section--brand" aria-labelledby="footer-location">
        <div class="footer__crown" aria-hidden="true">
          <i class="fa-solid fa-crown"></i>
        </div>
        <h2 id="footer-location" class="footer__heading">Ubicación</h2>
        <address class="footer__text">
          David Alfaro Siqueiros, N° 401<br />
          Fraccionamiento Lomas de Santa Anita, 20164<br />
          Aguascalientes, Ags.
        </address>
      </section>

      <section class="footer__section" aria-labelledby="footer-contact">
        <h2 id="footer-contact" class="footer__heading">Contacto</h2>
        <ul class="footer__list">
          <li class="footer__item">
            <i class="fa-solid fa-phone"></i>
            <a href="tel:4491466009">449 146 6009</a>
          </li>
          <li class="footer__item">
            <i class="fa-solid fa-envelope"></i>
            <a href="mailto:colegiomaranathaags@hotmail.com">colegiomaranathaags@hotmail.com</a>
          </li>
        </ul>
      </section>

      <section class="footer__section" aria-labelledby="footer-social">
        <h2 id="footer-social" class="footer__heading">Síguenos en:</h2>
        <div class="footer__social">
          <a
            class="footer__social-link"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a
            class="footer__social-link"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a
            class="footer__social-link"
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
      </section>
    </div>

    <div class="footer__bottom">
      Derechos Reservados © Colegio Maranatha Aguascalientes {{ currentYear }}
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #1d3ba8 0%, #233d8d 50%, #1d3ba8 100%);
  color: #f3f5ff;
  font-family: "Montserrat", "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont,
    "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.footer__content {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2.5rem;
  padding: 3rem clamp(1.5rem, 5vw, 4rem);
  align-items: start;
}

.footer__section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer__section--brand {
  position: relative;
  padding-top: 0.5rem;
}

.footer__crown {
  font-size: clamp(2.75rem, 6vw, 3.5rem);
  color: #ffcf4a;
  margin-bottom: 0.5rem;
}

.footer__heading {
  font-size: clamp(1.1rem, 2.5vw, 1.35rem);
  font-weight: 700;
  letter-spacing: 0.03em;
}

.footer__text {
  font-style: normal;
  line-height: 1.6;
  font-size: clamp(0.95rem, 2vw, 1.05rem);
}

.footer__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.75rem;
}

.footer__item {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: clamp(0.95rem, 2vw, 1.05rem);
}

.footer__item i {
  font-size: 1.1rem;
  color: #ffcf4a;
}

.footer__item a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer__item a:hover,
.footer__item a:focus {
  color: #ffcf4a;
}

.footer__social {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.footer__social-link {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
  color: #f3f5ff;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.footer__social-link:hover,
.footer__social-link:focus {
  background-color: rgba(255, 207, 74, 0.2);
  color: #ffcf4a;
  transform: translateY(-2px);
}

.footer__bottom {
  text-align: center;
  padding: 1rem clamp(1.5rem, 5vw, 3rem) 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  font-size: 0.9rem;
  letter-spacing: 0.02em;
}

@media (max-width: 900px) {
  .footer__content {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
  }

  .footer__section--brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 600px) {
  .footer__content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer__section {
    align-items: center;
  }

  .footer__item,
  .footer__social {
    justify-content: center;
  }

  .footer__crown {
    margin-bottom: 0.25rem;
  }
}
</style>
