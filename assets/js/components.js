/* Domicile: shared header + footer + Tailwind config (colours sirf yahin badlo) */
window.tailwind = window.tailwind || {};
tailwind.config = { theme: { extend: {
  colors: { navy: '#142B45', brand: '#176B87', accent: '#5FC0DC', mist: '#F4F7FA' },
  fontFamily: { head: ['Manrope', 'sans-serif'], body: ['Inter', 'sans-serif'] }
} } };

const D = { phone: '+971 50 8000930', wa: 'https://wa.me/971508000930', mail: 'info@domicilecontracting.ae',
  addr: 'Office 1304, Donna Towers, Silicon Oasis, Dubai, UAE' };

// [group title, icon, [[service name, anchor id on services.html]]]
window.GROUPS = [
  ['Building Automation & ELV', 'cpu', [['Building Management System', 'bms'], ['Structured Cabling', 'structured-cabling'], ['Access Control System', 'access-control'], ['Intruder Alarm System', 'intruder-alarm'], ['Public Address System', 'pa-system'], ['ELV System AMC', 'elv-amc']]],
  ['Smart Building Solutions', 'lightbulb', [['Smart Solutions', 'smart-solutions'], ['Lighting Control System', 'lighting-control']]],
  ['MEP & Power Infrastructure', 'zap', [['MEP Services', 'mep'], ['Uninterruptible Power Supply', 'ups']]],
  ['Finishes & General Maintenance', 'wrench', [['Gypsum & Painting', 'gypsum-painting'], ['Floor Coating', 'floor-coating'], ['General Maintenance', 'general-maintenance']]]
];
const NAV = [['Home', 'index.html', 'home'], ['About', 'about.html', 'about'], ['Services', 'services.html', 'services'], ['Our approach', 'index.html#project-delivery', 'projects'], ['FAQs', 'faqs.html', 'faqs'], ['Contact', 'contact.html', 'contact']];

const svcList = (tCls, lCls) => GROUPS.map(([t, ic, items]) => `
  <div><p class="flex items-center gap-2 font-head font-bold mb-2 ${tCls}"><i data-lucide="${ic}" class="w-4 h-4"></i>${t}</p>
  <ul class="space-y-1.5">${items.map(([n, id]) => `<li><a href="services.html#${id}" class="${lCls}">${n}</a></li>`).join('')}</ul></div>`).join('');

function header(page) {
  const item = ([n, h, k]) => k === 'services'
    ? `<div class="services-nav relative">
        <button type="button" class="nav-link inline-flex items-center gap-1 ${page === k ? 'active' : ''}" aria-expanded="false" aria-haspopup="true" aria-controls="services-mega">
          Services<i data-lucide="chevron-down" class="w-4 h-4 transition-transform"></i>
        </button>
        <div id="services-mega" class="services-dropdown hidden absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[min(92vw,920px)]">
          <div class="bg-white text-slate-600 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            <div class="flex items-center justify-between gap-5 px-7 py-5 bg-mist border-b border-slate-200">
              <div><p class="text-xs font-bold uppercase tracking-[.16em] text-brand">Explore capabilities</p><p class="font-head font-extrabold text-navy text-lg mt-1">Building services, clearly organised</p></div>
              <a href="services.html" class="btn btn-primary !py-2.5 !px-4 text-sm shrink-0">All services<i data-lucide="arrow-up-right" class="w-4 h-4"></i></a>
            </div>
            <div class="grid grid-cols-2 gap-0 p-4">${GROUPS.map(([title, icon, items]) => `
              <section class="p-4 rounded-xl hover:bg-mist/70 transition-colors">
                <h3 class="flex items-center gap-2 font-head font-extrabold text-navy"><span class="w-9 h-9 rounded-lg bg-brand/10 grid place-items-center"><i data-lucide="${icon}" class="w-5 h-5 text-brand"></i></span>${title}</h3>
                <ul class="mt-3 grid gap-1">${items.map(([name, id]) => `<li><a href="services.html#${id}" class="group/link flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm hover:bg-white hover:text-brand focus-visible:bg-white"><span>${name}</span><i data-lucide="arrow-up-right" class="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 group-focus-visible/link:opacity-100"></i></a></li>`).join('')}</ul>
              </section>`).join('')}</div>
            <div class="px-7 py-4 border-t border-slate-200 flex items-center justify-between gap-4 text-sm">
              <span>Not sure what your project needs?</span><a href="contact.html" class="font-bold text-brand hover:text-navy">Talk to our team <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </div>`
    : `<a href="${h}" class="nav-link ${page === k ? 'active' : ''}">${n}</a>`;
  return `
  <div class="site-topbar hidden bg-[#0e1f33] text-xs text-white/75 md:block"><div class="mx-auto flex h-10 max-w-7xl items-center justify-between gap-5 px-4">
    <span class="flex min-w-0 items-center gap-2 truncate"><i data-lucide="map-pin" class="h-3.5 w-3.5 shrink-0 text-accent"></i>${D.addr}</span>
    <span class="flex shrink-0 items-center gap-5"><a href="tel:${D.phone.replace(/ /g, '')}" class="inline-flex items-center gap-2 transition hover:text-white"><i data-lucide="phone" class="h-3.5 w-3.5 text-accent"></i>${D.phone}</a><a href="mailto:${D.mail}" class="inline-flex items-center gap-2 transition hover:text-white"><i data-lucide="mail" class="h-3.5 w-3.5 text-accent"></i>${D.mail}</a></span></div></div>
  <header id="hdr" class="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur-xl transition-shadow">
    <div class="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-[5rem]">
      <a href="index.html" class="flex shrink-0 items-center gap-2 font-head text-xl font-extrabold text-white" aria-label="Domicile home"><img src="assets/img/logo-white-text.png" alt="Domicile for Building Contracting" class="h-10 w-auto lg:h-11" onerror="this.replaceWith(Object.assign(document.createElement('span'), { textContent: 'DOMICILE' }))"></a>
      <nav class="hidden items-center gap-4 xl:flex 2xl:gap-6" aria-label="Main">${NAV.map(item).join('')}</nav>
      <div class="flex shrink-0 items-center gap-1.5 sm:gap-3"><a href="contact.html" class="header-cta btn btn-primary !px-3 !py-2.5 text-xs sm:!px-5 sm:text-sm">Get a Quote<i data-lucide="arrow-up-right" class="h-4 w-4"></i></a>
      <button id="menu-btn" class="rounded-lg p-2 text-white transition hover:bg-white/10 focus-visible:outline-offset-2 xl:hidden" aria-label="Open menu" aria-controls="mobile-menu" aria-expanded="false"><i data-lucide="menu" class="h-6 w-6"></i></button></div>
    </div>
    <div id="mobile-menu" class="hidden max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-white/10 bg-navy px-4 pb-6 sm:px-6 xl:hidden">
      ${NAV.map(([n, h, k]) => k === 'services'
        ? `<details class="border-b border-white/10" ${page === k ? 'open' : ''}><summary class="flex items-center justify-between py-4 text-white font-semibold cursor-pointer">Services<i data-lucide="chevron-down" class="w-4 h-4 text-accent"></i></summary><div class="grid sm:grid-cols-2 gap-5 pb-5">${svcList('text-accent text-sm', 'text-white/80 hover:text-white text-sm')}</div></details>`
        : `<a href="${h}" class="block py-4 text-white font-semibold border-b border-white/10 ${page === k ? 'text-accent' : ''}">${n}</a>`).join('')}
      <a href="contact.html" class="btn btn-primary w-full justify-center mt-5">Get a Quote<i data-lucide="arrow-up-right" class="w-4 h-4"></i></a>
    </div>
  </header>`;
}

function footer() {
  return `
  <footer class="site-footer bg-[#0e1f33] text-sm text-white/70">
    <div class="mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-16">
      <div class="footer-cta mb-12 flex flex-col justify-between gap-5 rounded-2xl border border-white/10 bg-white/[.05] p-6 sm:flex-row sm:items-center sm:p-8">
        <div><p class="text-xs font-bold uppercase tracking-[.16em] text-accent">Need a project conversation?</p><h2 class="mt-2 font-head text-xl font-extrabold text-white sm:text-2xl">Let’s clarify what your building needs.</h2></div>
        <a href="contact.html" class="btn btn-primary shrink-0">Talk to our team<i data-lucide="arrow-up-right" class="h-4 w-4"></i></a>
      </div>
      <div class="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_.8fr_1fr_1.2fr] lg:gap-12">
        <div><a href="index.html" aria-label="Domicile home" class="inline-flex min-h-12 items-center"><img src="assets/img/logo-white-text.png" alt="Domicile for Building Contracting" class="h-11 w-auto" onerror="this.replaceWith(Object.assign(document.createElement('span'), { textContent: 'DOMICILE', className: 'font-head text-xl font-extrabold text-white' }))"></a>
          <p class="mt-4 max-w-sm leading-relaxed">Building technology in Dubai, including BMS, ELV, smart building systems and MEP. Explore the listed services or start with a project enquiry.</p>
          <div class="mt-5 flex gap-2">${[['instagram', 'https://www.instagram.com/domicilecontracting'], ['facebook', 'https://www.facebook.com/profile.php?id=61581464349935'], ['linkedin', 'https://www.linkedin.com/in/domicile-for-building-contracting-41110a370/'], ['youtube', 'https://www.youtube.com/@DomicileContracting']].map(([i, u]) => `<a href="${u}" target="_blank" rel="noopener noreferrer" aria-label="${i}" class="footer-social grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[.05] transition hover:border-accent/50 hover:bg-brand hover:text-white"><i data-lucide="${i}" class="h-4 w-4"></i></a>`).join('')}</div>
        </div>
        <div><h3 class="mb-4 font-head font-extrabold text-white">Explore</h3><ul class="space-y-3">${NAV.map(([n, h]) => `<li><a href="${h}" class="footer-link">${n}</a></li>`).join('')}</ul></div>
        <div><h3 class="mb-4 font-head font-extrabold text-white">Popular services</h3><ul class="space-y-3">${[['Building Management System','bms'],['Structured Cabling','structured-cabling'],['Access Control System','access-control'],['Smart Solutions','smart-solutions'],['Lighting Control System','lighting-control'],['MEP Services','mep']].map(([n,id])=>`<li><a href="services.html#${id}" class="footer-link">${n}</a></li>`).join('')}<li><a href="services.html" class="inline-flex items-center gap-2 pt-1 font-bold text-accent hover:text-white">All 13 services<i data-lucide="arrow-right" class="h-4 w-4"></i></a></li></ul></div>
        <div><h3 class="mb-4 font-head font-extrabold text-white">Get in touch</h3><ul class="space-y-4">
          <li><a href="tel:${D.phone.replace(/ /g, '')}" class="footer-contact"><span class="footer-contact-icon"><i data-lucide="phone" class="h-4 w-4"></i></span><span><span class="block text-xs text-white/45">Call our team</span>${D.phone}</span></a></li>
          <li><a href="mailto:${D.mail}" class="footer-contact"><span class="footer-contact-icon"><i data-lucide="mail" class="h-4 w-4"></i></span><span class="break-all"><span class="block text-xs text-white/45">Email</span>${D.mail}</span></a></li>
          <li class="footer-contact"><span class="footer-contact-icon"><i data-lucide="map-pin" class="h-4 w-4"></i></span><span><span class="block text-xs text-white/45">Office</span>${D.addr}</span></li>
          <li><a href="${D.wa}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 font-semibold text-accent transition hover:text-white"><i data-lucide="message-circle" class="h-4 w-4"></i>Message us on WhatsApp</a></li>
        </ul></div>
      </div>
    </div>
    <div class="border-t border-white/10"><div class="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6"><span>© <span id="yr"></span> Domicile for Building Contracting L.L.C. All rights reserved.</span><a href="#top" class="footer-link">Back to top ↑</a></div></div>
  </footer>
  <a href="${D.wa}" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" class="whatsapp-float fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#1fa855] text-white shadow-xl transition hover:scale-105"><i data-lucide="message-circle" class="h-7 w-7"></i></a>`;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('site-header').innerHTML = header(document.body.dataset.page);
  document.getElementById('site-footer').innerHTML = footer();
  document.getElementById('yr').textContent = new Date().getFullYear();
});