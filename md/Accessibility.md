# Accessibility

Accessibility is a required part of implementation.

Target:

```text
WCAG 2.2 AA
```

where reasonably applicable.

---

## Semantic HTML

Use native HTML semantics before ARIA.

Prefer:

```html
<button>
```

instead of:

```html
<div role="button">
```

---

## Images

Informative images require meaningful alt text.

```html
<img src="..." alt="Description of the image">
```

Decorative images:

```html
<img src="..." alt="">
```

Do not write:

```text
image
photo
picture
```

as meaningless alt text.

---

## Forms

Every form control needs an accessible label.

Prefer:

```html
<label for="email">Email</label>
<input id="email" type="email">
```

For client-side validation use the Bootstrap pattern with Persian feedback text:

```html
<input id="email" type="email" required>
<div class="invalid-feedback">لطفاً یک ایمیل معتبر وارد کنید.</div>
```

Validation rules (for any future form):

```text
- Use .needs-validation + novalidate; toggle .was-validated on submit
- On invalid submit, move focus to the first :invalid control (keyboard users)
- Status messages use role="status" (e.g. the contact form server notice)
- Never fake success messages on a static site — state honestly what happened
```

---

## Buttons

Use `<button>` for actions.

Use `<a>` for navigation.

Do not use anchors as fake buttons unless there is a valid navigation reason.

---

## Keyboard

All interactive functionality must be usable with a keyboard.

Check:

- Tab
- Shift + Tab
- Enter
- Space
- Escape
- Arrow keys where appropriate

---

## Focus

Never remove focus indicators without replacement.

---

## Color

Do not communicate information through color alone.

Bad:

```text
Red = error
Green = success
```

without another indicator.

Use:

- icon
- text
- semantic state

when appropriate.

---

## Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Established implementation (Style.css + source.js):

```text
- Global CSS block under prefers-reduced-motion: reduce: animation/transition
  durations collapse to 0.01ms and scroll-behavior is forced to auto
- JS: the hero slider and the testimonials carousel disable autoplay and slide
  transitions via matchMedia('(prefers-reduced-motion: reduce)') in source.js
- New animated UI must stay usable with both of these in place
```

---

## Carousels (Owl Carousel)

Owl's `loop: true` mode clones slide markup to fake the infinite effect. Clones
are visual duplicates only and must never be exposed to assistive technology
(otherwise content such as the hero `h1` is announced twice, even though the
HTML source contains exactly one).

```text
- After every Owl init, source.js marks .owl-item.cloned with aria-hidden="true"
  (hideOwlClones helper — called for the hero slider and the testimonials
  carousel; the products Owl carousel was removed — its cards now render from
  the PRODUCTS data array into a static grid. Live check: 10/10 clones hidden
  and exactly one h1 remains outside clones)
- Product data (js/product.js) requires a Persian alt for every item — the
  renderer falls back to the product name when alt is missing
- Keep real content in the original items only
- Do not place focusable elements (links, buttons) inside cloned slides
```

---

## ARIA

Use ARIA only when native HTML cannot provide the required semantics.

Do not add unnecessary ARIA attributes.