# Domicile Contracting Website — Claude Handoff Report

This report describes the current website files in this folder. It is intended to be shared with Claude as implementation context before reviewing, polishing, testing, or deploying the site.

## 1. Project overview

- **Project:** Domicile for Building Contracting L.L.C.
- **Website type:** Static, responsive, multi-page HTML website.
- **Primary market/content:** Building technology and contracting services in Dubai, UAE.
- **Public site/domain intended by canonical tags:** `https://domicilecontracting.ae/`
- **Current working folder:** `C:\Users\hp\Downloads\Domicile Assessment`
- **Pages:** Home, About, Services, FAQs, Contact.
- **Shared navigation/footer and service taxonomy:** `assets/js/components.js`
- **Shared interactions, service finder and carousels:** `assets/js/main.js`
- **Shared custom design and responsive rules:** `assets/css/style.css`

The current design uses a dark navy and teal palette. These are proposed interface colours, not confirmed official brand colour values.

## 2. Page URLs

### Local files

- Home: `file:///C:/Users/hp/Downloads/Domicile%20Assessment/index.html`
- About: `file:///C:/Users/hp/Downloads/Domicile%20Assessment/about.html`
- Services: `file:///C:/Users/hp/Downloads/Domicile%20Assessment/services.html`
- FAQs: `file:///C:/Users/hp/Downloads/Domicile%20Assessment/faqs.html`
- Contact: `file:///C:/Users/hp/Downloads/Domicile%20Assessment/contact.html`

Relative links between pages use filenames, so the files should remain in the same deployed directory.

### Intended public URLs

- Home: `https://domicilecontracting.ae/`
- About: `https://domicilecontracting.ae/about.html`
- Services: `https://domicilecontracting.ae/services.html`
- FAQs: `https://domicilecontracting.ae/faqs.html`
- Contact: `https://domicilecontracting.ae/contact.html`

These are the intended URLs represented in canonical and social metadata. Confirm the hosting platform supports these exact paths and default-index behavior before launch.

## 3. Site-wide header and footer

### Header

The shared header is rendered by `header()` in `assets/js/components.js`.

- Desktop top contact strip: office address, telephone link, and email link.
- Sticky translucent navy navigation with logo.
- Main navigation: **Home**, **About**, **Services**, **Our approach**, **FAQs**, **Contact**.
- Desktop Services mega-menu: four service groups with all service-anchor links.
- Header CTA: **Get a Quote**, linking to `contact.html`.
- Mobile menu button and collapsible mobile Services list.
- Shared JavaScript supports menu open/close, Escape, outside clicks, keyboard focus, and mobile navigation behavior.

### Footer

The shared footer is rendered by `footer()` in `assets/js/components.js`.

- Pre-footer project conversation CTA linking to Contact.
- Company summary and four external social links.
- Explore links for the main pages.
- Six popular services plus **All 13 services**.
- Telephone, email, office address, WhatsApp and copyright year.
- **Back to top** link uses `#top`; each HTML page has that target.
- Floating WhatsApp action appears site-wide.

### Shared contact values currently in code

- Telephone: `+971 50 8000930` / `tel:+971508000930`
- Email: `info@domicilecontracting.ae`
- WhatsApp: `https://wa.me/971508000930`
- Office address displayed in the current site: Office 1304, Donna Towers, Silicon Oasis, Dubai, UAE.

**Address confirmation is required:** earlier public-site research found a conflicting newer address listing. Verify the correct current office address with the company before publishing the current local address or map.

## 4. Home page (`index.html`)

The homepage is the most developed page. Current section order:

1. **Hero**
   - Headline: “Building systems, thoughtfully connected.”
   - BMS, building automation, ELV and MEP service labels.
   - Introductory Dubai/service copy.
   - CTAs to the enquiry section, Services page and WhatsApp.
   - Location and residential/commercial/industrial context.
   - Engineer image in a framed visual, grid treatment, and project-oriented overlay card.
   - Optional looping, muted background video `assets/img/hero.mp4`.
2. **Service overview counters**
   - Animated count-up values: 13 listed services, 4 service groups, 3 sectors and 5 delivery stages.
   - These are catalogue/process counts, **not** claimed client success totals.
3. **About/company introduction**
   - Engineer image.
   - Design-to-maintenance company positioning.
   - Links to `about.html`.
4. **Service-group slider**
   - Four automatically generated capability cards: Building Automation & ELV, Smart Building Solutions, MEP & Power Infrastructure, Finishes & General Maintenance.
   - Each card links to selected service anchors and the relevant service group.
   - Swiper navigation arrows, pagination and autoplay when reduced motion is not requested.
5. **Searchable services directory**
   - 13 cards generated from `window.GROUPS`.
   - Search input supports service names and IDs (including BMS alias via `bms`).
   - Category filters, live results status, empty state and links to detailed service sections.
6. **Project delivery approach**
   - Dark background and engineer image.
   - Four scope principles: understand the brief, coordinate interfaces, define deliverables, plan for operation.
   - Anchor ID: `project-delivery`.
7. **How we work**
   - Five stages: Survey and brief; Design and quote; Installation; Testing and handover; Maintenance.
   - Text states that deliverables, timing and support arrangements are project-dependent.
8. **Who we work with**
   - Developers, consultants, main contractors, facility owners and government entities.
9. **Our clients carousel**
   - Full-colour local client logo assets in Swiper.
10. **Our suppliers carousel**
    - Full-colour local supplier logo assets in Swiper.
11. **Homepage FAQ preview**
    - Four expand/collapse answers.
    - Includes a clear statement that the form prepares an email draft; it does not automatically send.
    - Link to the full FAQs page.
12. **Project CTA strip**
    - Enquiry and WhatsApp links.
13. **Enquiry section**
    - Name, email, phone, service, project-details fields and honeypot.
    - The current client-side form validates and creates a `mailto:` email draft.
    - It does not send email or store submissions.
14. **Shared footer and floating WhatsApp button**

### Home page images/media

- `assets/img/elv-engineer2.png` — engineer image used in the hero and About/project visuals. Confirm image licensing and whether it represents the company before production use.
- `assets/img/hero.mp4` — optional background video. Confirm playback, file size, licensing, and a fallback poster/image on production hosting.
- `assets/img/logo-white-text.png` — shared header/footer logo.
- Client carousel: `assets/img/clients_logos/carousel/`
- Supplier carousel: `assets/img/Suppliers_logos/carousel/`

The images `assets/img/clients.jpg` and `assets/img/suppliers.jpg` may still exist from the earlier version; the current carousel implementation uses the logo folders, not those two JPGs.

## 5. About page (`about.html`)

Current section order:

1. **Hero:** “Building technology contractor, Dubai” and a short service introduction.
2. **Company overview:** engineer image and company/service summary; grid of catalogue/context facts.
3. **Why clients choose Domicile:** four dynamically rendered cards about design-to-maintenance support, connected scopes, sectors and project conversations.
4. **Capabilities:** four dynamically rendered service-group cards linking into Services.
5. **Joined-up approach:** three cards about understanding requirements, coordinating scope, and planning operation. This section is not an ISO/certification claim.
6. **Sectors we serve:** residential, commercial and industrial.
7. **How we deliver:** five process steps.
8. **Planning a project CTA:** Contact and WhatsApp.
9. **Shared footer.**

Dynamic About content is defined in the inline script near the end of `about.html`; service groups come from `components.js`. Do not restore unsupported ISO claims, project counts, or fixed annual contract claims without company-approved evidence.

## 6. Services page (`services.html`)

Current section order:

1. **Hero:** “Building systems, delivered as one coordinated scope.”
2. **Find a service directory:** four grouped lists linking to the service anchors below.
3. **Detailed service cards:** 13 service sections. Each card has its own anchor, description, scope/benefits and relevant application/process information.
4. **Delivery route:** five steps from understanding the requirement through testing/review/handover.
5. **Scope CTA:** enquiry/contact CTA.
6. **Shared footer.**

### Four groups and all 13 service URLs/anchors

Group base URL: `https://domicilecontracting.ae/services.html`

| # | Service group | Service name | Anchor | Public deep link |
|---|---|---|---|---|
| 1 | Building Automation & ELV | Building Management System (BMS) | `bms` | `https://domicilecontracting.ae/services.html#bms` |
| 2 | Building Automation & ELV | Structured Cabling | `structured-cabling` | `https://domicilecontracting.ae/services.html#structured-cabling` |
| 3 | Building Automation & ELV | Access Control System | `access-control` | `https://domicilecontracting.ae/services.html#access-control` |
| 4 | Building Automation & ELV | Intruder Alarm System | `intruder-alarm` | `https://domicilecontracting.ae/services.html#intruder-alarm` |
| 5 | Building Automation & ELV | Public Address System | `pa-system` | `https://domicilecontracting.ae/services.html#pa-system` |
| 6 | Building Automation & ELV | ELV System AMC | `elv-amc` | `https://domicilecontracting.ae/services.html#elv-amc` |
| 7 | Smart Building Solutions | Smart Solutions | `smart-solutions` | `https://domicilecontracting.ae/services.html#smart-solutions` |
| 8 | Smart Building Solutions | Lighting Control System | `lighting-control` | `https://domicilecontracting.ae/services.html#lighting-control` |
| 9 | MEP & Power Infrastructure | MEP Services | `mep` | `https://domicilecontracting.ae/services.html#mep` |
| 10 | MEP & Power Infrastructure | Uninterruptible Power Supply | `ups` | `https://domicilecontracting.ae/services.html#ups` |
| 11 | Finishes & General Maintenance | Gypsum & Painting | `gypsum-painting` | `https://domicilecontracting.ae/services.html#gypsum-painting` |
| 12 | Finishes & General Maintenance | Floor Coating | `floor-coating` | `https://domicilecontracting.ae/services.html#floor-coating` |
| 13 | Finishes & General Maintenance | General Maintenance | `general-maintenance` | `https://domicilecontracting.ae/services.html#general-maintenance` |

Keep IDs synchronized across `services.html`, `components.js` navigation/footer links, and `main.js` service data.

## 7. FAQs page (`faqs.html`)

Current section order:

1. **Hero:** “Useful answers before you get in touch.”
2. **Starting a conversation**
   - What information should I send for a quotation?
   - Do you need to visit the site before pricing?
   - What happens after I send an enquiry?
   - How soon will I receive a response or quotation?
   - Does the website enquiry form send an email?
3. **Understanding the work**
   - Which services does Domicile list?
   - Can several services be included in one proposal?
   - Can you work with an existing building or system?
   - What is usually included in an ELV AMC?
   - Can a BMS integrate every building system?
   - Is a public address system the same as an emergency voice alarm system?
4. **Planning the next steps**
   - What affects the programme and price?
   - Who handles permits, approvals and authority requirements?
   - What handover documents should I expect?
   - Do you provide maintenance after installation?
   - Where is Domicile based?
5. **Still have a question CTA**
6. **Shared footer.**

FAQ items use native `<details>`/`<summary>` disclosure behavior.

## 8. Contact page (`contact.html`)

Current section order:

1. **Hero:** request-a-quote intro and contact CTA.
2. **Contact details and enquiry form**
   - Telephone, email and office address cards.
   - Enquiry fields: name, email, phone, service, project details.
   - Same client-side validation and email-draft behavior as the homepage.
3. **Map embed:** Google Maps iframe currently queries Donna Towers / Silicon Oasis, Dubai. Confirm the address before launch.
4. **Shared footer.**

## 9. Images and logo inventory

### Root image/media assets

- `assets/img/logo-white-text.png`
- `assets/img/elv-engineer2.png`
- `assets/img/hero.mp4`
- `assets/img/clients.jpg` (legacy/unused by current logo carousel)
- `assets/img/suppliers.jpg` (legacy/unused by current logo carousel)

### Client carousel (9 logos)

Folder: `assets/img/clients_logos/carousel/`

- `al_ansari_exchange_logo_uae.png`
- `al_tayar_stock_uae_logo.png`
- `blue_moon_dubai_logo.png`
- `BMTS_uae_logo.png`
- `damac_properties_logo_uae.png`
- `eros_group_dubai_logo.png`
- `gisco_bin_hamoodah_uae_logo.png`
- `schneider_electric_dubai_logo.png`
- `siemens_uae_logo.png`

### Supplier carousel (7 logos)

Folder: `assets/img/Suppliers_logos/carousel/`

- `edge_technical_solutions_llc_uae_logo.png`
- `energia_energy_efficiency_and_ieq_solutions_logo_aue.png`
- `industrie_technik_uae_logo.png`
- `schneider_electric_dubai_logo.png`
- `siemens_uae_logo.png`
- `vfm_thats_technology_logo.png`
- `zubair_electric_group_logo_uae.png`

Logo names and relationships should be confirmed with the company before representing these organizations as approved clients or suppliers. Use approved image files and preserve proper attribution/licensing.

## 10. Front-end tools and dependencies

- **HTML5:** individual static pages.
- **Tailwind CSS CDN:** `https://cdn.tailwindcss.com/3.4.17`; utility classes are used throughout. For production, replace the CDN with a compiled Tailwind build to avoid the CDN production warning and reduce CSS payload.
- **Custom CSS:** `assets/css/style.css`; shared palette in `components.js` Tailwind config:
  - Navy: `#142B45`
  - Brand teal: `#176B87`
  - Accent cyan: `#5FC0DC`
  - Mist background: `#F4F7FA`
- **Google Fonts:** Inter and Manrope.
- **Swiper:** `11.1.14`; used for service groups, clients and suppliers. Logo carousel breakpoints are 2 slides mobile, 4 tablet, 6 desktop; client/supplier autoplay is 2500 ms and stops under `prefers-reduced-motion`.
- **Lucide:** `0.441.0` UMD icon library.
- **Vanilla JavaScript:** `assets/js/components.js` and `assets/js/main.js`; no npm application framework or backend.
- **Google Maps iframe:** Contact page location embed.
- **Development preview:** VS Code Live Server is suitable for testing local navigation. Opening via `file://` also works for the current static setup, but use a local server for realistic deployment checks.

## 11. Existing behavior and constraints

- The service taxonomy is `window.GROUPS` in `assets/js/components.js`, and drives shared navigation, service filter cards, form options and About capability cards.
- Homepage service descriptions and icons are keyed by service anchor in `assets/js/main.js`.
- Logo carousels use explicit JavaScript arrays with filenames, alt labels and card-surface class.
- Scroll reveals are visible by default; animations are progressive enhancement. Respect reduced-motion preferences.
- Enquiry forms do not submit to a server or send email. They validate fields and create a `mailto:` link for the visitor’s email application. Implementing real lead capture requires a chosen backend/provider, privacy review, spam controls and approved credentials/configuration.
- There are no verified project case studies/project names or success-project totals in this handoff. Do not invent them or use fabricated counters. Add only when the company provides verifiable project details and approved photography.
- No legal/privacy pages are currently linked. Before production lead capture, confirm whether the organization requires privacy, cookie, terms or data-retention disclosures.
- Confirm the address, brand colour codes, client/supplier relationships, staff image licensing, service claims, social profiles and actual enquiry response workflow before publication.

## 12. SEO and launch checks

Already present in the pages:

- Page-specific `<title>` and meta description.
- Canonical URLs for the intended public domain.
- Open Graph title/description/type/URL; homepage also includes an OG image.
- Homepage Organization JSON-LD with organization name, URL, telephone, email and Dubai service area.
- Semantic headings, descriptive image alt text, and responsive viewport metadata.

Recommended before launch:

1. Confirm live public URLs, HTTPS, redirects, canonical domain, and hosting behavior for `.html` routes.
2. Replace Tailwind CDN with a production build; verify all custom Tailwind utility classes (including arbitrary values) are emitted.
3. Optimize and compress hero video and images; supply an image/poster fallback and test slow/mobile networks.
4. Confirm every image and logo is authorized, and the client/supplier associations are accurate.
5. Confirm the engineer image is appropriate to represent the company rather than being mistaken for a named employee.
6. Confirm the company address before updating the footer, top bar, contact page and map.
7. Choose and connect the actual enquiry backend/email provider if automatic submission is needed. Test deliverability, errors, spam prevention, privacy and consent language.
8. Add approved privacy/legal documents if required.
9. Verify production accessibility: keyboard navigation, focus visibility, contrast, alt text, form error announcements, reduced motion, and mobile drawer behavior.
10. Check page speed, mobile Core Web Vitals, sitemap, robots.txt, favicon, social preview image, and Search Console ownership.
11. Test all 13 service anchor links, internal navigation, telephone/email/WhatsApp links, client/supplier carousels, and map on the real hosting URL.

## 13. Recommended instruction to give Claude

> Review the website in this folder using `CLAUDE_HANDOFF_REPORT.md` as the source-of-truth inventory. Before editing, inspect the current HTML, CSS, JavaScript and assets. Preserve the static multi-page architecture and existing service names/anchor IDs. Do not invent projects, success counts, certifications, client/supplier approvals, address details, or company claims. Keep mobile responsiveness, accessible keyboard controls, reduced-motion behavior, SEO metadata, and all links working. If production readiness requires real email submission, identify the backend/provider decision and ask before adding a service or credentials. Make focused changes, update this report if the page structure or dependencies change, and validate with JavaScript syntax checks plus browser tests at mobile and desktop sizes.
