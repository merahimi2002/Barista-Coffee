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
owl.carousel.min.js is the jQuery-based build, but jQuery is NOT present in the project.
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

## 6. Phase 1 — Hero Slider (Owl Carousel)

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

---

## 7. Phase 2 — About

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

---

## 12. Execution Order

```text
Phase 0 (palette) → 1 (slider) → 2 (about) → 3 (products) → 4 (articles) → 5 (contact) → 6 (verify)
```

The palette comes first because every new section consumes the variables.

Required dependency fix during Phase 1:

```text
owl.carousel.min.js is the jQuery-based build, but jQuery is missing from js/.
Add a local js/jquery.min.js loaded before owl.carousel.min.js, and document it
in /md/Tech Stack.md. jQuery stays an internal Owl dependency — custom code stays vanilla.
```

---

## 13. Out of Scope

```text
- No new frameworks/libraries beyond the Owl-required jQuery runtime
- No second theme/color/animation/carousel system
- No real business claims, prices or addresses until provided
- No multi-page restructuring (single page + anchors for now)
```