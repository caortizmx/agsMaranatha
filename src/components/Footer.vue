<template>
  <footer class="footer">
    <div class="footer__content">
      <section class="footer__section footer__section--brand" aria-labelledby="footer-logo">
        <div class="footer__crown" aria-hidden="true">
            <img src="../assets/CoronaFooter.png" alt="Crown Icon" />
        </div>
      </section>

      <section class="footer__section footer__section--brand" aria-labelledby="footer-location">
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
            <span class="footer__icon" aria-hidden="true">
              <svg viewBox="0 0 16 16" role="img" focusable="false">
                <path
                  fill="currentColor"
                  d="M2.25 3C2.25 2.172 2.922 1.5 3.75 1.5h2.25c.621 0 1.125.504 1.125 1.125V4.5c0 .621-.504 1.125-1.125 1.125H5.25a8.25 8.25 0 0 0 5.625 5.625h1.875c.621 0 1.125.504 1.125 1.125v2.25c0 .828-.672 1.5-1.5 1.5h-.75A11.25 11.25 0 0 1 2.25 3Z"
                />
              </svg>
            </span>
            <a href="tel:4491466009">449 146 6009</a>
          </li>
          <li class="footer__item">
            <span class="footer__icon" aria-hidden="true">
              <svg viewBox="0 0 20 20" role="img" focusable="false">
                <path
                  fill="currentColor"
                  d="M3.75 4.5h12.5A1.75 1.75 0 0 1 18 6.25v7.5A1.75 1.75 0 0 1 16.25 15.5H3.75A1.75 1.75 0 0 1 2 13.75v-7.5A1.75 1.75 0 0 1 3.75 4.5Zm0 1.5a.25.25 0 0 0-.25.25v.142l6.186 4.34a.75.75 0 0 0 .828 0L16.75 6.392V6.25a.25.25 0 0 0-.25-.25H3.75Zm12.5 8.25a.25.25 0 0 0 .25-.25V8.322l-5.53 3.881a2.25 2.25 0 0 1-2.44 0L3 8.322V14a.25.25 0 0 0 .25.25h12.5Z"
                />
              </svg>
            </span>
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
            <span class="footer__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path
                  fill="currentColor"
                  d="M15 3h2.25A.75.75 0 0 1 18 3.75v2.5a.75.75 0 0 1-.75.75H15v2.5h2.25a.75.75 0 0 1 .74.92l-.5 2.5a.75.75 0 0 1-.74.58H15V21.5a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75V13.5H8.25a.75.75 0 0 1-.75-.75v-2.5A.75.75 0 0 1 8.25 9.5H10.5V7a4 4 0 0 1 4-4Z"
                />
              </svg>
            </span>
          </a>
          <a
            class="footer__social-link"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <span class="footer__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path
                  fill="currentColor"
                  d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5.25-.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z"
                />
              </svg>
            </span>
          </a>
          <a
            class="footer__social-link"
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <span class="footer__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path
                  fill="currentColor"
                  d="M4.75 6A2.75 2.75 0 0 0 2 8.75v6.5A2.75 2.75 0 0 0 4.75 18h14.5A2.75 2.75 0 0 0 22 15.25v-6.5A2.75 2.75 0 0 0 19.25 6H4.75Zm6.83 3.42 3.75 2.25a.75.75 0 0 1 0 1.26l-3.75 2.25a.75.75 0 0 1-1.14-.63v-4.5a.75.75 0 0 1 1.14-.63Z"
                />
              </svg>
            </span>
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
  grid-template-columns: repeat(4, minmax(0, 1fr));
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

.footer__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  color: #ffcf4a;
}

.footer__icon svg {
  width: 100%;
  height: 100%;
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
background-color: white;
  text-align: center;
  padding: 1rem clamp(1.5rem, 5vw, 3rem) 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  font-size: 0.9rem;
  letter-spacing: 0.02em;
  color: black;
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