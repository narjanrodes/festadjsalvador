document.addEventListener('DOMContentLoaded', () => {

  /* Ano no rodapé */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Menu hamburger (mobile) */
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('main-nav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* Lightbox da galeria */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  document.querySelectorAll('.gallery-item[data-full]').forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-full');
      const alt = item.querySelector('img')?.getAttribute('alt') || '';
      lightboxImg.setAttribute('src', src);
      lightboxImg.setAttribute('alt', alt);
      lightbox.hidden = false;
    });
  });

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.setAttribute('src', '');
  }
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && !lightbox.hidden) closeLightbox();
  });

  /* Formulário de orçamento -> WhatsApp */
  const form = document.getElementById('orcamentoForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const get = (k) => (data.get(k) || '').toString().trim();

      const linhas = [
        'Olá! Vim pelo site da Festa DJ Salvador e gostaria de solicitar um orçamento.',
        '',
        `Nome: ${get('nome')}`,
        `WhatsApp: ${get('whatsapp')}`,
        get('email') ? `E-mail: ${get('email')}` : null,
        `Tipo de evento: ${get('tipoEvento')}`,
        `Kit de interesse: ${get('kitInteresse')}`,
        get('data') ? `Data: ${get('data')}` : null,
        get('horario') ? `Horário: ${get('horario')}` : null,
        get('local') ? `Local: ${get('local')}` : null,
        get('convidados') ? `Convidados: ${get('convidados')}` : null,
        get('adicionais') ? `Serviços adicionais: ${get('adicionais')}` : null,
        get('mensagem') ? `Mensagem: ${get('mensagem')}` : null,
      ].filter(Boolean).join('\n');

      const url = `https://wa.me/5571982285062?text=${encodeURIComponent(linhas)}`;

      /* Evento de conversão (GA4) — ativo quando o gtag estiver configurado no <head> */
      if (typeof gtag === 'function') {
        gtag('event', 'generate_lead', { method: 'formulario_orcamento' });
      }

      window.open(url, '_blank', 'noopener');
    });
  }

  /* Eventos de clique (WhatsApp, Instagram, Facebook, e-mail, kits, orçamento) */
  document.querySelectorAll('[data-track]').forEach(el => {
    el.addEventListener('click', () => {
      const label = el.getAttribute('data-track');
      if (typeof gtag === 'function') {
        gtag('event', 'click', { link_id: label });
      }
    });
  });

});
