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

---

## Cards

Cards should only be used when grouping content is useful.

Do not turn every section into a card.

---

## Icons

Use Bootstrap Icons consistently.

Icons should support the meaning of the interface rather than merely decorate it.