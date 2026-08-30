# UI Style

## Design Direction

The website should feel:

- modern
- polished
- professional
- clean
- visually coherent

The design should not look like an unmodified Bootstrap template.

Bootstrap is the foundation, not the complete visual identity.

---

## RTL Layout

The interface is Persian and RTL.

All layouts must be designed with RTL behavior in mind.

---

## Existing Color System

The project uses:

```css
--first-color
--second-color
--white-custome
--black-custome
```

Example:

```css
background-color: rgb(var(--first-color));
color: rgb(var(--black-custome));
```

New components should reuse these variables.

---

## Radius

The project has:

```css
--radius-custome: 20px;
```

Use the existing radius system before introducing arbitrary values.

---

## Typography

Use IRANSans.

Existing typography uses responsive `clamp()` sizing for:

- headings
- paragraphs
- links
- forms
- tables

Preserve responsive typography behavior.

---

## Spacing

Prefer Bootstrap spacing utilities where appropriate.

For project-specific spacing, remain consistent with the existing stylesheet.

---

## Animation

Use animation intentionally.

Existing animation behavior is based on WOW.js and Animate.css/project animation classes.

Prefer the existing animation system over creating a new one.

---

## Visual Consistency

New sections should visually belong to the same website.

Do not randomly introduce:

- gradients
- excessive glassmorphism
- excessive shadows
- unrelated colors
- different border-radius systems
- different typography systems

unless explicitly requested by the design direction.

---

## Buttons

Buttons should clearly communicate their action.

Primary and secondary actions should have distinguishable visual hierarchy.

The reusable primary button is `.PrimaryBtn`:

```css
background-color: rgb(var(--second-color));
color: #ffffff; /* intentionally fixed — see note below */
```

Its text color is fixed on purpose. Button and hero backgrounds stay brand-colored in
both themes, so swapping text with `--white-custome` would produce black-on-brown text
in dark mode.

---

## Section Title Pattern

New sections use the reusable `.SectionTitr` pattern — an accent `<span>` inside the
section `h2` (same visual idea as the footer `h5 span`):

```html
<div class="SectionTitr">
    <h2><span>درباره</span> ما</h2>
</div>
```

The accent span uses `rgb(var(--third-color))`, not `--first-color`: the dark green
falls below contrast limits on the dark-mode background, while the caramel accent
stays readable in both light and dark modes.

---

## Product Card Pattern

Product cards (`.ProductCard`) are BEM-style: image, body, price parts.

```html
<article class="ProductCard">
    <img class="ProductCard-img" src="Image/product-espresso.jpg" alt="..." loading="lazy">
    <div class="ProductCard-body">
        <h3>اسپرسو</h3>
        <p>...</p>
    </div>
    <div class="ProductCard-price">...</div>
</article>
```

Rules:

```text
- Cards render from the PRODUCTS array in js/product.js (renderProducts in
  source.js) into each pane's .ProductsGrid — edit the data file, not the HTML
- .ProductsGrid is a static CSS grid (the Owl carousel was removed): 1 column
  mobile → 2 @576 → 3 @992 → 4 @1400, 20px gaps, equal heights per row
- Image uses a fixed aspect ratio with object-fit: cover so all cards align
- Product images are local files with descriptive Persian alt text and lazy
  loading (the alt lives in the data array and is required)
```

---

## Article Card Pattern

Article cards (`.ArticleCard`) reuse the Product Card BEM style, but live in a plain
Bootstrap grid instead of a carousel.

```html
<article class="ArticleCard">
    <div class="ArticleCard-img">
        <img src="Image/article-brewing.jpg" alt="..." loading="lazy" decoding="async">
    </div>
    <div class="ArticleCard-body">
        <span class="ArticleCard-tag">راهنمای قهوه</span>
        <h3>...</h3>
        <p>...</p>
        <a class="ArticleCard-link" href="#" aria-label="ادامه مطلب: ...">ادامه مطلب
            <i class="bi bi-arrow-left" aria-hidden="true"></i></a>
    </div>
</article>
```

Rules:

```text
- Grid of col-md-4 columns for up to 6 posts; switch to an Owl Carousel
  (hero/testimonials config pattern) if the list grows
- Image: fixed 4/3 aspect ratio with object-fit: cover
- Tag badge uses the --third-color tint pattern (same idea as the SectionTitr accent)
- Link color is theme-aware (--black-custome); caramel hover passes contrast in both
  themes; the arrow icon moves with translateX(-4px) (RTL direction)
- «ادامه مطلب» links get aria-labels containing the post title; href="#" stays until
  real article pages exist
```

---

## Contact Section Pattern

Info-only layout (the owner removed the form): `.ContactInfo` centered via
`row justify-content-center` + `col-lg-8 col-12`.

```html
<ul class="ContactInfo-list">
    <li>
        <i class="bi bi-geo-alt-fill" aria-hidden="true"></i>
        <span>تهران، ...</span>
    </li>
    <li>
        <i class="bi bi-phone" aria-hidden="true"></i>
        <a href="tel:+982100000000">021-00000000</a>
    </li>
</ul>
```

Rules:

```text
- Info icon tiles reuse the caramel tint accent pattern (like ArticleCard-tag);
  social .sm-list icons keep the footer look with Persian aria-labels
- tel: / mailto: links carry the real contact action (no fake form submit)
- The Bootstrap form-validation pattern lives on in Accessibility.md as
  guidance for any future form
```

---

## Why Card Pattern

Icon-tile reason cards (`.WhyCard`) in a `col-md-6 col-lg-3` grid — the compact,
standalone sibling of `.AboutFeature` (which is a vertical list inside the
two-column About layout).

```html
<div class="col-md-6 col-lg-3 col-12 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
    <div class="WhyCard">
        <i class="bi bi-fire" aria-hidden="true"></i>
        <h3>...</h3>
        <p>...</p>
    </div>
</div>
```

Rules:

```text
- Up to 4 cards per row on lg; icon tiles reuse the caramel tint accent pattern
  (on hover the tile turns solid caramel with fixed white icon — the same
  fixed-on-brand rule as .PrimaryBtn, safe in both themes)
- Card background is a faint theme-aware --black-custome tint; hover shifts to a
  --third-color tint + translateY(-5px) lift (the global reduced-motion block
  strips the motion for users who ask for it)
- Promise-style Persian copy only — no invented statistics or awards
- WOW fadeInUp stagger .3s/.5s/.7s/.9s (the existing delay vocabulary)
```

---

## Testimonial Card Pattern

Quote cards (`.TestimonialCard`) inside the `.TestimonialsCarousel` Owl slider —
customer-satisfaction social proof between #why and #contact.

```html
<div class="TestimonialCard">
    <div class="TestimonialCard-stars" role="img" aria-label="امتیاز ۵ از ۵">
        <i class="bi bi-star-fill" aria-hidden="true"></i>
        <!-- one icon per star -->
    </div>
    <p class="TestimonialCard-text">«...»</p>
    <div class="TestimonialCard-footer">
        <span class="TestimonialCard-avatar" aria-hidden="true">م</span>
        <span class="TestimonialCard-meta">
            <strong>نام مشتری</strong>
            <small>عنوان نقش</small>
        </span>
    </div>
</div>
```

Rules:

```text
- Carousel config mirrors the hero: rtl, loop, autoplay 6s + hover-pause,
  1/2/3 items at 0/768/1200, dots only — dots use the shared theme-aware dot
  pattern (owl.theme.css is not part of this project; the products carousel
  was removed and its dot styles no longer exist)
- Equal heights: .owl-stage becomes a flex row, scoped to this carousel only
- Card background is the faint --black-custome tint (WhyCard pattern); hover
  tints to --third-color WITHOUT the translateY lift — the carousel viewport
  clips vertical overflow
- Stars and the avatar circle use the caramel --third-color accent; the avatar
  turns solid caramel with a fixed white initial on hover (fixed-on-brand rule)
- Star ratings: role="img" + Persian aria-label on the wrapper, individual
  icons aria-hidden; initials avatars instead of fake customer photos
- Reviews are generic placeholders — keep the HTML comment marking them for
  the owner to replace with real customer feedback
- WOW fadeInUp on the section title only; cards stay clone-safe (no links or
  focusable elements inside)
```

---

## Cards

Cards should only be used when grouping content is useful.

Do not turn every section into a card.

---

## Icons

Use Bootstrap Icons consistently.

Icons should support the meaning of the interface rather than merely decorate it.