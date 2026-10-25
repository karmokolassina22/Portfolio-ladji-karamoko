// ===================== NAVIGATION ENTRE LES PAGES =====================
// Une seule section .page est visible à la fois, selon l'ancre de l'URL (#about, #contact…)
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('[data-page]');
const burger = document.getElementById('burger');
const mnav = document.getElementById('mnav');

function showPage(id) {
  if (!document.getElementById(id)) id = 'accueil';
  pages.forEach(p => p.classList.toggle('active', p.id === id));
  // lien actif dans le menu ordinateur et dans le menu mobile
  document.querySelectorAll('.nav a.l, #mnav a').forEach(l => {
    const on = l.dataset.page === id;
    l.classList.toggle('on', on);
    if (on) l.setAttribute('aria-current', 'page'); else l.removeAttribute('aria-current');
  });
  window.scrollTo({ top: 0 });
  // ferme le menu mobile
  burger.setAttribute('aria-expanded', 'false');
  mnav.hidden = true;
}

window.addEventListener('hashchange', () => showPage(location.hash.slice(1)));
showPage(location.hash.slice(1) || 'accueil');

// « Engagez-moi » : ouvre la page Contact directement sur le formulaire
document.querySelectorAll('[data-form]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    history.pushState(null, '', '#contact');
    showPage('contact');
    const form = document.getElementById('contact-form');
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // sur téléphone on évite d'ouvrir le clavier d'office
    if (matchMedia('(pointer: fine)').matches) document.getElementById('f-name').focus({ preventScroll: true });
  });
});

// ===================== MENU MOBILE =====================
burger.addEventListener('click', () => {
  const open = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', String(!open));
  mnav.hidden = open;
});

// ===================== EFFET DE FRAPPE =====================
(function () {
  const el = document.getElementById('tw');
  const words = ['kubectl apply -f portfolio.yaml', 'docker compose up -d', 'ansible-playbook deploy.yml', 'git push origin main', 'nmap -sV cible.local'];
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = words[0]; return; }
  let w = 0, i = 0, del = false;
  (function tick() {
    const cur = words[w];
    el.textContent = cur.slice(0, i);
    if (!del && i < cur.length) { i++; setTimeout(tick, 55); }
    else if (!del) { del = true; setTimeout(tick, 1600); }
    else if (i > 0) { i--; setTimeout(tick, 25); }
    else { del = false; w = (w + 1) % words.length; setTimeout(tick, 300); }
  })();
})();

// ===================== ONGLETS « MON PARCOURS » =====================
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => {
      t.classList.toggle('on', t === tab);
      t.setAttribute('aria-selected', String(t === tab));
    });
    document.getElementById('tab-etudes').hidden = tab.dataset.tab !== 'etudes';
    document.getElementById('tab-experiences').hidden = tab.dataset.tab !== 'experiences';
  });
});

// ===================== FILTRES « MES RÉALISATIONS » =====================
document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.toggle('on', b === btn));
    const f = btn.dataset.filter;
    document.querySelectorAll('.proj').forEach(p => p.classList.toggle('hide', f !== 'all' && p.dataset.cat !== f));
  });
});

// ===================== FORMULAIRE (Web3Forms) =====================
// Clé gratuite à obtenir sur https://web3forms.com : les messages arrivent dans votre boîte mail.
// Cette clé est faite pour être publique, elle peut rester dans le code.
const WEB3FORMS_KEY = '508d3493-20b9-4aa2-b926-1ba3b3157465';

(function () {
  const f = document.getElementById('contact-form');
  const st = document.getElementById('form-status');
  f.addEventListener('submit', e => {
    e.preventDefault();
    st.className = '';
    const name = f.nom.value.trim(), mail = f.email.value.trim(), msg = f.message.value.trim();
    if (!name || !msg || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
      st.className = 'err';
      st.textContent = 'Renseignez votre nom, un email valide et un message.';
      return;
    }
    // champ piège rempli = robot : on fait semblant que tout s'est bien passé
    if (f['bot-field'].value) { st.className = 'ok'; st.textContent = 'Merci ! Votre message a bien été envoyé.'; f.reset(); return; }
    st.textContent = 'Envoi en cours…';
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: 'Nouveau message depuis le portfolio',
        from_name: 'Portfolio Ladji Karamoko',
        name, email: mail, message: msg
      })
    })
      .then(r => r.json())
      .then(res => { if (!res.success) throw res.message; st.className = 'ok'; st.textContent = 'Merci ! Votre message a bien été envoyé.'; f.reset(); })
      .catch(err => { console.error('Envoi du formulaire échoué :', err); st.className = 'err'; st.textContent = "L'envoi a échoué. Écrivez-moi à ladji.karamoko@epitech.eu."; });
  });
})();
