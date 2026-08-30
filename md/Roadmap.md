# Roadmap

Development roadmap for completing the Barista Coffee (کافه باریستا) website.

Rules and constraints live in `AGENTS.md` and the `/md` documentation. This file only sequences and scopes the work.

---

## 1. Scope

Requested work:

```text
1. Color palette update
2. Hero Slider
3. About
4. Products (category tabs + product carousel)
5. Articles
6. Contact
```

All work must use the existing stack only:

```text
HTML5 + CSS3 + Vanilla JavaScript
Bootstrap 5.3.6
Owl Carousel
WOW.js + newAnimate.css
Bootstrap Icons 1.13.1
IRANSans
CSS Custom Properties theme system
```

---

## 2. Current State

Already implemented:

```text
Navbar + hamburger animation (Navbar-class, first-button, animated-icon1)
Theme controls (ThemeBoxSwitch, ChangeColorBtn, ChangeColorBtn01, CustomColorPicker)
Dark/light switch + color presets (js/source.js)
Footer (footer-box, footer-address, footer-links, footer-contact, sm-list, copyright)
Homepage placeholder (Image/سسس.jpg)
CSS variable system (:root in Css/Style.css)
Custom large-screen containers + clamp() typography
```

Not implemented yet:

```text
Hero slider
About / Products / Articles / Contact sections
All Owl Carousel initializations
```

Important observations:

```text
--third-color, --fourth-color, --background-custome exist in :root but are unused.
changeColor() / changeColor01() presets still hold legacy blue/red and teal/orange values.
.ChangeColorBtn swatch colors in Css/Style.css must match the final palette.
owl.carousel.min.js is the jQuery-based build; jQuery was missing and has been added locally as js/jquery.min.js (Phase 1).
Css/Essential.css contains a ready-made .Titr section-title pattern but is not linked in index.html.
```

---

## 3. Target Page Order

```text
Navbar
→ Hero Slider  (#home)
→ About        (#about)
→ Products     (#products)
→ Articles     (#articles)
→ Contact      (#contact)
→ Footer
```

Navbar links and footer quick links must be updated to point to these anchors.

---

## 4. Global Rules for Every New Section

```text
- Consume theme variables: rgb(var(--first-color)), rgb(var(--second-color)),
  rgb(var(--background-custome)), rgb(var(--white-custome)), rgb(var(--black-custome))
- Radius: var(--radius-custome) — no arbitrary radius systems
- Spacing: existing section { margin: 50px 0 } + Bootstrap spacing utilities
- Headings: existing clamp() sizes; one h1 per page (inside the slider), h2 per section
- Animations: existing WOW classes (wow animate__animated animate__fadeInUp, data-wow-delay)
- Icons: Bootstrap Icons only, aria-hidden="true" when decorative
- Unprovided content stays as clearly identifiable placeholder text (لورم ایپسوم pattern
  already used in the footer) — never invent claims, prices, addresses or statistics
- New CSS goes into Css/Style.css under the "custom style" area — no new CSS files
- New JS goes into js/source.js inside DOMContentLoaded, always with an element-existence check
- Every component is verified in Light Mode, Dark Mode, both presets, custom colors,
  and at: 375 / 576 / 768 / 992 / 1200 / 1400 / 1600 / 1800 / 2600 px
- Respect prefers-reduced-motion for autoplay and motion
```

---

## 5. Phase 0 — Color Palette Update (RESOLVED)

Decision: the owner confirmed the CURRENT palette as the official brand palette —
the `:root` block stays exactly as it is. No CSS color change is required.

Confirmed brand palette (Css/Style.css :root):

| Variable | RGB | Hex | Meaning | Usage today |
|---|---|---|---|---|
| --first-color | 30, 64, 47 | #1E402F | dark forest green | navbar, footer, scrollbar |
| --second-color | 56, 42, 31 | #382A1F | dark coffee brown | hover/accents, footer details |
| --third-color | 190, 126, 72 | #BE7E48 | caramel | to be used in new sections (accents/badges) |
| --fourth-color | 230, 178, 103 | #E6B267 | golden caramel | to be used in new sections (highlights) |
| --background-custome | 241, 232, 213 | #F1E8D5 | cream | to be used in new sections (alternate backgrounds) |
| --white-custome / --black-custome | 255,255,255 / 0,0,0 | — | theme swap pair | body/text |

### Notes for the new sections

```text
- Put the previously unused --third-color, --fourth-color and --background-custome
  to work in the new sections (accents, badges, alternating cream backgrounds)
- changeColor() / changeColor01() presets remain optional alternate schemes — no change
```

---

## 6. Phase 1 — Hero Slider (Owl Carousel) — DONE

### Structure

```html
<section id="home" class="HeroSection">
    <div class="HeroSlider owl-carousel owl-theme">
        <div class="HeroSlide">
            <img src="Image/slide-1.jpg" alt="">
            <div class="HeroSlide-caption">
                <h1>...</h1>
                <p>...</p>
                <a class="btn HeroBtn" href="#products">مشاهده محصولات</a>
            </div>
        </div>
        <!-- 2–3 slides -->
    </div>
</section>
```

### Implementation notes

```text
- Owl init in js/source.js inside DOMContentLoaded with an existence check
- Options: rtl: true, items: 1, loop: true, autoplay: true, autoplayTimeout: 5000,
  smartSpeed: 800, dots: true, nav: false
- Overlay rgba(var(--black-custome), 0.45) under the caption for legibility
- Caption uses wow animate__fadeInUp
- Decorative slide images: alt="" ; informative images: descriptive Persian alt text
- Disable autoplay when prefers-reduced-motion is set
```

### Status: implemented and verified

```text
- js/jquery.min.js (jQuery 3.7.1, local) added, loaded before owl.carousel.min.js
- index.html: #home HeroSection with 3 photo slides, خانه links → #home, hamburger aria-label fixed
- Css/Style.css: .HeroSection / .HeroSlider / .HeroSlide / .HeroSlide-caption / .HeroBtn + custom Owl dots (owl.theme.css is not part of this project)
- js/source.js: Owl init (rtl, loop, autoplay 5000ms, dots, hover pause) with
  existence checks and prefers-reduced-motion handling
- IMPORTANT: hero caption/overlay/button/dot colors are intentionally FIXED
  (not theme-swapped) because the hero backgrounds are fixed brand colors —
  swapping them broke contrast in dark mode (verified and fixed)
- Verified live: Owl loads in RTL, dots navigate, autoplay advances, image loads,
  zero console errors, light + dark modes checked
- All 3 slides use real photography (Image/hero-*.jpg, Unsplash free license,
  compressed to 1600px width) and real Persian copy (owner-approved) — swap
  assets/copy whenever brand-specific material becomes available
```

---

## 7. Phase 2 — About — ✅ DONE

```text
- section#about → container → row
- col-lg-6: rounded image (var(--radius-custome)) + col-lg-6: text block
- Section title pattern: accent <span> inside h2 (footer h5 pattern), or the .Titr
  pattern from Css/Essential.css if that file gets linked (decision needed)
- Short placeholder paragraph (لورم ایپسوم) + 3 feature items with Bootstrap Icons
  (e.g. bi-cup-hot, bi-clock, bi-people)
- Optional .btn linking to #contact
- wow animate__fadeInUp with data-wow-delay stagger (existing .3s/.5s/.7s rhythm)
- No invented history, statistics or awards — placeholders only
```

### Implementation status

```text
- Built with the reusable .SectionTitr pattern (accent span inside h2); Essential.css
  stays unlinked — accent uses --third-color because --first-color fails dark-mode
  contrast on section backgrounds
- Real Persian content written (owner-approved content exception, see Context.md):
  brand-story paragraph; no invented history, statistics or awards
- Features: bi-cup-hot (تازه‌رست), bi-cake2 (دمنوش و دسر خانگی), bi-people (فضایی برای همه)
- Image: Image/about-barista.jpg (barista / latte-art photo, 4:3, object-fit cover,
  loading="lazy", descriptive Persian alt)
- CTA: reusable .PrimaryBtn → #contact (contact section pending, Phase 5)
- WOW fadeInUp stagger .3s → 1.5s; image column keeps mb-4 mb-lg-0 so mobile stacks
  image-first
- Verified light / dark / mobile via headless captures; new classes documented in
  Conventions.md + UI.md
```

---

## 8. Phase 3 — Products (Tabs + Carousel)

### Structure

```html
<section id="products">
    <h2>محصولات</h2>
    <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item">
            <button class="nav-link active" data-bs-toggle="tab"
                data-bs-target="#tab-coffee" type="button">قهوه</button>
        </li>
        <!-- more category tabs -->
    </ul>
    <div class="tab-content">
        <div class="tab-pane fade show active" id="tab-coffee">
            <div class="ProductsCarousel owl-carousel owl-theme">
                <article class="ProductCard">
                    <!-- img + h3 + p + price row -->
                </article>
            </div>
        </div>
    </div>
</section>
```

### Implementation notes

```text
- Tabs: native Bootstrap 5.3.6 tabs (data-bs-toggle="tab") → keyboard support for free
- One Owl instance per tab pane: rtl: true, loop: false, margin: 20, nav: true,
  dots: true, responsive: 0→1, 576→2, 992→3, 1400→4
- Known pitfall: a carousel inside a hidden tab pane has zero width — initialize
  lazily on the first shown.bs.tab event or trigger refresh.owl.carousel afterwards
- Price row only with owner-provided values; otherwise a clear «—» placeholder
- Product images need meaningful Persian alt text
```

### Implementation status

```text
- ✅ DONE: 3 Bootstrap tabs (قهوه / دمنوش / دسر) with 17 product cards, all local
  Image/product-*.jpg / tea-*.jpg / dessert-*.jpg photos, Persian alt text
- Classes: .ProductsSection, .ProductsIntro, .ProductsTabs, .ProductsCarousel,
  .ProductCard (+ -img / -body / -price parts) — documented in Conventions.md + UI.md
- Zero-width pitfall solved exactly as planned: the active pane's carousel initializes
  immediately; hidden panes initialize lazily on their first shown.bs.tab event
  (source.js initProductsCarousel)
- Prices are placeholder text pending owner-provided values
- Verified via headless captures: each of the 3 tabs, dark mode and mobile; owl items
  render per breakpoint, zero JS errors, node --check OK, every src="Image/..." resolves
```

---

## 9. Phase 4 — Articles

```text
- section#articles → h2 + row of col-md-4 article cards
- Card: image (fixed aspect ratio), small meta line, h3 title, excerpt p,
  descriptive «ادامه مطلب» link
- Use a grid for ≤ 6 posts; switch to an Owl Carousel (same config pattern as
  products) if the list grows
- wow animate__fadeInUp stagger like the footer (.3s/.5s/.7s)
- Placeholder titles/excerpts only; real posts come from the owner
```

### Implementation status

```text
- ✅ DONE: .ArticlesSection grid (row g-4, col-md-4) of three .ArticleCard columns —
  grid kept as planned since 3 posts ≤ 6; Owl only if the list grows
- Real Persian teaser copy (owner-approved content exception, see Context.md):
  3 posts with category tags (راهنمای قهوه / دانستنی‌ها / دمنوش)
- Images: article-brewing.jpg / article-beans.jpg / article-tea.jpg — local files,
  4:3 aspect-ratio + object-fit cover, loading="lazy", descriptive Persian alt
- Card parts: .ArticleCard-img / .ArticleCard-body / .ArticleCard-tag /
  .ArticleCard-link; link color is theme-aware (--black-custome) with caramel hover,
  arrow slides with translateX(-4px) (RTL direction)
- «ادامه مطلب» links keep href="#" until real article pages exist; aria-labels included
- WOW fadeInUp stagger .3s/.5s/.7s as planned
- Verified light / dark / mobile via headless captures; classes documented in
  Conventions.md + UI.md
```

---

## 10. Phase 5 — Contact

```text
- section#contact → row
- col-lg-6: info block reusing the footer-contact icon-list pattern
  (bi-geo-alt-fill, bi-phone, bi-envelope-at) + sm-list social icons
- col-lg-6: Bootstrap form — name, email, phone (tel), message (textarea), submit .btn
- Every control needs <label for> (Accessibility.md) + Bootstrap validation classes
- Static site: no backend — keep action="#" and do NOT fake success messages
- Address/phone stay placeholders until the owner provides real data
- Map: static image or external link only — no third-party widget (Performance.md)
```

### Implementation status

```text
- ✅ DONE: section#contact → row g-4 with col-lg-6 info block + col-lg-6 form,
  .SectionTitr title, WOW fadeInUp stagger (.3s / .5s) as in the other sections
- Real Persian copy (owner-approved content exception, see Context.md); address,
  phone and email stay clearly-marked placeholders (نشانی نمونه / tel:+98… /
  example@support.com) until the owner provides real data
- Info list: .ContactInfo-list icon tiles (caramel tint accent pattern, same idea
  as ArticleCard-tag) + .sm-list social icons with Persian aria-labels
- Form: name / email / phone / message with <label for> on every control, Persian
  invalid-feedback texts, Bootstrap .needs-validation (novalidate + .was-validated)
- Honest UX exactly as planned: a valid submit reveals the role="status"
  .ContactForm-note («form is not connected to a server yet») — never a fake
  success message; an invalid submit focuses the first :invalid control
- .form-control colors re-themed with project variables so inputs follow
  light/dark mode; Bootstrap's .was-validated rules stay authoritative for states
- Map skipped as planned (no third-party widget; no owner location provided)
- Verified via headless captures: light, dark, invalid submit, valid submit and
  mobile; zero JS errors, node --check OK; classes documented in Conventions.md
  + UI.md, form validation a11y pattern in Accessibility.md
- Owner change after Phase 6: the form was removed — section#contact is now
  info-only (see section 14)
```

---

## 11. Phase 6 — Global Verification

```text
- HTML: semantic, RTL, valid, logical heading hierarchy
- CSS: variables only (no hardcoded theme colors), no duplication
- JS: no debug code, existence checks, no broken existing behavior
- Themes: Light / Dark / both presets / both custom color pickers
- Responsive: 375 / 576 / 768 / 992 / 1200 / 1400 / 1600 / 1800 / 2600
- Animations: WOW classes fire, reduced-motion respected
- Accessibility: keyboard-only pass, labels, visible focus, contrast
- SEO: unique title + Persian meta description, meaningful alt texts, descriptive links;
  robots.txt / sitemap.xml if indexing is wanted
- Performance: compressed/WebP images, loading="lazy" below the fold,
  defer scripts where order-safe
```

### Implementation status

```text
- ✅ DONE — final global pass over the finished page (all six phases live)
- Themes: light / dark / both legacy presets / custom color pickers verified
  via headless captures with a diagnostic bar (owls, images, labels, h1, vars)
- Responsive: 375 / 576 / 768 / 992 / 1200 / 1400 / 1600 / 1800 / 2600 captured
  and inspected; layouts hold, products grid adapts 1→2→3→4 per breakpoint
- Reduced motion: global CSS block added to Style.css (animation/transition
  durations → 0.01ms, scroll-behavior → auto) alongside the existing JS hero
  handling; documented in Accessibility.md
- Fixed-color audit: every remaining hex value is intentional — the legacy
  #ThemeBoxSwitch switch UI and the documented fixed-on-brand pattern (hero
  dots, .PrimaryBtn, active tab, owl-nav hover); zero accidental hardcodes
- A11y: h1 ×1, every img has Persian alt text, every form control labeled,
  aria-labels on icon-only links, Bootstrap tabs keyboard-operable
- SEO: Persian title + description + Open Graph; five semantic sections with
  unique anchors; zero unresolved in-page anchors; zero alt="pic" remnants
- Performance: all 6 scripts defer (order-safe: bootstrap → jquery → owl →
  point → wow → source); below-fold images lazy-loaded; ~8.1 MB across 28
  local images (hero eager ~0.7 MB, rest lazy) — WebP conversion left to owner
- Fixes this phase: footer logo alt («لوگو کافه باریستا»), nav + footer logos
  on Image/logo.png with meaningful alt, footer social-icon aria-labels,
  defer added to every script
- Owner decisions pending: unreferenced originals Image/screencapture.png and
  Image/سسس.jpg kept for the owner to delete; robots.txt / sitemap.xml need a
  real domain; contact data still placeholders
```

```

---

## 12. Execution Order

```text
Phase 0 (palette) → 1 (slider) → 2 (about) → 3 (products) → 4 (articles) → 5 (contact) → 6 (verify)
```

The palette comes first because every new section consumes the variables.

Dependency fix (resolved in Phase 1):

```text
owl.carousel.min.js is the jQuery-based build. A local js/jquery.min.js (3.7.1) is
now loaded before owl.carousel.min.js and documented in /md/Tech Stack.md.
jQuery stays an internal Owl dependency — custom code stays vanilla.
```

---

## 13. Out of Scope

```text
- No new frameworks/libraries beyond the Owl-required jQuery runtime
- No second theme/color/animation/carousel system
- No real business claims, prices or addresses until provided
- No multi-page restructuring (single page + anchors for now)
```

---

## 14. Post-Roadmap Changes

Owner-requested changes after Phase 6 completion:

```text
1. Contact form removed (owner decision — no backend planned)
   - section#contact is now info-only: .ContactInfo centered via
     row justify-content-center + col-lg-8
   - .ContactForm markup, the anonymous submit handler in source.js and all
     .ContactForm CSS were removed; .PrimaryBtn stays (About CTA uses it)
   - The Bootstrap validation pattern remains documented in Accessibility.md
     as guidance for any future form

2. New "Why" section (#why) between #articles and #contact — Contact stays the
   page's closing action section
   - .WhySection + .WhyCard: 4 cards, col-md-6 col-lg-3 grid, icon tiles in the
     caramel-tint accent pattern (bi-fire, bi-cup-straw, bi-armchair, bi-stopwatch)
   - WOW fadeInUp stagger .3s/.5s/.7s/.9s; promise-style Persian copy only
   - Nav + footer quick links gained «چرا ما؟» → #why
   - Patterns documented in Conventions.md + UI.md (Why Card Pattern)

3. Owl clone a11y fix — loop-mode clones were announced twice by screen readers
   (a live-DOM diagnostic showed h1 ×2 while the HTML source has exactly one)
   - source.js: shared hideOwlClones() helper marks .owl-item.cloned with
     aria-hidden="true"; called after the hero init and each product carousel init
   - Rule documented in Accessibility.md (Carousels section); helper listed in
     Conventions.md; verified live: clonesHidden=4/4, h1=1, jsErrors=0

4. New "Testimonials" section (#testimonials) between #why and #contact —
   customer-satisfaction social proof (رضایت مشتریان)
   - .TestimonialsSection + .TestimonialCard: 6 quote cards in an Owl carousel
     (rtl, loop, autoplay 6s + hover-pause, 1/2/3 items at 0/768/1200, no nav,
     theme-aware dots like ProductsCarousel)
   - Card anatomy: role="img" star rating with Persian aria-label
     («امتیاز ۵ از ۵»), quote text, initials avatar (no fake photos) + name/role
   - Reviews are generic placeholders — an HTML comment marks them for the owner
     to replace with real customer feedback
   - hideOwlClones() extended to the new carousel: live check shows
     clonesHidden=10/10 across all initialized carousels, the h1 count outside
     clones stays 1, jsErrors=0
   - Nav + footer quick links gained «رضایت مشتریان» → #testimonials
   - Patterns documented in Conventions.md + UI.md (Testimonial Card Pattern)

5. Footer refresh — placeholder cleanup + working-hours column + back-to-top
   - «Compony» placeholder in the copyright became «کافه باریستا»; the dummy
     «ادرس شرکت» link became the plain-text sample address (same as #contact)
     and the duplicated phone line was removed
   - Quick links reordered to the page flow (contact last); grid rebalanced
     from 4+1+3+4 to four equal col-lg-3 col-md-6 boxes (spacer column dropped)
   - New .footer-hours column (ساعات کاری) — sample hours marked with a note +
     HTML comment for the owner to replace with real ones
   - .BackToTop fixed button: appears past scrollY 400, smooth scroll,
     reduced-motion aware, hidden from the tab order while hidden
   - A11y: every decorative footer icon now carries aria-hidden="true"
   - Patterns documented in Conventions.md + UI.md (Back To Top Button Pattern)

6. Products section — Owl carousel removed (owner decision), cards render
   from data
   - New js/product.js: the PRODUCTS array is the single source of truth for
     the menu (6 coffee + 5 tea + 6 dessert items, Persian copy/prices/alt
     text moved verbatim from the old hardcoded cards); loaded before source.js
   - source.js: the lazy per-tab Owl init was replaced by renderProducts(),
     which builds .ProductCard markup into each pane's .ProductsGrid
     (#tab-{category}); the tabs stay plain Bootstrap
   - .ProductsGrid static CSS grid keeps the carousel's responsive rhythm:
     1 column mobile → 2 @576 → 3 @992 → 4 @1400, 20px gaps, equal heights
     per row; the products-only Owl nav/dots CSS was removed
   - Patterns documented in Conventions.md (PRODUCTS, ProductsGrid,
     renderProducts) + Architecture.md (data-only file exception) + UI.md
     (Product Card Pattern rules updated)
```