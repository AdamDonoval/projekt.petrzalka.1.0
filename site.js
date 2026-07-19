/* ============================================================
   PETRŽALKA ŠPORTUJE — zdieľaná navigácia + footer
   ============================================================
   Tento súbor je JEDINÝ zdroj pravdy pre hornú lištu a footer.
   Každá stránka ho načíta cez <script src="...site.js" defer>
   a lišta + footer sa vykreslia automaticky (vrátane štýlov).
   Zmena tu = zmena na každej jednej stránke.
   ============================================================ */
(function () {
  // Prefix ciest podľa hĺbky stránky (podstránky v /sporty/ potrebujú ../)
  var P = location.pathname.indexOf('/sporty/') !== -1 ? '../' : '';
  var file = location.pathname.split('/').pop() || 'index.html';
  var inSporty = location.pathname.indexOf('/sporty/') !== -1;

  function activeCls(key) {
    if (key === 'domov' && !inSporty && (file === 'index.html' || file === '')) return ' class="active"';
    if (key === 'sporty' && inSporty) return ' class="active"';
    if (key === 'zariadenia' && file === 'sportoviska.html') return ' class="active"';
    return '';
  }

  // Prihlaseny pouzivatel (nastavuje auth.html do localStorage 'ps_user')
  var user = null;
  try { user = JSON.parse(localStorage.getItem('ps_user') || 'null'); } catch (e) {}
  var authBtn = user
    ? '<a href="' + P + 'auth.html" class="btn btn-outline">Môj profil</a>'
    : '<a href="' + P + 'auth.html" class="btn btn-outline">Prihlásiť sa</a>';

  var NAV = '' +
'<nav class="nav">\n' +
'  <a href="' + P + 'index.html" class="nav-logo">\n' +
'    <div class="nav-logo-mark" style="overflow:hidden;padding:0;">\n' +
'      <img src="' + P + 'assets/logo.jpg" alt="Petržalka športuje" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:8px;">\n' +
'    </div>\n' +
'    <span class="nav-logo-text">Petržalka športuje</span>\n' +
'  </a>\n' +
'  <ul class="nav-links">\n' +
'    <li><a href="' + P + 'index.html"' + activeCls('domov') + '>Domov</a></li>\n' +
'    <li><a href="' + P + 'index.html#sporty"' + activeCls('sporty') + '>Športy</a></li>\n' +
'    <li><a href="' + P + 'sportoviska.html"' + activeCls('zariadenia') + '>Zariadenia</a></li>\n' +
'    <li><a href="' + P + 'index.html#komunita">Komunita</a></li>\n' +
'    <li><a href="' + P + 'index.html#faq">FAQ</a></li>\n' +
'  </ul>\n' +
'  <div class="nav-right">\n' +
'    ' + authBtn + '\n' +
'    <a href="' + P + 'kosik.html" id="navCartBtn" style="position:relative;display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border-radius:8px;border:1.5px solid var(--border,#e5e9e5);font-size:14px;font-weight:600;color:#0f1a13;transition:all .15s;text-decoration:none;">\n' +
'      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>\n' +
'      <span class="nav-cart-text">Košík</span>\n' +
'      <span id="navCartBadge" style="display:none;position:absolute;top:-6px;right:-6px;background:#2d7a4f;color:#fff;border-radius:99px;font-size:10px;font-weight:700;min-width:18px;height:18px;align-items:center;justify-content:center;padding:0 4px;"></span>\n' +
'    </a>\n' +
'  </div>\n' +
'</nav>';

  var FOOTER = '' +
'<footer>\n' +
'  <div class="footer-top">\n' +
'    <div class="footer-brand">\n' +
'      <a href="https://petrzalkasportuje.sk" target="_blank">\n' +
'        <img src="https://petrzalkasportuje.sk/wp-content/uploads/2024/02/petrzalka_sportuje_logo_2024_horizontal_white-small.png" alt="Petržalka športuje logo">\n' +
'      </a>\n' +
'    </div>\n' +
'    <div>\n' +
'      <h4>Pre zákazníkov</h4>\n' +
'      <ul>\n' +
'        <li><a href="https://petrzalkasportuje.sk/gdpr/" target="_blank">Spracovanie osobných údajov</a></li>\n' +
'        <li><a href="https://petrzalkasportuje.sk/obchodne-podmienky/" target="_blank">Všeobecné obchodné podmienky</a></li>\n' +
'        <li><a href="https://petrzalkasportuje.sk/faq/" target="_blank">FAQ – Najčastejšie otázky</a></li>\n' +
'        <li><a href="https://petrzalkasportuje.sk/mapa-stranok" target="_blank">Mapa stránok</a></li>\n' +
'        <li><a href="https://petrzalkasportuje.sk/kontakty/" target="_blank">Kontakty</a></li>\n' +
'        <li><a href="https://petrzalkasportuje.sk/zamestnanecka-zona/" target="_blank">Zamestnanecká zóna</a></li>\n' +
'      </ul>\n' +
'    </div>\n' +
'    <div>\n' +
'      <h4>Kontakt</h4>\n' +
'      <div class="footer-contact-label">Adresa</div>\n' +
'      <div class="footer-contact-val">Kutlíkova 17, 851 02 Bratislava</div>\n' +
'      <div class="footer-contact-label">E-mail</div>\n' +
'      <div class="footer-contact-val"><a href="mailto:info@petrzalkasportuje.sk">info@petrzalkasportuje.sk</a></div>\n' +
'      <div class="footer-contact-label" style="margin-bottom:10px;">Sledujte nás</div>\n' +
'      <div class="footer-socials">\n' +
'        <a href="https://www.facebook.com/petrzalkasportuje" target="_blank" rel="noopener" title="Facebook">\n' +
'          <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>\n' +
'        </a>\n' +
'        <a href="https://www.instagram.com/petrzalkasportuje" target="_blank" rel="noopener" title="Instagram">\n' +
'          <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="#0f1a13"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#0f1a13" stroke-width="2" stroke-linecap="round"/></svg>\n' +
'        </a>\n' +
'        <a href="https://youtube.com/@bratislavapetrzalka" target="_blank" rel="noopener" title="YouTube">\n' +
'          <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0f1a13"/></svg>\n' +
'        </a>\n' +
'        <a href="https://www.linkedin.com/company/bratislavapetrzalka/" target="_blank" rel="noopener" title="LinkedIn">\n' +
'          <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>\n' +
'        </a>\n' +
'      </div>\n' +
'    </div>\n' +
'    <div>\n' +
'      <h4>Ohodnoťte nás</h4>\n' +
'      <div class="footer-reviews">\n' +
'        <a href="https://g.page/r/Cejl3xKjiNCHEAE/review" target="_blank" rel="nofollow">\n' +
'          <img src="https://petrzalkasportuje.sk/wp-content/uploads/2024/04/google-reviews.png" alt="Google reviews">\n' +
'        </a>\n' +
'      </div>\n' +
'    </div>\n' +
'  </div>\n' +
'  <div class="footer-bottom">\n' +
'    <span>© 2026 Petržalka športuje. Všetky práva vyhradené.</span>\n' +
'    <span>Mestská časť Petržalka</span>\n' +
'  </div>\n' +
'</footer>';

  // Štýly lišty a footera — cestujú spolu s komponentmi, netreba ich mať v CSS stránok
  var CSS = '' +
'.nav{position:sticky;top:0;z-index:200;background:#fff;border-bottom:1px solid var(--border,#e5e9e5);display:flex;align-items:center;height:64px;padding:0 clamp(20px,4vw,60px);gap:32px;}' +
'.nav a{text-decoration:none;color:inherit;}' +
'.nav-logo{display:flex;align-items:center;gap:10px;font-weight:800;font-size:15px;letter-spacing:-.02em;flex-shrink:0;color:#0f1a13;}' +
'.nav-logo-mark{width:34px;height:34px;background:var(--green,#2d7a4f);border-radius:8px;display:grid;place-items:center;flex-shrink:0;}' +
'.nav-links{display:flex;gap:4px;list-style:none;margin:0 0 0 8px;padding:0;}' +
'.nav-links a{font-size:14px;font-weight:500;color:var(--muted,#7a8a7a);padding:6px 12px;border-radius:6px;transition:all .15s;white-space:nowrap;}' +
'.nav-links a:hover{color:#0f1a13;background:#f5f5f3}' +
'.nav-links a.active{color:#0f1a13;font-weight:600}' +
'.nav-right{margin-left:auto;display:flex;align-items:center;gap:8px}' +
'.nav .btn{display:inline-flex;align-items:center;gap:6px;border-radius:8px;font-size:14px;font-weight:600;padding:9px 18px;border:none;transition:all .15s;cursor:pointer;font-family:inherit;line-height:normal;white-space:nowrap;}' +
'.nav .btn-primary{background:var(--green,#2d7a4f);color:#fff}' +
'.nav .btn-primary:hover{background:var(--green2,#238a45)}' +
'.nav .btn-outline{background:none;color:#0f1a13;border:1.5px solid var(--border,#e5e9e5)}' +
'.nav .btn-outline:hover{border-color:#999;background:#f9f9f7}' +
'footer{background:#0f1a13;color:#fff;padding:64px clamp(20px,4vw,60px) 32px;}' +
'.footer-top{display:grid;grid-template-columns:1.4fr 1.2fr 1fr 0.8fr;gap:48px;margin-bottom:40px;padding-bottom:40px;border-bottom:1px solid rgba(255,255,255,.1);}' +
'.footer-brand img{max-width:180px;height:auto;display:block;margin-bottom:0;}' +
'footer h4{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.45);margin-bottom:16px;}' +
'footer ul{list-style:none;margin:0;padding:0;}' +
'footer ul li{margin-bottom:10px;}' +
'footer ul a{font-size:14px;color:rgba(255,255,255,.6);transition:color .15s;text-decoration:none;}' +
'footer ul a:hover{color:#fff}' +
'.footer-contact-label{font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.35);margin-bottom:4px;}' +
'.footer-contact-val{font-size:14px;color:rgba(255,255,255,.6);margin-bottom:14px;}' +
'.footer-contact-val a{color:rgba(255,255,255,.6);text-decoration:none;}' +
'.footer-contact-val a:hover{color:#fff;}' +
'.footer-socials{display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap;}' +
'.footer-socials a{width:34px;height:34px;border-radius:8px;background:rgba(255,255,255,.1);display:grid;place-items:center;transition:background .15s;text-decoration:none;}' +
'.footer-socials a:hover{background:rgba(255,255,255,.22);}' +
'.footer-socials svg{width:16px;height:16px;fill:#fff;}' +
'.footer-reviews img{max-width:130px;height:auto;}' +
'.footer-bottom{display:flex;justify-content:space-between;font-size:13px;color:rgba(255,255,255,.3);flex-wrap:wrap;gap:8px;}' +
'@media(max-width:1100px){.footer-top{grid-template-columns:1fr 1fr;gap:32px}.nav-links{display:none}}' +
'@media(max-width:768px){.footer-top{grid-template-columns:1fr;gap:28px}footer{padding:48px 20px 24px}}';

  function mount() {
    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    var oldNav = document.querySelector('nav.nav');
    if (oldNav) { oldNav.outerHTML = NAV; }
    else { document.body.insertAdjacentHTML('afterbegin', NAV); }

    var oldFooter = document.querySelector('footer');
    if (oldFooter) { oldFooter.outerHTML = FOOTER; }
    else { document.body.insertAdjacentHTML('beforeend', FOOTER); }

    // Počítadlo košíka
    try {
      var c = JSON.parse(localStorage.getItem('ps_cart') || '[]');
      var b = document.getElementById('navCartBadge');
      if (b && c.length > 0) { b.style.display = 'inline-flex'; b.textContent = c.length; }
    } catch (e) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
