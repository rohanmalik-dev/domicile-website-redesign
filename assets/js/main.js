document.addEventListener('DOMContentLoaded', () => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // Service dropdown options (ek hi list, GROUPS se)
  $$('select[data-services]').forEach(sel => {
    sel.insertAdjacentHTML('beforeend', GROUPS.flatMap(g => g[2]).map(([n]) => `<option>${n}</option>`).join('') + '<option>Other</option>');
  });

  if (window.lucide) lucide.createIcons();

  const hdr = $('#hdr'), btn = $('#menu-btn'), mm = $('#mobile-menu');
  const setMobileMenu = open => {
    if (!btn || !mm) return;
    mm.classList.toggle('hidden', !open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    btn.innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}" class="w-6 h-6"></i>`;
    document.body.classList.toggle('menu-open', open);
    if (window.lucide) lucide.createIcons();
  };
  btn?.addEventListener('click', () => setMobileMenu(btn.getAttribute('aria-expanded') !== 'true'));
  mm?.addEventListener('click', event => {
    if (event.target.closest('a')) setMobileMenu(false);
  });
  addEventListener('scroll', () => hdr?.classList.toggle('shadow-xl', scrollY > 10), { passive: true });

  const servicesNav = $('.services-nav');
  const servicesToggle = $('.services-nav > button');
  const setServicesMenu = open => {
    servicesNav?.classList.toggle('is-open', open);
    servicesToggle?.setAttribute('aria-expanded', String(open));
  };
  servicesToggle?.addEventListener('click', () => {
    setServicesMenu(!servicesNav.classList.contains('is-open'));
  });
  servicesNav?.addEventListener('mouseenter', () => {
    if (innerWidth >= 1280) setServicesMenu(true);
  });
  servicesNav?.addEventListener('mouseleave', () => {
    if (innerWidth >= 1280 && !servicesNav.contains(document.activeElement)) setServicesMenu(false);
  });
  servicesNav?.addEventListener('focusout', event => {
    if (!servicesNav.contains(event.relatedTarget)) setServicesMenu(false);
  });
  document.addEventListener('click', event => {
    if (servicesNav && !servicesNav.contains(event.target)) {
      setServicesMenu(false);
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const servicesWereOpen = servicesNav?.classList.contains('is-open');
    setServicesMenu(false);
    setMobileMenu(false);
    if (servicesWereOpen) servicesToggle?.focus();
  });
  addEventListener('resize', () => {
    if (innerWidth >= 1280) setMobileMenu(false);
  });

  const io = 'IntersectionObserver' in window
    ? new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    }), { threshold: 0.12 })
    : null;
  const observeReveals = root => {
      const revealSelector = 'main section h2, main section article, main section .card-lift, main section [data-reveal]';
      const elements = [];
      if (root.matches?.('.reveal, [data-reveal]')) elements.push(root);
      elements.push(...root.querySelectorAll?.('.reveal, [data-reveal]') || []);
      if (root.matches?.(revealSelector)) root.classList.add('reveal');
      root.querySelectorAll?.(revealSelector).forEach(el => {
        el.classList.add('reveal');
        elements.push(el);
      });
      const uniqueElements = [...new Set(elements)];
      uniqueElements.forEach(el => io ? io.observe(el) : el.classList.add('in'));
  };
  observeReveals(document);
  const mainContent = $('main');
  if (io && mainContent) {
    new MutationObserver(records => records.forEach(record => record.addedNodes.forEach(node => {
      if (node.nodeType === Node.ELEMENT_NODE) observeReveals(node);
    }))).observe(mainContent, { childList: true, subtree: true });
  }

  // Animated counters: <span data-count="12" data-suffix="+">
  const co = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, end = +el.dataset.count, suf = el.dataset.suffix || '', t0 = performance.now();
    const tick = t => { const p = Math.min((t - t0) / 1400, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suf; if (p < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick); co.unobserve(el);
  }), { threshold: 0.6 });
  $$('[data-count]').forEach(el => co.observe(el));

  const clientLogos = [
    { file: 'al_ansari_exchange_logo_uae.png', alt: 'Al Ansari Exchange', surface: 'bg-white' },
    { file: 'al_tayar_stock_uae_logo.png', alt: 'Al Tayar Stocks', surface: 'bg-navy' },
    { file: 'blue_moon_dubai_logo.png', alt: 'Blue Moon', surface: 'bg-white' },
    { file: 'BMTS_uae_logo.png', alt: 'BMTS', surface: 'bg-white' },
    { file: 'damac_properties_logo_uae.png', alt: 'DAMAC Properties', surface: 'bg-white' },
    { file: 'eros_group_dubai_logo.png', alt: 'Eros Group', surface: 'bg-white' },
    { file: 'gisco_bin_hamoodah_uae_logo.png', alt: 'GISCO Bin Hamoodah', surface: 'bg-navy' },
    { file: 'schneider_electric_dubai_logo.png', alt: 'Schneider Electric', surface: 'bg-white' },
    { file: 'siemens_uae_logo.png', alt: 'Siemens', surface: 'bg-white' }
  ];
  const clientCarousel = $('.clients-logo-swiper .swiper-wrapper');
  if (clientCarousel) {
    clientCarousel.innerHTML = clientLogos.map(({ file, alt, surface }) => `
      <div class="swiper-slide">
        <div class="group h-28 sm:h-32 ${surface} border border-slate-200/80 rounded-lg flex items-center justify-center p-3 sm:p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:transform-none">
          <img src="assets/img/clients_logos/carousel/${file}" alt="${alt}" class="max-h-16 sm:max-h-20 max-w-full object-contain transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none" loading="lazy">
        </div>
      </div>`).join('');
  }

  const serviceSummaries = {
    bms: ['Controls and monitoring for selected building plant, with integrations scoped to confirmed interfaces.', 'activity'],
    'structured-cabling': ['Organised passive cabling infrastructure, planned around outlet schedules and site routes.', 'network'],
    'access-control': ['Managed entry for defined doors and areas, coordinated with the approved door hardware.', 'scan-face'],
    'intruder-alarm': ['Configured detection and alerts for the protected zones agreed for your site.', 'shield-alert'],
    'pa-system': ['Zoned announcements and audio planned for the building layout and intended use.', 'megaphone'],
    'elv-amc': ['Planned inspections and support for the ELV systems listed in an agreed maintenance scope.', 'clipboard-check'],
    'smart-solutions': ['Connected, practical controls based on user needs and compatible equipment.', 'lightbulb'],
    'lighting-control': ['Lighting zones, schedules and scenes coordinated with the selected fixtures.', 'sun'],
    mep: ['Project-defined mechanical, electrical and plumbing works, coordinated with other trades.', 'settings-2'],
    ups: ['Backup power for selected critical loads, sized to confirmed load and runtime requirements.', 'battery-charging'],
    'gypsum-painting': ['Interior gypsum and paint finishes planned around the substrate and finish schedule.', 'paint-roller'],
    'floor-coating': ['Floor coating options selected for the substrate, access conditions and intended use.', 'layers-3'],
    'general-maintenance': ['Building repair and upkeep tasks scoped to the site, issue and agreed access.', 'wrench']
  };
  const serviceGrid = $('#service-grid');
  if (serviceGrid) {
    const services = GROUPS.flatMap(([group, groupIcon, items]) => items.map(([name, id]) => ({
      name, id, group, groupIcon, summary: serviceSummaries[id][0], icon: serviceSummaries[id][1]
    })));
    serviceGrid.innerHTML = services.map(({ name, id, group, summary, icon }, index) => `
      <article data-service-card data-service-name="${name.toLowerCase()} ${id.toLowerCase()}" data-service-group="${group}" data-reveal
        class="service-card group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm"
        style="--reveal-delay:${index % 4 * 65}ms">
        <div class="flex items-start justify-between gap-4">
          <span class="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white"><i data-lucide="${icon}" class="h-6 w-6"></i></span>
          <span class="rounded-full bg-mist px-2.5 py-1 text-[.65rem] font-bold uppercase tracking-wide text-slate-600">${group.replace('Building Automation & ELV', 'Automation & ELV').replace('Smart Building Solutions', 'Smart buildings').replace('MEP & Power Infrastructure', 'MEP & power').replace('Finishes & General Maintenance', 'Finishes & maintenance')}</span>
        </div>
        <h3 class="mt-5 font-head text-lg font-extrabold leading-snug text-navy">${name}</h3>
        <p class="mt-2 flex-1 text-sm leading-relaxed text-slate-600">${summary}</p>
        <a class="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand group-hover:gap-3 transition-all" href="services.html#${id}">Explore service<i data-lucide="arrow-right" class="h-4 w-4"></i></a>
      </article>`).join('');

    const search = $('#service-search');
    const filterButtons = $$('[data-service-filter]');
    const status = $('#service-results-status');
    let activeGroup = 'all';
    const filterServices = () => {
      const query = search.value.trim().toLowerCase();
      let visible = 0;
      $$('[data-service-card]', serviceGrid).forEach(card => {
        const matches = (activeGroup === 'all' || card.dataset.serviceGroup === activeGroup)
          && `${card.dataset.serviceName} ${card.dataset.serviceGroup} ${card.textContent}`.toLowerCase().includes(query);
        card.hidden = !matches;
        if (matches) visible += 1;
      });
      status.textContent = `${visible} ${visible === 1 ? 'service' : 'services'} found`;
      serviceGrid.classList.toggle('service-grid-empty', visible === 0);
      $('#service-empty')?.classList.toggle('hidden', visible !== 0);
    };
    search?.addEventListener('input', filterServices);
    filterButtons.forEach(button => button.addEventListener('click', () => {
      activeGroup = button.dataset.serviceFilter;
      filterButtons.forEach(filter => {
        const active = filter === button;
        filter.setAttribute('aria-pressed', String(active));
        filter.classList.toggle('is-active', active);
      });
      filterServices();
    }));
    if (window.lucide) lucide.createIcons();
  }

  const servicePathways = $('.service-groups-swiper .swiper-wrapper');
  if (servicePathways) {
    const groupDescriptions = {
      'Building Automation & ELV': 'Controls, monitoring and low-voltage systems for defined building requirements.',
      'Smart Building Solutions': 'Lighting control and connected features planned around building use.',
      'MEP & Power Infrastructure': 'Mechanical, electrical, plumbing and backup-power scopes coordinated for the site.',
      'Finishes & General Maintenance': 'Interior finish and upkeep work scoped to the building and agreed requirements.'
    };
    servicePathways.innerHTML = GROUPS.map(([group, icon, items], index) => `
      <div class="swiper-slide h-auto">
        <article class="service-pathway-card group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div class="service-pathway-art pathway-art-${index + 1}">
            <div class="pathway-art-grid"></div><span class="pathway-art-orbit pathway-art-orbit-one"></span><span class="pathway-art-orbit pathway-art-orbit-two"></span>
            <span class="pathway-art-index">0${index + 1} <span>/ 04</span></span>
            <span class="pathway-art-icon"><i data-lucide="${icon}" class="h-9 w-9"></i></span>
            <span class="pathway-art-label">BUILDING SYSTEMS</span>
          </div>
          <div class="p-5 sm:p-6">
            <h3 class="font-head text-xl font-extrabold leading-snug text-navy">${group}</h3>
            <p class="mt-2 min-h-[3.25rem] text-sm leading-relaxed text-slate-600">${groupDescriptions[group]}</p>
            <ul class="mt-5 space-y-2 border-t border-slate-100 pt-4">${items.slice(0, 3).map(([name, id]) => `<li><a class="service-pathway-link" href="services.html#${id}"><span>${name}</span><i data-lucide="arrow-up-right" class="h-4 w-4"></i></a></li>`).join('')}</ul>
            <a href="services.html#${items[0][1]}" class="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand transition-all group-hover:gap-3">Explore this group<i data-lucide="arrow-right" class="h-4 w-4"></i></a>
          </div>
        </article>
      </div>`).join('');
    if (window.lucide) lucide.createIcons();
  }

  const supplierLogos = [
    { file: 'edge_technical_solutions_llc_uae_logo.png', alt: 'EDGE Technical Solutions LLC', surface: 'bg-white' },
    { file: 'energia_energy_efficiency_and_ieq_solutions_logo_aue.png', alt: 'Energia Energy Efficiency and IEQ Solutions', surface: 'bg-white' },
    { file: 'industrie_technik_uae_logo.png', alt: 'Industrie Technik', surface: 'bg-white' },
    { file: 'schneider_electric_dubai_logo.png', alt: 'Schneider Electric', surface: 'bg-white' },
    { file: 'siemens_uae_logo.png', alt: 'Siemens', surface: 'bg-white' },
    { file: 'vfm_thats_technology_logo.png', alt: 'VFM That’s Technology', surface: 'bg-navy' },
    { file: 'zubair_electric_group_logo_uae.png', alt: 'Zubair Electric Group', surface: 'bg-white' }
  ];
  const supplierCarousel = $('.suppliers-logo-swiper .swiper-wrapper');
  if (supplierCarousel) {
    supplierCarousel.innerHTML = supplierLogos.map(({ file, alt, surface }) => `
      <div class="swiper-slide">
        <div class="group h-28 sm:h-32 ${surface} border border-slate-200/80 rounded-lg flex items-center justify-center p-3 sm:p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:transform-none">
          <img src="assets/img/Suppliers_logos/carousel/${file}" alt="${alt}" class="max-h-16 sm:max-h-20 max-w-full object-contain transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none" loading="lazy">
        </div>
      </div>`).join('');
  }

  // Projects and client logo carousels
  const motionAllowed = !matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (window.Swiper && $('.service-groups-swiper')) new Swiper('.service-groups-swiper', {
    loop: true,
    slidesPerView: 1.08,
    spaceBetween: 16,
    autoplay: motionAllowed ? { delay: 4800, disableOnInteraction: false, pauseOnMouseEnter: true } : false,
    keyboard: { enabled: true, onlyInViewport: true },
    navigation: { nextEl: '.service-pathway-next', prevEl: '.service-pathway-prev' },
    pagination: { el: '.service-pathway-pagination', clickable: true },
    breakpoints: {
      640: { slidesPerView: 2, spaceBetween: 18 },
      1024: { slidesPerView: 3, spaceBetween: 22 }
    }
  });
  if (window.Swiper && $('.projects-swiper')) new Swiper('.projects-swiper', {
    slidesPerView: 1.1, spaceBetween: 20, autoplay: { delay: 4500, disableOnInteraction: true },
    pagination: { el: '.projects-swiper .swiper-pagination', clickable: true },
    navigation: { nextEl: '.pj-next', prevEl: '.pj-prev' },
    breakpoints: { 768: { slidesPerView: 2.1 }, 1100: { slidesPerView: 3 } }
  });
  if (window.Swiper && $('.clients-logo-swiper')) new Swiper('.clients-logo-swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 12,
    autoplay: motionAllowed ? { delay: 2500, disableOnInteraction: false } : false,
    breakpoints: {
      640: { slidesPerView: 4, spaceBetween: 16 },
      1024: { slidesPerView: 6, spaceBetween: 16 }
    }
  });
  if (window.Swiper && $('.suppliers-logo-swiper')) new Swiper('.suppliers-logo-swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 12,
    autoplay: motionAllowed ? { delay: 2500, disableOnInteraction: false } : false,
    breakpoints: {
      640: { slidesPerView: 4, spaceBetween: 16 },
      1024: { slidesPerView: 6, spaceBetween: 16 }
    }
  });

  // The static site prepares an email draft; sending still requires the visitor's email app.
  $$('form[data-enquiry]').forEach(f => f.addEventListener('submit', e => {
    e.preventDefault();
    if (f.elements.website && f.elements.website.value) return; // honeypot (spam)
    let ok = true;
    $$('[required]', f).forEach(i => {
      const bad = !i.value.trim() || (i.type === 'email' && !/^\S+@\S+\.\S+$/.test(i.value));
      i.setAttribute('aria-invalid', bad); i.classList.toggle('border-red-500', bad);
      $('.err', i.parentElement).classList.toggle('hidden', !bad);
      if (bad) ok = false;
    });
    if (!ok) return $('[aria-invalid=true]', f).focus();
    const values = new FormData(f);
    const subject = `Project enquiry from ${values.get('name')}`;
    const body = [
      `Name: ${values.get('name')}`,
      `Email: ${values.get('email')}`,
      `Phone: ${values.get('phone') || 'Not provided'}`,
      `Service: ${values.get('service')}`,
      '',
      'Project details:',
      values.get('message')
    ].join('\n');
    const draft = $('.form-mailto', f.parentElement);
    draft.href = `mailto:info@domicilecontracting.ae?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    f.classList.add('hidden');
    const success = $('.form-success', f.parentElement);
    success.classList.remove('hidden');
    success.focus();
    if (window.lucide) lucide.createIcons();
  }));
});