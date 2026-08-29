# Responsive Rules

## Framework

Responsive behavior primarily uses Bootstrap 5.3.6.

---

## Existing Breakpoints

The project uses Bootstrap breakpoints plus custom CSS.

Important existing rules include:

```text
max-width: 990px
max-width: 768px
min-width: 768px
```

---

## Large Screens

The project has custom container widths:

```text
1400px → 1320px
1600px → 1500px
1800px → 1600px
2600px → 2000px
```

Preserve this behavior.

---

## Mobile

At mobile widths:

- navbar collapses
- theme controls adapt
- footer columns stack
- spacing is reduced where necessary
- typography remains readable

---

## Navbar

The navbar uses:

```text
navbar-expand-lg
```

and therefore collapses below the large breakpoint.

The custom hamburger animation uses:

```text
first-button
animated-icon1
```

and JavaScript toggles:

```text
open
```

Do not break this relationship.

---

## Testing

New UI should be checked at:

```text
375px
576px
768px
992px
1200px
1400px
1600px
1800px
2600px
```

---

## Horizontal Overflow

The project explicitly prevents horizontal overflow:

```css
html {
    overflow-x: hidden;
}

body {
    overflow-x: hidden;
}
```

Do not use overflow hiding as a solution for broken responsive layouts.

Fix the actual source of overflow whenever possible.