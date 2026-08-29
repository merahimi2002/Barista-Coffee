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

Animations should be reduced or disabled when requested by the user's operating system.

---

## ARIA

Use ARIA only when native HTML cannot provide the required semantics.

Do not add unnecessary ARIA attributes.