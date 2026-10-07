// mobile menu
(function(){
  var b=document.getElementById('burger'),m=document.getElementById('mnav');
  b.addEventListener('click',function(){var o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!o));m.hidden=o;});
  m.addEventListener('click',function(e){if(e.target.tagName==='A'){b.setAttribute('aria-expanded','false');m.hidden=true;}});
})();

// scroll progress + back to top
(function(){
  var p=document.getElementById('progress'),t=document.getElementById('totop');
  function on(){var h=document.documentElement,max=h.scrollHeight-h.clientHeight,y=h.scrollTop||document.body.scrollTop;
    p.style.transform='scaleX('+(max>0?y/max:0)+')';t.classList.toggle('show',y>600);}
  addEventListener('scroll',on,{passive:true});on();
  t.addEventListener('click',function(){scrollTo({top:0,behavior:'smooth'})});
})();

// typing effect
(function(){
  var el=document.getElementById('tw');
  var words=['kubectl apply -f portfolio.yaml','docker compose up -d','ansible-playbook deploy.yml','git push origin main','nmap -sV cible.local'];
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce){el.textContent=words[0];return;}
  var w=0,i=0,del=false;
  (function tick(){
    var cur=words[w];
    el.textContent=cur.slice(0,i);
    if(!del&&i<cur.length){i++;setTimeout(tick,55);}
    else if(!del){del=true;setTimeout(tick,1600);}
    else if(i>0){i--;setTimeout(tick,25);}
    else{del=false;w=(w+1)%words.length;setTimeout(tick,300);}
  })();
})();

// reveal on scroll (only for elements below the fold, so the page is complete at rest)
(function(){
  var els=[].slice.call(document.querySelectorAll('.rv'));
  if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var groups=new Map();
  els.forEach(function(el){var k=el.parentNode;var n=groups.get(k)||0;el.style.setProperty('--d',(Math.min(n,5)*0.08)+'s');groups.set(k,n+1);});
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.remove('pre');io.unobserve(e.target);}})},{threshold:.12});
  els.forEach(function(el){if(el.getBoundingClientRect().top>innerHeight){el.classList.add('pre');io.observe(el);}});
})();

// copy buttons
document.querySelectorAll('.copy').forEach(function(b){
  b.addEventListener('click',function(){
    var el=document.getElementById(b.dataset.target), txt=el.textContent.trim();
    function done(){b.textContent='Copié ✓';setTimeout(function(){b.textContent='Copier'},1600)}
    function fallback(){var r=document.createRange();r.selectNodeContents(el);var s=getSelection();s.removeAllRanges();s.addRange(r);b.textContent='Sélectionné'}
    try{navigator.clipboard.writeText(txt).then(done,fallback)}catch(e){fallback()}
  });
});

// contact form (Netlify Forms when hosted on Netlify)
(function(){
  var f=document.getElementById('contact-form'), st=document.getElementById('form-status');
  f.addEventListener('submit',function(e){
    e.preventDefault();
    st.className='';
    var name=f.nom.value.trim(), mail=f.email.value.trim(), msg=f.message.value.trim();
    if(!name||!msg||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)){
      st.className='err';st.textContent='Renseignez votre nom, un email valide et un message.';return;
    }
    if(!/netlify\.app$/.test(location.hostname) && !f.dataset.live){
      st.className='ok';st.textContent='Aperçu : le formulaire enverra les messages une fois le site en ligne sur Netlify.';return;
    }
    var body=new URLSearchParams(new FormData(f)).toString();
    st.textContent='Envoi en cours…';
    fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:body})
      .then(function(r){if(!r.ok)throw 0;st.className='ok';st.textContent='Merci ! Votre message a bien été envoyé.';f.reset();})
      .catch(function(){st.className='err';st.textContent="L'envoi a échoué. Écrivez-moi directement à ladji.karamoko@epitech.eu.";});
  });
})();

// active nav link
(function(){
  var links=[].slice.call(document.querySelectorAll('.nav a.l'));
  if(!('IntersectionObserver' in window))return;
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(l){l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});
  links.forEach(function(l){var s=document.querySelector(l.getAttribute('href'));if(s)io.observe(s)});
})();
