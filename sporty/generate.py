import os

NAV = '''<nav class="nav">
  <a href="../index.html" class="nav-logo">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="6" fill="currentColor" opacity=".12"/><circle cx="14" cy="10" r="3" fill="currentColor"/><path d="M8 22c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/></svg>
    Mesto športuje
  </a>
  <ul class="nav-links">
    <li><a href="../index.html#sporty">Športy</a></li>
    <li><a href="../index.html#komunita">Komunita</a></li>
    <li><a href="../index.html#faq">FAQ</a></li>
  </ul>
  <div class="nav-right">
    <button class="btn btn-ghost">Prihlásiť sa</button>
    <button class="btn btn-primary">Rezervovať</button>
  </div>
</nav>'''

FOOTER = '''<footer><div class="footer-brand">Mesto športuje</div><div class="footer-copy">© 2026 Mesto športuje. Všetky práva vyhradené.</div></footer>'''

def fac(name, tag, img, addr, hours, price, free=False):
    price_html = 'Zadarmo' if free else f'od {price} € <span>/ vstup</span>'
    book = 'Detail' if free else 'Rezervovať'
    return f'''
    <div class="fac-card">
      <div class="fac-img"><img src="../assets/{img}" alt="{name}"/><span class="fac-tag">{tag}</span></div>
      <div class="fac-body">
        <div class="fac-name">{name}</div>
        <div class="fac-meta">
          <div class="fac-meta-row"><svg viewBox="0 0 14 14" fill="none"><path d="M7 1.5A4 4 0 0 1 11 5.5c0 2.5-4 7-4 7S3 8 3 5.5a4 4 0 0 1 4-4z" stroke="currentColor" stroke-width="1.4"/><circle cx="7" cy="5.5" r="1.2" stroke="currentColor" stroke-width="1.2"/></svg>{addr}</div>
          <div class="fac-meta-row"><svg viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5" stroke="currentColor" stroke-width="1.4"/><path d="M7 4v3l2 2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>{hours}</div>
        </div>
        <div class="fac-footer"><div class="fac-price">{price_html}</div><a href="#" class="fac-book">{book}</a></div>
      </div>
    </div>'''

def empty():
    return '<div class="empty-state"><h3>Zariadenia sa dopĺňajú</h3><p>Pre tento šport postupne pridávame zoznam športovísk v Petržalke.</p></div>'

sports = [
    ('beh', 'Beh', 'Trate, skupiny a bežecké podujatia v Petržalke',
     '<svg viewBox="0 0 40 40" fill="none"><circle cx="27" cy="8" r="3.5" stroke="currentColor" stroke-width="2.5"/><path d="M23 13l-5 8 3 3-3 9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 21l-5 3" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>',
     [fac('Park Sad Janka Kráľa', 'Bežecká trasa', 'cat-beh.jpg', 'Sad Janka Kráľa, Petržalka', 'Voľný prístup, 24 hodín', 0, True),
      fac('Nábrežná cyklotrasa', 'Trasa', 'cat-bicykel.jpg', 'Nábrežie, Petržalka', 'Voľný prístup', 0, True)]),

    ('bicyklovanie', 'Bicyklovanie', 'Cyklotrasy, požičovne a BMX parky v Petržalke',
     '<svg viewBox="0 0 40 40" fill="none"><circle cx="10" cy="28" r="7" stroke="currentColor" stroke-width="2.5"/><circle cx="30" cy="28" r="7" stroke="currentColor" stroke-width="2.5"/><path d="M10 28l10-14 10 14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="28" cy="10" r="3" stroke="currentColor" stroke-width="2.5"/></svg>',
     [fac('Cyklotrasa Petržalka–centrum', 'Cyklotrasa', 'cat-bicykel.jpg', 'Nábrežná cesta, Petržalka', 'Voľný prístup', 0, True)]),

    ('fitness', 'Fitness', 'Posilňovne a skupinové tréningy v Petržalke',
     '<svg viewBox="0 0 40 40" fill="none"><path d="M6 20h4M30 20h4M10 20h20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><rect x="10" y="14" width="4" height="12" rx="2" stroke="currentColor" stroke-width="2.5"/><rect x="26" y="14" width="4" height="12" rx="2" stroke="currentColor" stroke-width="2.5"/></svg>',
     [fac('Športová hala Prokofievova', 'Hala', 'b1.jpg', 'Prokofievova, Petržalka', 'Po–Pi 7:00–22:00, So–Ne 8:00–20:00', 5),
      fac('Športová hala Pankúchova', 'Hala', 'b2.jpg', 'Pankúchova, Petržalka', 'Po–Pi 8:00–21:00', 5)]),

    ('yoga', 'Yoga a pilates', 'Rovnováha, mobilita a skupinové hodiny v Petržalke',
     '<svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="8" r="4" stroke="currentColor" stroke-width="2.5"/><path d="M12 20c4-8 12-8 16 0" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M8 32c3-6 7-9 12-9s9 3 12 9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>',
     [empty()]),

    ('tenis', 'Tenis', 'Tenisové kurty, tréningy a turnaje v Petržalke',
     '<svg viewBox="0 0 40 40" fill="none"><path d="M8 8l6 6M26 26l6 6M8 32l6-6M26 14l6-6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><ellipse cx="20" cy="20" rx="8" ry="8" stroke="currentColor" stroke-width="2.5"/></svg>',
     [empty()]),

    ('loptove', 'Loptové športy', 'Futbal, basketbal, volejbal a florbal v Petržalke',
     '<svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="14" stroke="currentColor" stroke-width="2.5"/><path d="M20 6l4 6-4 4-4-4 4-6zM6 20l6-4 4 4-4 4-6-4zM34 20l-6-4-4 4 4 4 6-4zM14 30l2-6h8l2 6" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
     [fac('Futbalové ihrisko Prokofievova', 'Futbal', 'cat-loptove.jpg', 'Prokofievova, Petržalka', 'Po–Ne 8:00–21:00', 5),
      fac('Streetball Námestie hraničiarov', 'Basketbal', 'cat-loptove.jpg', 'Námestie hraničiarov, Petržalka', 'Voľný prístup', 0, True)]),

    ('tanec', 'Tanec', 'Tanečné kurzy, krúžky a vystúpenia v Petržalke',
     '<svg viewBox="0 0 40 40" fill="none"><path d="M20 6v12M14 12h12M12 20l8 14 8-14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
     [fac('Tanečné sály Hrobákova', 'Tanečná sála', 'b3.jpg', 'Hrobákova, Petržalka', 'Rekonštrukcia – čoskoro otvorené', 0, True)]),

    ('atletika', 'Atletika', 'Atletické dráhy, tréningy a závody v Petržalke',
     '<svg viewBox="0 0 40 40" fill="none"><path d="M8 32h24M8 32l7-18 5 10 5-10 7 18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
     [empty()]),

    ('zimne', 'Zimné športy', 'Korčuľovanie, hokej a zimné aktivity v Petržalke',
     '<svg viewBox="0 0 40 40" fill="none"><path d="M8 30h24M12 30l-2 4M28 30l2 4M20 6v16M14 12l6-6 6 6M10 22h20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
     [fac('Aréna Draždiak', 'Zimný štadión', 'cat-korculovanie.jpg', 'Draždiak, Petržalka', 'Október–Marec  8:00–21:00', 6),
      fac('Klzisko centrum Petržalka', 'Klzisko', 'cat-hokej.jpg', 'Kutlíkova, Petržalka', 'December–Február', 4)]),

    ('bojove', 'Bojové športy', 'Tréningy, kluby a súťaže v Petržalke',
     '<svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="10" r="4" stroke="currentColor" stroke-width="2.5"/><path d="M13 18h14l-3 14H16l-3-14z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><path d="M16 18l-4-4M24 18l4-4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>',
     [empty()]),

    ('lezenie', 'Lezenie', 'Bouldering, lezecké steny a krúžky v Petržalke',
     '<svg viewBox="0 0 40 40" fill="none"><path d="M16 34V20a6 6 0 0 1 12 0v4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M10 26l6-6 4 4 6-8" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="28" cy="10" r="3.5" stroke="currentColor" stroke-width="2.5"/></svg>',
     [empty()]),
]

for slug, name, desc, icon, facs in sports:
    facs_html = '\n'.join(facs)
    html = f'''<!DOCTYPE html>
<html lang="sk">
<head>
<meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>{name} – Mesto športuje</title>
<link rel="stylesheet" href="sport.css"/>
</head>
<body>
{NAV}
<div class="sport-hero">
  <div class="breadcrumb"><a href="../index.html">Domov</a><span class="sep">›</span><a href="../index.html#sporty">Športy</a><span class="sep">›</span><span>{name}</span></div>
  <div class="sport-hero-inner">
    <div class="sport-hero-icon">{icon}</div>
    <div><h1>{name}</h1><p>{desc}</p></div>
  </div>
</div>
<section class="section">
  <h2 class="section-h2">Športoviská v Petržalke</h2>
  <div class="fac-grid">{facs_html}</div>
</section>
<div class="back-section"><a href="../index.html#sporty" class="back-link">← Späť na všetky športy</a></div>
{FOOTER}
</body>
</html>'''
    with open(f'/Users/adamdanieldonoval/Downloads/sport-mestska-cast/sporty/{slug}.html', 'w') as f:
        f.write(html)
    print(f'Created: {slug}.html')

print('Done!')
